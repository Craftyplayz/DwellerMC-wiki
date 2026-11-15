# Ores

All ores in the world come from one system. It places the same eight ores everywhere, in vanilla-sized veins, and makes them more common the deeper you go. Cave biomes don't add or remove any ores.

## Key rules
- **Ores are in cave walls.** An ore block that doesn't touch cave air is only kept **10%** of the time. Exploring caves finds far more ore than strip mining.
- **Deeper = more ore.** The number of veins is ×1 down to about Y -400, rises to ×2 at Y -1000, and reaches ×3 at the bottom.
- **The mix never changes.** Every ore gets the same multiplier, so diamonds are the same share of all ore at every depth. Only the total amount grows.
- **Range:** ores generate from Y -18 down to Y -2031.
- **Stone or deepslate ore** depends on the rock: stone ores down to Y -300, deepslate ores below Y -308, mixed in between (see [World layout](layout.md)).

## Ore calculator
Enter a Y level to see the ore amounts there:

<div class="dw-calc" data-calc="ores"></div>

## Base amounts
Per chunk layer (16 × 16 blocks wide, 64 blocks tall), at ×1:

| Ore | Veins | Blocks per vein | Share of all ore |
|---|---|---|---|
| Coal | 7 | 12 | 27% |
| Copper | 8 | 10 | 25.8% |
| Iron | 8 | 8 | 20.6% |
| Gold | 3 | 8 | 7.7% |
| Redstone | 4 | 7 | 9% |
| Lapis Lazuli | 3 | 6 | 5.8% |
| Diamond | 2 | 6 | 3.9% |
| Emerald | 0.2 | 3 | 0.2% |

Fractional numbers are rounded randomly. For example, emerald's 0.2 veins means a 20% chance of one vein per chunk layer at ×1.

## How the multiplier works
The multiplier is worked out once for each 64-block layer, at the middle of the layer. Layers start at the world bottom: Y -2032 to -1969, -1968 to -1905, and so on up to the roof.

| Y | Multiplier |
|---|---|
| -18 to -432 | ×1 |
| -433 to -496 | ×1.107 |
| -561 to -624 | ×1.32 |
| -753 to -816 | ×1.64 |
| -945 to -1008 | ×1.96 |
| -1201 to -1264 | ×2.225 |
| -1457 to -1520 | ×2.473 |
| -1713 to -1776 | ×2.721 |
| -1969 to -2031 | ×2.969 |

