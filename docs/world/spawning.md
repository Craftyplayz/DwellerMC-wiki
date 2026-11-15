# Spawning & respawning

## First join
New players are placed in a random cave near the world spawn:

- Up to **256 blocks** from the world spawn along each axis (a square area, not a circle).
- Between **Y -300 and Y -600**, which is area level 8–15 (see [Depth](depth.md)).
- On a safe spot: a solid floor that isn't magma, with two blocks of air above it.

The server tries up to 8 random spots, scanning each from Y -300 downward. If none has a safe floor, it carves a small 3×3 room with a deepslate floor at **Y -450** and puts you there.

## Dying
| You have… | You respawn… |
|---|---|
| A bed where you set your spawn | At your bed, as normal |
| No bed, or your bed is gone or blocked | In a random cave, the same way as on first join |

Beds:

- **Setting your spawn** works at any time.
- **Sleeping** only works when it's dark (night).

Respawn anchors don't work in this world.

!!! warning
    Without a bed you can respawn up to 256 blocks from the world spawn, possibly far from your base. Set a bed early.

## Related
- [Depth & area level](depth.md): how dangerous Y -300 to -600 is
- [Mob levels](../mobs/levels.md): what level the mobs around spawn are
- [World layout](layout.md)
