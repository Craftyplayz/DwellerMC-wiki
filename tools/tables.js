// Prints the static wiki tables from docs/javascripts/dweller.js, so tables and calculators share one source.
// Usage: node tools/tables.js   (paste each block into the page named in its heading)
const { DW, F } = require("../docs/javascripts/dweller.js");
const n = (v, d = 2) => (+v.toFixed(d)).toString();
const pct = (v, d = 1) => n(v * 100, d) + "%";
const mid = (L) => F.power((L - 1) * 100 + 50);

console.log("## ores.md: multiplier by depth\n| Layer (Y) | Multiplier | " + DW.ores.types.map(o => o.name).join(" | ") + " |");
console.log("|---|---|" + DW.ores.types.map(() => "---|").join(""));
for (let s = DW.worldMinY; s < DW.caveCeilingY; s += 64) {
  const m = F.slab(s).multiplier;
  console.log(`| ${s + 63 > DW.caveCeilingY - 1 ? DW.caveCeilingY - 1 : s + 63} to ${s === DW.worldMinY ? s + 1 : s} | ×${n(m, 3)} | ` + DW.ores.types.map(o => n(o.veins * m, 2)).join(" | ") + " |");
}

console.log("\n## levels.md: stats by level\n| Level | Health | Damage | Speed | Armor | Toughness | XP | Name color | Gear |\n|---|---|---|---|---|---|---|---|---|");
const gear = ["Leather", "Chainmail", "Iron", "Diamond", "Netherite"];
for (const L of [1, 5, 10, 11, 15, 18, 20, 25, 30, 35, 40, 45, 50]) {
  const p = mid(L), m = DW.mobs;
  console.log(`| ${L} | ×${n(1 + (m.maxHealthMultiplier - 1) * p)} | ×${n(1 + (m.maxDamageMultiplier - 1) * p)} | +${pct(m.maxSpeedBonus * p, 0)} | +${n(m.maxArmor * p, 1)} | +${n(m.maxToughness * p, 1)} | ×${n(1 + (m.xpMaxMultiplier - 1) * p, 1)} | ${F.nameColor(L)} | ${gear[F.gearTier(L)]} |`);
}

console.log("\n## depth.md: by depth\n| Y | Depth | Area level | Mob levels | Swap chance | Elite chance |\n|---|---|---|---|---|---|");
for (const y of [-17, -100, -200, -300, -400, -500, -600, -800, -1000, -1200, -1400, -1600, -1800, -2000, -2031]) {
  const [lo, hi] = F.levelRange(y);
  console.log(`| ${y} | ${F.depth(y).toLocaleString("en-US")} | ${F.areaLevel(y)} | ${lo}–${hi} | ${pct(F.replaceChance(y))} | ${pct(F.eliteChance(y), 2)} |`);
}

const E = DW.enchants, R = ["Common", "Uncommon", "Rare", "Legendary", "Mythic"];
console.log("\n## enchants/index.md: book drops by depth\n| Depth | Area level | Book chance | Elite | " + R.join(" | ") + " |\n|---|---|---|---|" + R.map(() => "---|").join(""));
for (const d of [0, 500, 1000, 1500, 2000, 2031]) {
  const y = -d, o = F.rarityOdds(y);
  console.log(`| ${d.toLocaleString("en-US")} | ${F.areaLevel(y)} | ${pct(F.bookChance(y), 2)} | ${pct(F.bookChance(y, true), 1)} | ` + Object.values(o).map((v) => pct(v, 1)).join(" | ") + " |");
}

console.log("\n## enchants/index.md: rarities\n| Rarity | Application chance | Anvil cost per level |\n|---|---|---|");
for (const [k, [a, b]] of Object.entries(E.rarityChance))
  console.log(`| ${k[0].toUpperCase() + k.slice(1)} | ${pct(a, 0)} to ${pct(b, 0)} | ${E.anvilCost[k]} |`);

const roman = ["I", "II", "III", "IV", "V"];
console.log("\n## enchants/list.md: Depth Slayer by mob level\n| Mob level | " + E.depthSlayer.map((_, i) => roman[i]).join(" | ") + " |\n|---|" + E.depthSlayer.map(() => "---|").join(""));
for (const L of [1, 10, 20, 25, 30, 40, 50])
  console.log(`| ${L} | ` + E.depthSlayer.map((_, i) => "+" + pct(F.depthSlayer(i + 1, L), 0)).join(" | ") + " |");

// Sunder example: 18.5 damage, 80% armor reduction, Protection IV x4 (16 points, 64%), vanilla formula as in Odds.sunder.
console.log("\n## enchants/list.md: Sunder example\n| Sunder | Damage per hit |\n|---|---|");
for (const [name, ign] of [["None", 0], ...E.sunderIgnored.map((v, i) => [roman[i], v])]) {
  const keep = 1 - ign;
  console.log(`| ${name} | ${n(18.5 * (1 - 0.8 * keep) * (1 - Math.min(20, 16 * keep) / 25), 1)} |`);
}
