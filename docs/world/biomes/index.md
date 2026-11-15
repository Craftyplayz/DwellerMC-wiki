# Cave biomes

Most of the world is plain [Caves](caves.md). The other five biomes are rare, large patches, each within its own depth range. Press F3 to see which biome you're in.

## Overview
| Biome | F3 name | Depth range (Y) | Patch width | Share of the whole world |
|---|---|---|---|---|
| [Caves](caves.md) | `dwellerbiomes:caves` | everywhere else | – | about 86% |
| [Sandstone Caves](sandstone-caves.md) | `dwellerbiomes:sandstone_caves` | -20 to -700 | about 300 blocks | about 2.6% |
| [Lush Caves](lush-caves.md) | `minecraft:lush_caves` | -40 to -500 | about 260 blocks | about 1.7% |
| [Dripstone Caves](dripstone-caves.md) | `minecraft:dripstone_caves` | -150 to -1000 | about 300 blocks | about 3.4% |
| [Sulfur Caves](sulfur-caves.md) | `minecraft:sulfur_caves` | -700 to -1600 | about 280 blocks | about 3.7% |
| [Deep Dark](deep-dark.md) | `minecraft:deep_dark` | -1400 to -2000 | about 340 blocks | about 2.4% |
| Bedrock Roof | `dwellerbiomes:bedrock_roof` | the [roof](../layout.md#bedrock-roof) and above | – | – |

Shares are approximate. Inside its own depth range a biome is more common than its world share suggests.

Use the [depth calculator](../depth.md#depth-calculator) to see which biomes can appear at a Y level.

## How patches are placed
- Each biome is placed in large random blobs. Where two biomes' blobs overlap, only one of them is used.
- Patches are flatter than they are wide: about 60% as tall as they are across, so they follow cave layers.
- Patches shrink over the last 32 blocks at the top and bottom of their depth range, so the edges aren't flat cuts.
- Biomes are set per 4 × 4 × 4 block cell, the same way Minecraft does it.

## What a biome patch changes
Inside a patch:

- **Rock is restyled.** Stone, deepslate, tuff, andesite, diorite, granite, gravel, dirt and calcite are replaced with the biome's blocks: bands of layered blocks, plus special floor and ceiling blocks where they touch cave air. The bands wobble up and down by up to 4 blocks so they don't look ruler-flat.
- **Decorations** are placed on the floors and ceilings.
- **Mobs** spawn from the biome's own list.
- **Fog, music and particles** change.

**Ores are never touched**, and the cave shapes stay the same. See [Ores](../ores.md).

## Related
- [Depth & area level](../depth.md)
- [Structures](../structures.md): which structures can spawn in which biome
- [Tougher spawns](../../mobs/spawn-mix.md): natural spawns can be swapped for tougher mobs in every biome
