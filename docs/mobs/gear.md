# Mob gear

Some mobs spawn with armor and weapons based on their [level](levels.md).

**Mobs that get gear:** zombies (all kinds, including husks and drowned), skeletons (all kinds), piglins and piglin brutes, vindicators and pillagers.

**Gear never drops.** Armor and weapons a mob spawns with have a 0% drop chance. Items a mob picks up later follow normal Minecraft rules.

## Armor
| Level | Armor material | Chance per piece |
|---|---|---|
| 1–10 | Leather | 25% |
| 11–17 | Chainmail | 85% |
| 18–34 | Iron | 85% |
| 35–44 | Diamond | 85% |
| 45–50 | Netherite | 85% |

Each of the 4 pieces (helmet, chestplate, leggings, boots) is rolled separately.

## Weapons
- **Level 11 and up:** melee mobs get a sword of the tier's material: stone (11–17), iron (18–34), diamond (35–44) or netherite (45–50). A mob that spawned holding an axe gets an axe instead. Mobs that spawned with nothing in hand also get a sword.
- **Level 1–10:** mobs keep whatever weapon they spawned with.
- **Bows and crossbows** are never replaced. They get enchantments instead.

## Enchantments
Every enchantment below is rolled separately. The chance is **1.5 × [power](levels.md#power)**, so every enchantment is guaranteed from about 67% power: level 38 and up, and the top of level 37. The enchantment level is `power × max level`, rounded, and at least 1.

| Item | Enchantments (max level) |
|---|---|
| Each armor piece | Protection (IV) |
| Sword or axe | Sharpness (V), Fire Aspect (II) |
| Bow | Power (V), Punch (II), Flame (I) |
| Crossbow | Quick Charge (III), Multishot (I), Piercing (IV) |

Example: a level 25 skeleton (about 39% power) has a 58% chance for each of Power II, Punch I and Flame I.

## Related
- [Mob levels](levels.md)
- [Mob abilities](abilities.md): how archers aim
- [Kill rewards](rewards.md): what mobs do drop
