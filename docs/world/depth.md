# Depth & area level

Your depth decides how hard the area is. The action bar shows it once a second:

> Depth 1,240 · Area Lv 30

- **Depth** is how many blocks you are below Y 0. At Y -1240 your depth is 1,240.
- **Area level** goes from **1** at Y 0 to **50** at the bottom (Y -2032), in a straight line: about one level every 41.5 blocks.

Exact formula: `area level = 1 + round(depth ÷ 2032 × 49)`.

## Depth calculator
Enter any Y level:

<div class="dw-calc" data-calc="depth"></div>

## What depth controls
| Mechanic | Near the roof | At the bottom | Page |
|---|---|---|---|
| Mob level | 1–3 | 48–50 | [Mob levels](../mobs/levels.md) |
| Ore amount | ×1 | ×3 | [Ores](ores.md) |
| Spawn swapped for a tougher mob | 0% | 50% | [Tougher spawns](../mobs/spawn-mix.md) |
| Rare deep mobs | never | below Y -1400 | [Tougher spawns](../mobs/spawn-mix.md#deep-mobs) |
| Elite chance | 1% | 3% | [Elite mobs](../mobs/elites.md) |
| Enchantment book drops (by mob level) | 1%, mostly Common | 6%, rarer books | [Enchanting](../enchants/index.md#where-books-come-from) |
| Dungeons | none above Y -250 | ×2 below Y -1500 | [Structures](structures.md#dungeons) |
| Cave biomes | each has its own depth range | | [Cave biomes](biomes/index.md) |

Distance from spawn doesn't matter. Only your Y level does.

## By depth
| Y | Depth | Area level | Mob levels | Swap chance | Elite chance |
|---|---|---|---|---|---|
| -17 | 17 | 1 | 1–3 | 0.4% | 1.02% |
| -100 | 100 | 3 | 1–5 | 2.5% | 1.1% |
| -200 | 200 | 6 | 4–8 | 4.9% | 1.2% |
| -300 | 300 | 8 | 6–10 | 7.4% | 1.3% |
| -400 | 400 | 11 | 9–13 | 9.8% | 1.39% |
| -500 | 500 | 13 | 11–15 | 12.3% | 1.49% |
| -600 | 600 | 15 | 13–17 | 14.8% | 1.59% |
| -800 | 800 | 20 | 18–22 | 19.7% | 1.79% |
| -1000 | 1,000 | 25 | 23–27 | 24.6% | 1.98% |
| -1200 | 1,200 | 30 | 28–32 | 29.5% | 2.18% |
| -1400 | 1,400 | 35 | 33–37 | 34.4% | 2.38% |
| -1600 | 1,600 | 40 | 38–42 | 39.4% | 2.57% |
| -1800 | 1,800 | 44 | 42–46 | 44.3% | 2.77% |
| -2000 | 2,000 | 49 | 47–50 | 49.2% | 2.97% |
| -2031 | 2,031 | 50 | 48–50 | 50% | 3% |

Mobs spawn at the area level ±2, never below 1 or above 50. See [Mob levels](../mobs/levels.md).

## Related
- [World layout](layout.md)
- [Spawning & respawning](spawning.md): where you start and respawn
- [Mob levels](../mobs/levels.md), [Elite mobs](../mobs/elites.md), [Tougher spawns](../mobs/spawn-mix.md)
- [Enchanting](../enchants/index.md): book drops scale with mob level
- [Ores](ores.md)
- [Grappling Hook](../items/grappling-hook.md): a quicker way up and down
- [Drill, Hammer and Paxel](../items/mining-tools.md): faster digging through the depths
