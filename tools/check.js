// Compares every value in DW (docs/javascripts/dweller.js) with the plugin code and default configs.
// Usage: node tools/check.js   (exit 0 = in sync, 1 = mismatches, 2 = a plugin repo is missing)
const fs = require("fs");
const path = require("path");
const { DW } = require("../docs/javascripts/dweller.js");

const root = path.resolve(__dirname, "../..");
for (const repo of ["DwellerCore", "DwellerBiomes", "DwellerStructures"]) {
  if (!fs.existsSync(path.join(root, repo))) {
    console.error(`Plugin repo not found: expected ${path.join(root, repo)}`);
    process.exit(2);
  }
}
const read = (f) => fs.readFileSync(path.join(root, f), "utf8");

// ---------- YAML subset: block maps, scalars, flow lists/maps, quoted keys, # comments ----------
const stripComment = (line) => {
  let q = null;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (q) { if (c === q) q = null; }
    else if (c === '"' || c === "'") q = c;
    else if (c === "#" && (i === 0 || /\s/.test(line[i - 1]))) return line.slice(0, i);
  }
  return line;
};

const scalar = (s) => {
  s = s.trim();
  if (/^(["']).*\1$/.test(s)) return s.slice(1, -1);
  if (s !== "" && !isNaN(s)) return Number(s);
  if (s === "true" || s === "false") return s === "true";
  return s;
};

function parseFlow(s) {
  let i = 0;
  const ws = () => { while (/\s/.test(s[i])) i++; };
  const token = (stops) => {
    ws();
    if (s[i] === '"' || s[i] === "'") { const q = s[i], j = s.indexOf(q, i + 1); const t = s.slice(i, j + 1); i = j + 1; return t; }
    const j = i; while (i < s.length && !stops.includes(s[i])) i++;
    return s.slice(j, i);
  };
  const value = () => {
    ws();
    if (s[i] === "[") {
      i++; const out = [];
      for (ws(); s[i] !== "]"; ws()) { out.push(value()); ws(); if (s[i] === ",") i++; ws(); }
      i++; return out;
    }
    if (s[i] === "{") {
      i++; const out = {};
      for (ws(); s[i] !== "}"; ws()) {
        const k = scalar(token(":")); i++;
        out[k] = value(); ws(); if (s[i] === ",") i++; ws();
      }
      i++; return out;
    }
    return scalar(token(",]}"));
  };
  return value();
}

// Every "key: value" line with its full key path. List items ("- ...") are skipped: no checked value lives in one.
function yamlEntries(text) {
  const stack = [], out = [];
  for (const raw of text.split(/\r?\n/)) {
    const line = stripComment(raw);
    const m = line.match(/^(\s*)("[^"]*"|'[^']*'|[^\s"'#\-][^:]*?):(?:\s+(.*?))?\s*$/);
    if (!m) continue;
    const indent = m[1].length;
    while (stack.length && stack[stack.length - 1].indent >= indent) stack.pop();
    stack.push({ indent, key: scalar(m[2]) });
    out.push({ path: stack.map((e) => e.key), value: m[3] ?? "" });
  }
  return out;
}

const yamlCache = {};
const entries = (file) => (yamlCache[file] ??= yamlEntries(read(file)));
// Value at a key path; descends into flow maps/lists written inline (e.g. placement: { min-y: ... }).
function yget(file, keys) {
  for (const e of entries(file)) {
    if (e.path.length > keys.length || !e.path.every((k, i) => k === keys[i])) continue;
    let v = /^[\[{]/.test(e.value) ? parseFlow(e.value) : scalar(e.value);
    if (e.path.length === keys.length) return v;
    if (typeof v !== "object") continue;
    for (const k of keys.slice(e.path.length)) v = v?.[k];
    if (v !== undefined) return v;
  }
  return undefined;
}
const ychildren = (file, keys) =>
  entries(file).filter((e) => e.path.length === keys.length + 1 && keys.every((k, i) => k === e.path[i])).map((e) => e.path[keys.length]);

// ---------- Java / Python constants ----------
const constant = (file, name) => {
  const m = read(file).match(new RegExp(`\\b${name}\\s*=\\s*([^;\\n]+?)\\s*;?\\s*(?:#.*|//.*)?$`, "m"));
  return m ? m[1] : undefined;
};
const jnum = (file, name) => {
  const v = constant(file, name);
  return v !== undefined && !isNaN(v) ? Number(v) : v;
};

// ---------- checks ----------
let checked = 0;
const mismatches = [], notChecked = [], covered = new Set();
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const at = (p) => p.split(/\.|\[|\]/).filter(Boolean).reduce((o, k) => o?.[k], DW);
function check(dwPath, code, where, wiki = at(dwPath)) {
  covered.add(dwPath);
  checked++;
  if (!same(wiki, code)) mismatches.push(`DW.${dwPath}: wiki ${JSON.stringify(wiki)}, code ${JSON.stringify(code)} (${where})`);
}
const skip = (dwPath, reason) => { covered.add(dwPath); notChecked.push(`DW.${dwPath}: ${reason}`); };

const CORE = "DwellerCore/src/main/resources/config.yml";
const BIOMES = "DwellerBiomes/src/main/resources/config.yml";
const DEPTH = "DwellerCore/src/main/java/net/dwellermc/core/Depth.java";
const GEN = "DwellerCore/src/main/java/net/dwellermc/core/world/DwellerGenerator.java";
const DUNGEONS = "DwellerCore/tools/dungeons.py";
const PICKER = "DwellerBiomes/src/main/java/net/dwellermc/biomes/BiomePicker.java";
const cfg = (dwPath, file, key) => check(dwPath, yget(file, key.split(".")), `${file}:${key}`);

check("worldMinY", jnum(DEPTH, "WORLD_MIN_Y"), `${DEPTH}:WORLD_MIN_Y`);
cfg("caveTopY", CORE, "world.cave-top-y");
// caveCeilingY = CAVE_TOP = ROOF_BOTTOM - 1; flag the derivation itself if the Java expression changes.
const caveTop = constant(GEN, "CAVE_TOP");
check("caveCeilingY", caveTop === "ROOF_BOTTOM - 1" ? jnum(GEN, "ROOF_BOTTOM") - 1 : `CAVE_TOP = ${caveTop}`, `${GEN}:CAVE_TOP`);
cfg("deepslateY", CORE, "rock.deepslate-y");
cfg("maxLevel", CORE, "mobs.max-level");
cfg("levelSpread", CORE, "mobs.level-spread");

cfg("ores.slab", CORE, "ores.layer-height");
cfg("ores.buriedChance", CORE, "ores.buried-chance");
cfg("ores.depthMultiplier", CORE, "ores.depth-multiplier");
check("ores.types[*].id", ychildren(CORE, ["ores", "types"]), `${CORE}:ores.types`, DW.ores.types.map((o) => o.id));
DW.ores.types.forEach((o, i) => {
  covered.add(`ores.types[${i}].id`);
  cfg(`ores.types[${i}].veins`, CORE, `ores.types.${o.id}.veins`);
  cfg(`ores.types[${i}].size`, CORE, `ores.types.${o.id}.size`);
  skip(`ores.types[${i}].name`, "display name, only in the wiki");
});

const mobs = {
  curveExponent: "curve-exponent", maxHealthMultiplier: "max-health-multiplier", maxDamageMultiplier: "max-damage-multiplier",
  maxSpeedBonus: "max-speed-bonus", maxArmor: "max-armor", maxToughness: "max-toughness",
  followRangeMin: "follow-range-min", followRangeMax: "follow-range-max", statusHitMaxChance: "status-hit-max-chance",
  replaceChance: "spawn-mix.replace-chance", deepMobStartY: "spawn-mix.deep-mob-start-y", deepMobChance: "spawn-mix.deep-mob-chance",
  xpMaxMultiplier: "rewards.xp-max-multiplier", extraLootMaxRolls: "rewards.extra-loot-max-rolls", rareDropMaxChance: "rewards.rare-drop-max-chance",
};
for (const [k, key] of Object.entries(mobs)) cfg(`mobs.${k}`, CORE, `mobs.${key}`);
// Wiki writes "Cave Spider", code EntityType.CAVE_SPIDER.
const title = (s) => s.toLowerCase().split("_").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
const weighted = (key) => Object.entries(yget(CORE, key.split(".")) ?? {}).map(([t, w]) => [title(t), Number(w)]);
check("mobs.mix", weighted("mobs.spawn-mix.tough-mobs"), `${CORE}:mobs.spawn-mix.tough-mobs`);
check("mobs.deep", weighted("mobs.spawn-mix.deep-mobs"), `${CORE}:mobs.spawn-mix.deep-mobs`);

cfg("elites.chance", CORE, "elites.chance");
cfg("elites.xpMultiplier", CORE, "elites.xp-multiplier");

const points = constant(DUNGEONS, "POINTS");
check("dungeons", points && JSON.parse(points.replace(/\(/g, "[").replace(/\)/g, "]")), `${DUNGEONS}:POINTS`);

check("biomeEdgeFade", jnum(PICKER, "EDGE_FADE"), `${PICKER}:EDGE_FADE`);
const placed = ychildren(BIOMES, ["biomes"]).filter((b) => ychildren(BIOMES, ["biomes", b]).includes("placement"));
check("biomes[*].id", placed, `${BIOMES}:biomes.*.placement`, DW.biomes.map((b) => b.id));
DW.biomes.forEach((b, i) => {
  covered.add(`biomes[${i}].id`);
  for (const [k, key] of [["minY", "min-y"], ["maxY", "max-y"], ["size", "size"], ["rarity", "rarity"]])
    cfg(`biomes[${i}].${k}`, BIOMES, `biomes.${b.id}.placement.${key}`);
  skip(`biomes[${i}].name`, "display name, only in the wiki");
  skip(`biomes[${i}].page`, "wiki page slug");
});

// Any DW value without a check above shows up here, so new DW keys cannot slip through unchecked.
(function walk(v, p) {
  if (covered.has(p)) return;
  const nested = v && typeof v === "object" && (!Array.isArray(v) || v.some((x) => x && typeof x === "object" && !Array.isArray(x)));
  if (nested) for (const [k, x] of Object.entries(v)) walk(x, Array.isArray(v) ? `${p}[${k}]` : p ? `${p}.${k}` : k);
  else notChecked.push(`DW.${p}: no check in tools/check.js`);
})(DW, "");

for (const m of mismatches) console.log(m);
if (notChecked.length) console.log("\nNot checked:\n  " + notChecked.join("\n  "));
console.log(`\n${checked} checked, ${mismatches.length} mismatches, ${notChecked.length} not checked`);
process.exit(mismatches.length ? 1 : 0);