??? note "Full table: veins per chunk layer for every layer"
    | Layer (Y) | Multiplier | Coal | Copper | Iron | Gold | Redstone | Lapis | Diamond | Emerald |
    |---|---|---|---|---|---|---|---|---|---|
    | -18 to -48 | ×1 | 7 | 8 | 8 | 3 | 4 | 3 | 2 | 0.2 |
    | -49 to -112 | ×1 | 7 | 8 | 8 | 3 | 4 | 3 | 2 | 0.2 |
    | -113 to -176 | ×1 | 7 | 8 | 8 | 3 | 4 | 3 | 2 | 0.2 |
    | -177 to -240 | ×1 | 7 | 8 | 8 | 3 | 4 | 3 | 2 | 0.2 |
    | -241 to -304 | ×1 | 7 | 8 | 8 | 3 | 4 | 3 | 2 | 0.2 |
    | -305 to -368 | ×1 | 7 | 8 | 8 | 3 | 4 | 3 | 2 | 0.2 |
    | -369 to -432 | ×1 | 7 | 8 | 8 | 3 | 4 | 3 | 2 | 0.2 |
    | -433 to -496 | ×1.107 | 7.75 | 8.85 | 8.85 | 3.32 | 4.43 | 3.32 | 2.21 | 0.22 |
    | -497 to -560 | ×1.213 | 8.49 | 9.71 | 9.71 | 3.64 | 4.85 | 3.64 | 2.43 | 0.24 |
    | -561 to -624 | ×1.32 | 9.24 | 10.56 | 10.56 | 3.96 | 5.28 | 3.96 | 2.64 | 0.26 |
    | -625 to -688 | ×1.427 | 9.99 | 11.41 | 11.41 | 4.28 | 5.71 | 4.28 | 2.85 | 0.29 |
    | -689 to -752 | ×1.533 | 10.73 | 12.27 | 12.27 | 4.6 | 6.13 | 4.6 | 3.07 | 0.31 |
    | -753 to -816 | ×1.64 | 11.48 | 13.12 | 13.12 | 4.92 | 6.56 | 4.92 | 3.28 | 0.33 |
    | -817 to -880 | ×1.747 | 12.23 | 13.97 | 13.97 | 5.24 | 6.99 | 5.24 | 3.49 | 0.35 |
    | -881 to -944 | ×1.853 | 12.97 | 14.83 | 14.83 | 5.56 | 7.41 | 5.56 | 3.71 | 0.37 |
    | -945 to -1008 | ×1.96 | 13.72 | 15.68 | 15.68 | 5.88 | 7.84 | 5.88 | 3.92 | 0.39 |
    | -1009 to -1072 | ×2.039 | 14.27 | 16.31 | 16.31 | 6.12 | 8.16 | 6.12 | 4.08 | 0.41 |
    | -1073 to -1136 | ×2.101 | 14.71 | 16.81 | 16.81 | 6.3 | 8.4 | 6.3 | 4.2 | 0.42 |
    | -1137 to -1200 | ×2.163 | 15.14 | 17.3 | 17.3 | 6.49 | 8.65 | 6.49 | 4.33 | 0.43 |
    | -1201 to -1264 | ×2.225 | 15.57 | 17.8 | 17.8 | 6.67 | 8.9 | 6.67 | 4.45 | 0.44 |
    | -1265 to -1328 | ×2.287 | 16.01 | 18.29 | 18.29 | 6.86 | 9.15 | 6.86 | 4.57 | 0.46 |
    | -1329 to -1392 | ×2.349 | 16.44 | 18.79 | 18.79 | 7.05 | 9.4 | 7.05 | 4.7 | 0.47 |
    | -1393 to -1456 | ×2.411 | 16.88 | 19.29 | 19.29 | 7.23 | 9.64 | 7.23 | 4.82 | 0.48 |
    | -1457 to -1520 | ×2.473 | 17.31 | 19.78 | 19.78 | 7.42 | 9.89 | 7.42 | 4.95 | 0.49 |
    | -1521 to -1584 | ×2.535 | 17.74 | 20.28 | 20.28 | 7.6 | 10.14 | 7.6 | 5.07 | 0.51 |
    | -1585 to -1648 | ×2.597 | 18.18 | 20.78 | 20.78 | 7.79 | 10.39 | 7.79 | 5.19 | 0.52 |
    | -1649 to -1712 | ×2.659 | 18.61 | 21.27 | 21.27 | 7.98 | 10.64 | 7.98 | 5.32 | 0.53 |
    | -1713 to -1776 | ×2.721 | 19.05 | 21.77 | 21.77 | 8.16 | 10.88 | 8.16 | 5.44 | 0.54 |
    | -1777 to -1840 | ×2.783 | 19.48 | 22.26 | 22.26 | 8.35 | 11.13 | 8.35 | 5.57 | 0.56 |
    | -1841 to -1904 | ×2.845 | 19.91 | 22.76 | 22.76 | 8.53 | 11.38 | 8.53 | 5.69 | 0.57 |
    | -1905 to -1968 | ×2.907 | 20.35 | 23.26 | 23.26 | 8.72 | 11.63 | 8.72 | 5.81 | 0.58 |
    | -1969 to -2031 | ×2.969 | 20.78 | 23.75 | 23.75 | 8.91 | 11.88 | 8.91 | 5.94 | 0.59 |

## Veins
Each vein starts at a random spot in the layer and wanders one block at a time in a random direction, once per block of vein size. Only stone and deepslate are turned into ore, so veins that wander into air, gravel or biome blocks are shorter.

[Cave biomes](biomes/index.md) restyle rock but never touch ore blocks, so the same ores show up inside sandstone, moss or sculk walls.

## Other ores
- **Ancient debris, nether quartz, nether gold:** not placed in the caves. The Nether is unchanged, so they generate there as normal.
- **Amethyst:** found in amethyst geodes, which can appear in every [cave biome](biomes/index.md).
- **Rare drops from mobs:** deeper mobs can drop diamonds and emeralds. See [Kill rewards](../mobs/rewards.md).

## Related
- [Depth & area level](depth.md)
- [World layout](layout.md): stone vs deepslate
- [Cave biomes](biomes/index.md)
- [Kill rewards](../mobs/rewards.md)
- [Veinmine](../plugins/veinminer.md), [Crafty Tools](../plugins/craftytools.md) and [PickupBot](../plugins/pickupbot.md): mining faster
