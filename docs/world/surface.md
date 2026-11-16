# The Surface

The caves have no surface, but there is one separate world above them: the Surface. It is a burning desert under a sun that never sets, and you can only survive there in a Sunward suit.

## Getting there
- There is one portal. It leads from the caves to the Surface, and a matching portal on the Surface leads back. Staff chose where it is.
- You can only go up with **all 4 Sunward suit pieces worn** (helmet, chestplate, leggings and boots), each with time left. Without them the portal refuses you.
- After using a portal you can't use one again for a few seconds.
- `/home`, `/back` and `/tpa` into the Surface don't work. The portal is the only way up. See [Commands and spawn](../plugins/essentials.md).

## The Sunward suit
Each piece lasts **30:00** of wear.

- A piece loses 1 second per second while you wear it, anywhere, even underground. Take it off when you aren't using it.
- The durability bar shows the time left. At 0 the piece breaks.
- Taking hits does not wear it down.
- It can't be repaired in any way: no anvil, grindstone, crafting grid or Mending.
- Mending and Unbreaking can't be put on it. Other enchantments are fine.
- You get a warning message when a piece has 5 minutes, 1 minute and 10 seconds left.

### Getting a suit
[Elite mobs](../mobs/elites.md) drop suit pieces: each elite you kill has a **2%** chance to drop one random piece. A full suit takes at least four of those drops.

## Burning
If you are on the Surface without a full suit, or any piece has run out, you burn:

1. A title warns you for **3 seconds**.
2. Then you die **15 seconds** later.

Nothing slows it down: Fire Resistance, armor, potions and Totems of Undying don't help. Get back to the portal.

While the suit works, the action bar shows the **shortest time left** on any piece.

## Dying and respawning
- Your items drop where you died, on the Surface.
- Beds can't set your respawn point up there.
- If you log out on the Surface, you log back in underground.

See [Spawning & respawning](spawning.md).

## The world
- Always midday, with no weather.
- A **2,000 x 2,000** block border.
- Flat sand over bedrock.
- You can build and break blocks.

## Mobs
Natural spawning is off. Instead, every **10 seconds** each player on the Surface has a **50%** chance of a mob appearing **16 to 40 blocks** away. No mob spawns if **4** hostile mobs are already within **48 blocks** of you.

| Mob | Weight |
|---|---|
| Husk | 4 |
| Parched | 3 |
| Blaze | 2 |
| Magma Cube | 2 |

Higher weight means more common. Surface mobs are [leveled](../mobs/levels.md) as if at the bottom of the world: area level **50**, so level 48 to 50, with the bottom-of-world [elite](../mobs/elites.md) chance of 3%.

## Sun Shard
Once per real day, at **18:00** server time, a Sun Shard appears at the Surface arrival point. It glows, and the first player to pick it up gets it. Chat announces when it appears and who claimed it. If nobody is on the Surface at 18:00, it appears when someone next goes up.

## Related
- [World layout](layout.md): the caves under the bedrock roof
- [Spawning & respawning](spawning.md)
- [Elite mobs](../mobs/elites.md): where suit pieces drop
- [Kill rewards](../mobs/rewards.md)
- [Mob levels](../mobs/levels.md)
- [Commands and spawn](../plugins/essentials.md)
- [Grappling Hook](../items/grappling-hook.md): works on the Surface too
