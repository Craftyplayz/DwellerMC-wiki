# Grappling Hook

The Grappling Hook throws a hook at a block and drops a rope from it that you can climb, or lets you rappel down from an edge. In a world about 2,000 blocks deep it saves a lot of digging and ladders. It works in every world, including the [Surface](../world/surface.md).

## Crafting
Everyone knows the recipe from the moment they join, so it is already in your recipe book.

| | | |
|---|---|---|
| | | Tripwire Hook |
| | Diamond | Iron Block |
| String | Iron Block | |

That is 1 tripwire hook, 1 diamond, 2 iron blocks and 1 string. The mirrored shape works too.

## Throwing the hook (grapple)
Aim at a block and **right-click** while holding the hook.

- The block must be within **24 blocks** and be a full solid block. Glass, leaves, slabs, fences and other partial blocks can't be hooked.
- You can hook the underside of a block (a ceiling), the side of a block (a wall) or the top of a block (a ledge). On a ledge, the rope hangs over the edge on your side.
- A tripwire hook flies to the spot in under a second, then a rope drops from it. The rope is up to **24 blocks** long and ends at the first block that is not air.
- You are not pulled anywhere. Walk up to the rope and climb it.
- If you are aiming at a door, chest or other block that you can use, right-click uses that block instead. Sneak + right-click always rappels.

If nothing is in range, the block can't be hooked, there is no room for the rope or there is already a rope on that spot, you get a short message above your hotbar. A throw that fails costs nothing and starts no cooldown.

## Rappelling
Stand at an edge, facing the drop, and **sneak + right-click**.

- The rope hangs from the air block in front of your feet, down to **48 blocks**.
- You are moved onto the rope at once and slide down it. Sneak to stop.
- You have to stand on solid ground with a drop in front of you. Otherwise you get "No drop here: stand at an edge and face it".
- The block above the rope's top needs to be free for your head, or you get "No room for a rope there".
- Lava or water at the bottom does not stop it.

## Climbing
A rope climbs like a ladder, at the same speed.

- Hold jump to go up.
- Sneak to hold still on the rope.
- With neither, you slide down.

If the rope ends in mid-air or above lava, it holds you at its last block so you don't slide off the end. Press **sneak and jump together** to let go. A rope that reaches the ground lets you walk off as normal.

When a rope ends over open air or lava, a message tells you how many blocks long it is.

## Mining on a rope
While you are on a rope and not standing on the ground, you mine at normal speed. Normally mining is 5 times slower while your feet are off the ground.

## Ropes
- Anyone can climb anyone's rope. Mobs can climb it too.
- You can have **2 ropes** at a time. A third throw removes your oldest one.
- A rope disappears **15 seconds** after the last player leaves it, or 15 seconds after it was placed if nobody gets on. It stays as long as someone is on it.
- A rope also goes when its chunk unloads. It does not matter if the owner logs out.
- Placing a block into a rope cuts it there: the part below is removed and the part above stays.
- Breaking the block the hook is attached to removes the whole rope. For a rappel that is the block you stood on.
- Ropes only take up air. They never replace blocks.

## Durability and cooldown
- **64** uses, 1 per successful throw or rappel.
- One **8 second** cooldown, shared by both. You can see it on the item.
- Unbreaking can save a use, like on other tools.

## Repairing and enchanting
- Repair in an anvil with **iron ingots** (each one restores 25%), or combine two Grappling Hooks in an anvil.
- You can't repair or combine it in the crafting grid.
- **Unbreaking** is the only enchantment that can go on it. There is no Mending on this server.

## Resource pack
The hook and the rope use textures from the server resource pack. It is sent when you join and you have to accept it.

If you got kicked for the pack, open the server list, select DwellerMC, press **Edit** and set **Server Resource Packs** to **Enabled**. Then join again.

## Related
- [World layout](../world/layout.md) and [Depth & area level](../world/depth.md): how deep the world goes.
- [Elevators](../plugins/v-elevator.md): the other way up and down a shaft.
- [The Surface](../world/surface.md): the hook works there too.
