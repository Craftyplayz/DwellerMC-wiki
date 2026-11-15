# Structures

Only four kinds of structure appear in the caves, each in its own depth band. Everything else in Minecraft is built on the surface, and here the only surface is the bedrock roof.

## Structures you can find
| Structure | Where (Y) | How common | Biomes |
|---|---|---|---|
| **Mineshaft** | Anywhere from just under the roof down to Y -1000 | 0.8% chance per chunk, kept only if the whole mineshaft fits between Y -17 and -1000 | All cave biomes |
| **Trial chambers** | Starts between Y -640 and -1990 | One attempt per 34 × 34 chunk area, at least 12 chunks apart | All cave biomes |
| **Stronghold** | Random height, always fully below Y -500 | Rare: one attempt per 64 × 64 chunk area (1,024 × 1,024 blocks), at least 32 chunks apart, kept only if it fits below Y -500 | All cave biomes |
| **Ancient city** | Starts between Y -1450 and -1950 | One attempt per 24 × 24 chunk area, at least 8 chunks apart, and only where that spot is [Deep Dark](biomes/deep-dark.md) | Deep Dark only |

"All cave biomes" means plain [Caves](biomes/caves.md), [Sandstone](biomes/sandstone-caves.md), [Lush](biomes/lush-caves.md), [Dripstone](biomes/dripstone-caves.md), [Sulfur](biomes/sulfur-caves.md) and [Deep Dark](biomes/deep-dark.md).

Strongholds are spread over the whole world, not in rings around the world centre.

Ancient cities need a Deep Dark patch, which is rare (see [Cave biomes](biomes/index.md)), so most attempts find no Deep Dark and nothing is built. Expect ancient cities to be very rare.

Ancient cities and trial chambers clear a room around themselves, so they aren't buried in solid rock. The start height is picked at random within the range shown.

## The roof rule
Any structure that would reach **Y -16 or higher** is removed when it generates. This stops villages, temples, outposts and other surface structures from being built into or on top of the [bedrock roof](layout.md#bedrock-roof).

## Dungeons
Dungeons are small mossy rooms with a mob spawner and loot chests. They're a world feature, not a structure, and can appear in every [cave biome](biomes/index.md).

- **None above Y -250.**
- Below that they get more common the deeper you go:

| Y | Dungeons compared to normal Minecraft |
|---|---|
| -250 | ×0.6 |
| -500 | ×0.73 |
| -1000 | ×1 |
| -1250 | ×1.5 |
| -1500 to the bottom | ×2 |

"Normal Minecraft" means the average dungeon density of a normal overworld, per block of height. The [depth calculator](depth.md#depth-calculator) shows the value at any Y.

**Spawner mobs are normal mobs.** Mobs from dungeon spawners (and any other mob spawner) don't get a [level](../mobs/levels.md), extra stats, gear or abilities, and can't be [elite](../mobs/elites.md). Trial spawners in trial chambers are different: their mobs are leveled like any other.

## Related
- [Cave biomes](biomes/index.md)
- [World layout](layout.md)
- [Depth & area level](depth.md): how strong the mobs are at a structure's depth
- [Mob levels](../mobs/levels.md)
