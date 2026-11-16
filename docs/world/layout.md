# World layout

The world is one huge cave system. There is no surface, no sky to walk under and no overworld terrain. The only way up is the portal to the separate [Surface](surface.md) world.

## Height limits
| Y | What's there |
|---|---|
| 0 to about 6 | Top of the [bedrock roof](#bedrock-roof), with air above it |
| about -18 to 0 | Bedrock roof. Its underside is bumpy and hangs down into the caves. |
| -17 and below | Caves. Cave space fades out over the 16 blocks under the roof, so the roof rests on solid rock. |
| -300 and above | Stone |
| -301 to -308 | Mixed band of stone and deepslate |
| below -308 | Deepslate |
| -2026 and below | [Lava sea](#lava-sea): every cave that reaches the bottom is flooded with lava up to Y -2026 |
| -2028 to -2031 | Patchy bedrock under the lava: 80% at -2031, 60% at -2030, 40% at -2029, 20% at -2028 |
| -2032 | Solid bedrock floor, the bottom of the world |

In the mixed band, the chance a block is deepslate rises by 12.5% per block down: 12.5% at Y -301, 100% at Y -308. Ores follow the rock: stone ores in stone, deepslate ores in deepslate (see [Ores](ores.md)).

## Bedrock roof
The roof works like the Nether ceiling:

- The underside is at least 4 blocks below Y 0 and hangs down up to 12 blocks more (to about Y -16), with short spikes.
- Under the underside there is a speckled fringe: a 50% chance of one more bedrock block, then a 20% chance of a second one below it.
- The top is bumpy and rises up to 6 blocks above Y 0.
- Everything from the roof upward is the **Bedrock Roof** biome.

Any structure that would reach Y -16 or higher is removed when it generates, so nothing pokes through the roof. See [Structures](structures.md).

## Caves
Caves are made of three overlapping shapes:

- **Rooms:** large connected caverns, the main cave type.
- **Huge voids:** rare, very large open spaces.
- **Tunnels:** long winding passages that link areas together.

Caves run from just under the roof all the way down to the [lava sea](#lava-sea). Inside rare [cave biome](biomes/index.md) patches the rock is restyled (sandstone, moss, dripstone, sulfur, sculk), but the cave shapes stay the same.

## Lava sea
The bottom of the world is a sea of lava. Any cave space from Y -2026 down is lava (solid rock stays rock), so the bedrock floor is never exposed: the deepest caves end in a flat lava surface at Y -2026, with patchy bedrock 2 to 5 blocks under it and the solid floor below that. These are the default heights; a server can change them. Bring Fire Resistance if you plan to mine around it, and don't drop anything you want to keep.

## Extra features
Minecraft's usual underground features also generate, using Minecraft's own placement rules. In every [cave biome](biomes/index.md):

- Amethyst geodes
- Dungeons (monster rooms with a spawner), only below Y -250 and more common deeper down: see [Structures](structures.md#dungeons)
- Patches of dirt, gravel, granite, andesite and tuff
- Sand, clay and gravel disks, and glow lichen

Lava lakes and water and lava springs appear in every biome except the [Deep Dark](biomes/deep-dark.md). Some biomes add their own features on top, such as large dripstones or sulfur pools: see each [biome page](biomes/index.md). Minecraft's own ore generation is turned off everywhere; see [Ores](ores.md).

## Related
- [Depth & area level](depth.md): why going deeper gets harder
- [Ores](ores.md): where the ores are and how many
- [Cave biomes](biomes/index.md)
- [Structures](structures.md)
- [Spawning & respawning](spawning.md)
- [The Surface](surface.md)
- [Elevators](../plugins/v-elevator.md): getting up and down a 2,000-block-deep world
- [Grappling Hook](../items/grappling-hook.md): craftable rope tool for shafts and cliffs
