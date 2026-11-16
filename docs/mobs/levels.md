# Mob levels

Every hostile mob has a level from **1 to 50**, based on the depth where it spawned. Higher levels have more health, damage, speed and armor, better [gear](gear.md) and stronger [abilities](abilities.md), and give better [rewards](rewards.md).

## Which mobs get a level
- **All hostile mobs**: natural spawns, spawn eggs, trial spawners and mobs summoned by an [elite](elites.md).
- **Not leveled: mobs from mob spawners**, such as the ones in [dungeons](../world/structures.md#dungeons). They're normal Minecraft mobs.
- **Not leveled:** Warden, Wither, Ender Dragon and Elder Guardian (they're already bosses), and all passive mobs.
- **NPCs** (shopkeepers and other characters placed by staff) are never leveled. See [NPCs](../plugins/npcs.md).

## Spawn level
A mob's level = the [area level](../world/depth.md) where it spawns, plus a random **-2 to +2**, kept between 1 and 50.

The [Surface](../world/surface.md) is not depth-based: its mobs always use area level 50, so they are level 48 to 50.

The level is fixed at spawn. A mob that follows you up or down keeps its level.

## Level calculator
Enter a level to see its exact stats:

<div class="dw-calc" data-calc="level"></div>

Values show a range because each level is split into 100 hidden steps (see [Power](#power)).

## Stats by level
Typical values (middle of each level). The calculator above gives exact ranges.

| Level | Health | Damage | Speed | Armor | Toughness | XP | Name color | Gear |
|---|---|---|---|---|---|---|---|---|
| 1 | ×1.01 | ×1 | +0% | +0 | +0 | ×1 | Green | Leather |
| 5 | ×1.21 | ×1.08 | +2% | +0.5 | +0.2 | ×1.4 | Green | Leather |
| 10 | ×1.56 | ×1.22 | +4% | +1.3 | +0.7 | ×2 | Green | Leather |
| 11 | ×1.64 | ×1.25 | +5% | +1.5 | +0.8 | ×2.1 | Yellow | Chainmail |
| 15 | ×1.98 | ×1.39 | +8% | +2.3 | +1.2 | ×2.8 | Yellow | Chainmail |
| 18 | ×2.25 | ×1.5 | +10% | +3 | +1.5 | ×3.3 | Yellow | Iron |
| 20 | ×2.44 | ×1.58 | +12% | +3.5 | +1.7 | ×3.6 | Yellow | Iron |
| 25 | ×2.95 | ×1.78 | +16% | +4.7 | +2.3 | ×4.5 | Red | Iron |
| 30 | ×3.49 | ×2 | +20% | +6 | +3 | ×5.5 | Red | Iron |
| 35 | ×4.06 | ×2.23 | +25% | +7.4 | +3.7 | ×6.5 | Red | Diamond |
| 40 | ×4.66 | ×2.47 | +29% | +8.8 | +4.4 | ×7.6 | Light purple | Diamond |
| 45 | ×5.29 | ×2.71 | +34% | +10.3 | +5.1 | ×8.7 | Light purple | Netherite |
| 50 | ×5.93 | ×2.97 | +39% | +11.8 | +5.9 | ×9.9 | Dark red | Netherite |

Armor and toughness are added on top of any armor the mob wears. "Gear" only applies to mobs that wear [gear](gear.md).

## Power
All scaling is driven by one number, **power**, from 0 to 1:

1. Each level has 100 hidden steps: level 1 is steps 1–100, level 50 is steps 4,901–5,000. A mob gets a random step within its level.
2. `power = (hidden step ÷ 5000) ^ 1.32`

The curve starts slowly: a level 25 mob has about 39% power, a level 50 mob about 98%.

| Stat | Formula |
|---|---|
| Max health | × (1 + 5 × power) |
| Attack damage | × (1 + 2 × power) |
| Movement speed | × (1 + 0.4 × power) |
| Armor | + 12 × power |
| Armor toughness | + 6 × power |
| Knockback resistance | + 0.5 × power |
| Follow range | at least 16 + 32 × power blocks |

Mobs spawn at full health.

### Mob-specific
| Mob | Change |
|---|---|
| Creeper | Blast radius 3 + level ÷ 12, rounded down (level 12: 4, 24: 5, 36: 6, 48: 7). Fuse shortens from 1.5 s to 0.75 s at full power. |
| Zombie (all kinds) | Up to +0.5 chance to call reinforcements when hurt, scaled by power |
| Piglins | Never turn into zombified piglins in the overworld |
| Slime, Magma Cube | Split into extra pieces: see [Mob abilities](abilities.md#slimes) |

## Name tags
Within **12 blocks** a leveled mob shows a name tag:

> Lv 32 Skeleton ❤ 58/60

Name tag color by level:

| Level | Color |
|---|---|
| 1–10 | Green |
| 11–20 | Yellow |
| 21–35 | Red |
| 36–45 | Light purple |
| 46–50 | Dark red |
| Any [elite](elites.md) | Gold, with the elite's traits in the name |

The health number updates twice a second for mobs within 24 blocks of a player.

## Related
- [Depth & area level](../world/depth.md)
- [Mob gear](gear.md), [Mob abilities](abilities.md)
- [Elite mobs](elites.md), [Tougher spawns](spawn-mix.md)
- [Kill rewards](rewards.md)
- [Enchantments](../enchants/list.md): Depth Slayer scales with power
