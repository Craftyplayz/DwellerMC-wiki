# PickupBot

Items you break or that drop nearby go straight into your inventory.

## Commands
Use `/pickup` or `/pickupbot` (short: `/pb`).

| Command | What |
|---|---|
| `/pickup toggle` | Switch on or off |
| `/pickup on` / `/pickup off` | Set it directly |
| `/pickup status` | See if it is on |
| `/pickup help` | Help |

It is **on by default**. Your choice is forgotten when the server restarts.

## How it works
- Items within about 5 blocks of you are collected, twice a second.
- Items from blocks you break are only taken by you, for 10 seconds.
- Mob drops go to the nearest player.
- Items you throw yourself are not taken.
- Your death drops are not collected, so you can pick them up yourself.
- If your inventory is full the items stay on the ground.
- Some items are never collected: dragon egg, bedrock, command blocks and TNT.

## With other tools
- [3x3 Pickaxe](craftytools.md): all 9 blocks' drops are collected.
- [Veinmine](veinminer.md): a big vein can drop items farther than 5 blocks away. Walk closer to collect the rest.
