# Tougher spawns

The deeper you go, the more often a natural hostile spawn is **swapped for a tougher mob**.

## Swap chance
- **0%** at Y 0, rising in a straight line to **50%** at the bottom (Y -2032).
- Only **natural** spawns are swapped. Spawners, spawn eggs and summons are not.
- Wardens, Withers, Ender Dragons and Elder Guardians are never swapped.

Use the [depth calculator](../world/depth.md#depth-calculator) for the exact chance at any Y.

## Normal swaps
| Mob | Chance |
|---|---|
| Skeleton | 44.4% |
| Cave Spider | 22.2% |
| Vindicator | 22.2% |
| Witch | 11.1% |

If the swap rolls the same mob that was spawning (for example a skeleton for a skeleton), nothing changes.

## Deep mobs
Below **Y -1400**, each swap has a **15%** chance to use the deep list instead:

| Mob | Chance |
|---|---|
| Piglin Brute | 35.7% |
| Wither Skeleton | 35.7% |
| Blaze | 26.8% |
| **Warden** | 1.8% |

Example at the bottom of the world: 50% swap × 15% deep × 1.8% Warden ≈ **0.13%** of natural hostile spawns become a Warden.

!!! danger "Wardens"
    Wardens from swaps are normal Wardens: not leveled and never elite. The [Deep Dark](../world/biomes/deep-dark.md) has no natural spawns at all, so swapped Wardens appear in the other biomes below Y -1400.

## After the swap
The new mob is leveled like any other mob (see [Mob levels](levels.md)) and can become an [elite](elites.md). Piglins and piglin brutes don't turn into zombified piglins here.

## Related
- [Depth & area level](../world/depth.md)
- [Mob levels](levels.md)
- [Cave biomes](../world/biomes/index.md): each biome's base spawn list
- [Elite mobs](elites.md)
