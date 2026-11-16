// DwellerMC wiki calculators. Every number here mirrors the plugin code or default config.
// When a plugin changes, update DW below (and the static tables generated from it: tools/tables.js).
(function (root) {
  const DW = {
    // DwellerCore Depth.java / DwellerGenerator.java
    worldMinY: -2032,
    caveTopY: 0,            // config world.cave-top-y
    caveCeilingY: -17,      // DwellerGenerator CAVE_TOP (ROOF_BOTTOM - 1): caves and ores only below this
    deepslateY: -300,       // config rock.deepslate-y: stone at/above, 8-block mixed band below (rock.deepslate-blend), deepslate under -308
    maxLevel: 50,           // config mobs.max-level
    levelSpread: 2,         // config mobs.level-spread
    // DwellerCore config ores
    ores: {
      slab: 64,             // config ores.layer-height
      buriedChance: 0.1,
      depthMultiplier: [[-400, 1], [-1000, 2], [-2032, 3]],
      types: [
        { id: "coal", name: "Coal", veins: 7, size: 12 },
        { id: "copper", name: "Copper", veins: 8, size: 10 },
        { id: "iron", name: "Iron", veins: 8, size: 8 },
        { id: "gold", name: "Gold", veins: 3, size: 8 },
        { id: "redstone", name: "Redstone", veins: 4, size: 7 },
        { id: "lapis", name: "Lapis Lazuli", veins: 3, size: 6 },
        { id: "diamond", name: "Diamond", veins: 2, size: 6 },
        { id: "emerald", name: "Emerald", veins: 0.2, size: 3 },
      ],
    },
    // DwellerCore config mobs
    mobs: {
      curveExponent: 1.32,
      maxHealthMultiplier: 6.0,
      maxDamageMultiplier: 3.0,
      maxSpeedBonus: 0.4,
      maxArmor: 12,
      maxToughness: 6,
      followRangeMin: 16,
      followRangeMax: 48,
      statusHitMaxChance: 0.35,
      replaceChance: [0.0, 0.5],
      deepMobStartY: -1400,
      deepMobChance: 0.15,
      mix: [["Skeleton", 4], ["Witch", 1], ["Cave Spider", 2], ["Vindicator", 2]],
      deep: [["Piglin Brute", 4], ["Blaze", 3], ["Wither Skeleton", 4], ["Warden", 0.2]],
      xpMaxMultiplier: 10,
      extraLootMaxRolls: 2,
      rareDropMaxChance: 0.03,
    },
    elites: { chance: [0.01, 0.03], xpMultiplier: 5 },
    // DwellerTools config grappling-hook
    grapple: {
      range: 24,            // grapple.range
      ropeLength: 24,       // grapple.rope-length
      rappelLength: 48,     // rappel.rope-length
      durability: 64,       // item.durability
      cooldown: 8,          // cooldown (seconds)
      maxRopes: 2,          // rope.max-per-player
      despawnSeconds: 15,   // rope.despawn-seconds
    },
    // DwellerCore tools/dungeons.py POINTS: (Y, x vanilla), linear between, none above the first
    dungeons: [[-250, 0.6], [-1000, 1.0], [-1500, 2.0], [-2026, 2.0]],
    // DwellerBiomes config (placement); edge fade from patches.edge-fade
    biomeEdgeFade: 32,
    biomes: [
      { id: "sandstone_caves", name: "Sandstone Caves", page: "sandstone-caves", minY: -700, maxY: -20, size: 300, rarity: 0.6 },
      { id: "lush_caves", name: "Lush Caves", page: "lush-caves", minY: -500, maxY: -40, size: 260, rarity: 0.6 },
      { id: "dripstone_caves", name: "Dripstone Caves", page: "dripstone-caves", minY: -1000, maxY: -150, size: 300, rarity: 0.6 },
      { id: "sulfur_caves", name: "Sulfur Caves", page: "sulfur-caves", minY: -1600, maxY: -700, size: 280, rarity: 0.6 },
      { id: "deep_dark", name: "Deep Dark", page: "deep-dark", minY: -2000, maxY: -1400, size: 340, rarity: 0.6 },
    ],
  };

  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  // Java Math.round: floor(x + 0.5)
  const jround = (x) => Math.floor(x + 0.5);

  const F = {
    fraction: (y) => clamp((DW.caveTopY - y) / (DW.caveTopY - DW.worldMinY), 0, 1),
    depth: (y) => Math.max(0, Math.floor(DW.caveTopY - y)),
    areaLevel: (y) => 1 + jround(F.fraction(y) * (DW.maxLevel - 1)),
    levelRange: (y) => {
      const a = F.areaLevel(y);
      return [clamp(a - DW.levelSpread, 1, DW.maxLevel), clamp(a + DW.levelSpread, 1, DW.maxLevel)];
    },
    power: (hidden) => Math.pow(hidden / 5000, DW.mobs.curveExponent),
    powerRange: (level) => [F.power((level - 1) * 100 + 1), F.power(level * 100)],
    oreMultiplier: (y) => {
      const p = DW.ores.depthMultiplier;
      if (y >= p[0][0]) return p[0][1];
      for (let i = 1; i < p.length; i++)
        if (y >= p[i][0]) {
          const a = p[i - 1], b = p[i];
          return a[1] + (b[1] - a[1]) * (a[0] - y) / (a[0] - b[0]);
        }
      return p[p.length - 1][1];
    },
    // Multiplier is sampled once per 64-block slab, at the slab's middle.
    slab: (y) => {
      const start = DW.worldMinY + Math.floor((y - DW.worldMinY) / DW.ores.slab) * DW.ores.slab;
      return { start, end: start + DW.ores.slab - 1, multiplier: F.oreMultiplier(start + DW.ores.slab / 2) };
    },
    oresAt: (y) => y > DW.worldMinY && y < DW.caveCeilingY,
    deepslateChance: (y) => (y >= DW.deepslateY ? 0 : y < DW.deepslateY - 8 ? 1 : (DW.deepslateY - y) / 8),
    replaceChance: (y) => DW.mobs.replaceChance[0] + (DW.mobs.replaceChance[1] - DW.mobs.replaceChance[0]) * F.fraction(y),
    eliteChance: (y) => DW.elites.chance[0] + (DW.elites.chance[1] - DW.elites.chance[0]) * F.fraction(y),
    biomesAt: (y) => DW.biomes.filter((b) => y >= b.minY && y <= b.maxY),
    dungeonDensity: (y) => {
      const p = DW.dungeons;
      for (let i = 1; i < p.length; i++)
        if (y <= p[i - 1][0] && y >= p[i][0]) return p[i - 1][1] + (p[i][1] - p[i - 1][1]) * (p[i - 1][0] - y) / (p[i - 1][0] - p[i][0]);
      return 0;
    },
    eliteTraitCount: (level) => (level <= 15 ? 1 : level <= 35 ? 2 : 3),
    gearTier: (level) => (level >= 45 ? 4 : level >= 35 ? 3 : level >= 18 ? 2 : level >= 11 ? 1 : 0),
    nameColor: (level) => (level <= 10 ? "Green" : level <= 20 ? "Yellow" : level <= 35 ? "Red" : level <= 45 ? "Light purple" : "Dark red"),
  };

  const pct = (v, d = 1) => (v * 100).toFixed(d).replace(/\.0+$/, "") + "%";
  const num = (v, d = 2) => (+v.toFixed(d)).toString();
  const range = (a, b, f) => (f(a) === f(b) ? f(a) : f(a) + " – " + f(b));

  // ---------- page widgets ----------
  const base = () => {
    if (typeof document === "undefined") return "";
    const s = document.querySelector('script[src*="javascripts/dweller.js"]');
    return s ? s.getAttribute("src").replace(/javascripts\/dweller\.js.*$/, "") : "";
  };
  const link = (path, text) => `<a href="${base()}${path}">${text}</a>`;

  function oreTable(y) {
    if (!F.oresAt(y)) return `<p>No ores at Y ${y}. Ores generate from Y ${DW.worldMinY + 1} to Y ${DW.caveCeilingY - 1}.</p>`;
    const s = F.slab(y);
    const deep = F.deepslateChance(y);
    const variant = deep === 0 ? "Stone ores" : deep === 1 ? "Deepslate ores" : `Mixed: ${pct(deep, 0)} deepslate ores`;
    const total = DW.ores.types.reduce((t, o) => t + o.veins * o.size, 0);
    let rows = DW.ores.types.map((o) => {
      const veins = o.veins * s.multiplier;
      return `<tr><td>${o.name}</td><td>${num(veins)}</td><td>${o.size}</td><td>${num(veins * o.size, 1)}</td><td>${pct((o.veins * o.size) / total)}</td></tr>`;
    }).join("");
    return `<p><strong>Y ${y}</strong> is in the 64-block layer Y ${s.start} to ${s.end}. Ore multiplier: <strong>×${num(s.multiplier, 3)}</strong> (vanilla-like = ×1). ${variant}.</p>
      <table><thead><tr><th>Ore</th><th>Veins per chunk layer</th><th>Blocks per vein</th><th>Ore blocks per chunk layer*</th><th>Share of all ore</th></tr></thead><tbody>${rows}</tbody></table>
      <p><small>*Before the cave-wall rule: ore blocks not touching cave air are only kept ${pct(DW.ores.buriedChance, 0)} of the time. A chunk layer is 16 × 16 × 64 blocks.</small></p>`;
  }

  function depthInfo(y) {
    const [lo, hi] = F.levelRange(y);
    const biomes = F.biomesAt(y);
    const deep = F.deepslateChance(y);
    const rows = [
      ["Depth (shown on your action bar)", F.depth(y).toLocaleString("en-US")],
      ["Area level", F.areaLevel(y)],
      ["Mob levels that spawn here", lo === hi ? lo : `${lo} – ${hi}`, "mobs/levels.md"],
      ["Rock", y > DW.caveCeilingY ? "Bedrock roof / above the world" : deep === 0 ? "Stone" : deep === 1 ? "Deepslate" : `Mixed (${pct(deep, 0)} deepslate)`, "world/layout.md"],
      ["Ore multiplier", F.oresAt(y) ? "×" + num(F.slab(y).multiplier, 3) : "No ores", "world/ores.md"],
      ["Natural spawn swapped for a tougher mob", pct(F.replaceChance(y)), "mobs/spawn-mix.md"],
      ["…of those, rare deep mob", y < DW.mobs.deepMobStartY ? pct(DW.mobs.deepMobChance, 0) : "0% (only below Y " + DW.mobs.deepMobStartY + ")", "mobs/spawn-mix.md"],
      ["Chance a leveled mob is elite", pct(F.eliteChance(y), 2), "mobs/elites.md"],
      ["Elite traits", lo === hi ? F.eliteTraitCount(lo) : `${F.eliteTraitCount(lo)} – ${F.eliteTraitCount(hi)}`, "mobs/elites.md"],
      ["Dungeons (compared to normal Minecraft)", F.dungeonDensity(y) ? "×" + num(F.dungeonDensity(y), 2) : "None", "world/structures.md"],
      ["Cave biomes that can appear", biomes.length ? biomes.map((b) => link(`world/biomes/${b.page}/`, b.name)).join(", ") : "Only plain Caves", "world/biomes/index.md"],
    ];
    return `<table><tbody>${rows.map((r) => `<tr><td>${r[2] ? link(r[2].replace(/(index)?\.md$/, "/").replace(/\/\/$/, "/"), r[0]) : r[0]}</td><td>${r[1]}</td></tr>`).join("")}</tbody></table>`;
  }

  function levelInfo(level) {
    const [p0, p1] = F.powerRange(level);
    const m = DW.mobs;
    const r = (f, d) => range(p0, p1, (p) => num(f(p), d));
    const tier = ["Leather (25% per piece)", "Chainmail", "Iron", "Diamond", "Netherite"][F.gearTier(level)];
    const rows = [
      ["Power (0 – 1)", r((p) => p, 3)],
      ["Max health", "×" + r((p) => 1 + (m.maxHealthMultiplier - 1) * p, 2)],
      ["Attack damage", "×" + r((p) => 1 + (m.maxDamageMultiplier - 1) * p, 2)],
      ["Movement speed", "+" + range(p0, p1, (p) => pct(m.maxSpeedBonus * p))],
      ["Bonus armor", "+" + r((p) => m.maxArmor * p, 1)],
      ["Bonus armor toughness", "+" + r((p) => m.maxToughness * p, 1)],
      ["Knockback resistance", "+" + r((p) => 0.5 * p, 2)],
      ["Follow range (at least)", r((p) => m.followRangeMin + (m.followRangeMax - m.followRangeMin) * p, 1) + " blocks"],
      ["Status effect on hit", range(p0, p1, (p) => pct(m.statusHitMaxChance * p)) + (level >= 35 ? " (level II)" : " (level I)")],
      ["Gear tier", tier],
      ["Creeper blast radius", 3 + Math.floor(level / 12)],
      ["Creeper fuse", range(p0, p1, (p) => num(Math.trunc(30 - 15 * p) / 20, 2) + " s")],
      ["XP from a player kill", "×" + r((p) => 1 + (m.xpMaxMultiplier - 1) * p, 2)],
      ["Extra loot rolls", r((p) => m.extraLootMaxRolls * p, 2)],
      ["Rare drop chance", range(p0, p1, (p) => pct(m.rareDropMaxChance * p, 2))],
      ["Name color", F.nameColor(level)],
      ["Elite traits (if elite)", F.eliteTraitCount(level)],
    ];
    return `<table><tbody>${rows.map((x) => `<tr><td>${x[0]}</td><td>${x[1]}</td></tr>`).join("")}</tbody></table>`;
  }

  const WIDGETS = {
    ores: { label: "Y level", def: -1200, min: DW.worldMinY, max: 15, render: oreTable },
    depth: { label: "Y level", def: -800, min: DW.worldMinY, max: 15, render: depthInfo },
    level: { label: "Mob level", def: 25, min: 1, max: DW.maxLevel, render: levelInfo },
  };

  function mount(el) {
    const w = WIDGETS[el.dataset.calc];
    if (!w || el.dataset.ready) return;
    el.dataset.ready = "1";
    const id = "dw-" + el.dataset.calc + "-" + Math.random().toString(36).slice(2, 7);
    el.innerHTML = `<label for="${id}">${w.label}</label> <input id="${id}" type="number" step="1" min="${w.min}" max="${w.max}" value="${w.def}" inputmode="numeric"><div class="dw-out" aria-live="polite"></div>`;
    const input = el.querySelector("input"), out = el.querySelector(".dw-out");
    const update = () => {
      const v = Math.trunc(Number(input.value));
      out.innerHTML = Number.isFinite(v) && input.value !== "" && v >= w.min && v <= w.max
        ? w.render(v) : `<p>Enter a whole number from ${w.min} to ${w.max}.</p>`;
    };
    input.addEventListener("input", update);
    update();
  }

  root.DW = DW;
  root.DWF = F;
  if (typeof document !== "undefined") {
    const run = () => document.querySelectorAll(".dw-calc").forEach(mount);
    if (typeof document$ !== "undefined") document$.subscribe(run); // Material instant navigation
    else if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
    else run();
  }
  if (typeof module !== "undefined") module.exports = { DW, F, WIDGETS };
})(typeof window !== "undefined" ? window : globalThis);
