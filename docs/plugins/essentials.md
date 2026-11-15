# Commands and spawn

Useful commands for everyday play. Your rank decides which ones you can use. `/help` lists the ones you have.

## Spawn and respawn

- **First join:** you start at the server spawn, in a cave. New players also get a free set of stone tools.
- **Dying:** you respawn at your bed if you have one, otherwise at the server spawn.
- **`/spawn`:** teleports you back to the server spawn.
- **Stuck?** `/suicide` kills you and sends you to your bed or the spawn. You drop your items where you died.
- Respawn anchors don't work in this world.

See [Spawning and respawning](../world/spawning.md) for how the world around the spawn works, and [Depth](../world/depth.md) for how dangerous each level is. The mobs near spawn follow the usual [mob levels](../mobs/levels.md).

!!! warning
    After you die, your items are where you died, often deep in a cave and far from the spawn. Mark your base with a home so you can get back to it.

## Homes

| Command | What it does |
|---|---|
| `/sethome [name]` | Saves a home at your position. The name can't be `bed` or a number |
| `/home [name]` | Teleports to a home. With no name and one home, goes there |
| `/home` | With several homes, lists them |
| `/delhome <name>` | Deletes a home |
| `/renamehome <old> <new>` | Renames a home |

Most players can have 3 homes. Set one at every base and mine you want to return to.

## Teleporting to players

| Command | What it does |
|---|---|
| `/tpa <player>` | Ask to teleport to a player |
| `/tpahere <player>` | Ask a player to teleport to you |
| `/tpaccept` | Accept a request |
| `/tpdeny` | Refuse a request |
| `/tpacancel` | Cancel your own request |
| `/tptoggle` | Block all teleport requests |
| `/back` | Go back to where you were before your last teleport |

`/home`, `/back` and `/tpa` can't take you to the [Surface](../world/surface.md). Use its portal.

Requests expire after 2 minutes. Don't move while a teleport is counting down, if the server uses a delay.

## Chat and mail

| Command | What it does |
|---|---|
| `/msg <player> <text>` (or `/m`, `/w`, `/tell`) | Private message |
| `/r <text>` | Reply to the last private message |
| `/msgtoggle` | Stop receiving private messages |
| `/ignore <player>` | Ignore or unignore a player |
| `/me <text>` | Action message |
| `/mail send <player> <text>` | Leave mail for a player. `/mail` reads it |
| `/helpop <text>` | Ask the staff for help |

## Information

| Command | What it does |
|---|---|
| `/list` | Who is online |
| `/seen <player>` | When a player was last online |
| `/playtime` | Your time played |
| `/getpos` | Your coordinates |
| `/near` | Players close to you |
| `/compass` | Which way you are facing |
| `/motd`, `/rules`, `/info` | Server messages |
| `/ping` | Test your connection |
| `/afk` | Mark yourself as away. You are also marked away after a few minutes of no activity |

## Money

| Command | What it does |
|---|---|
| `/balance` | Your balance |
| `/baltop` | Richest players |
| `/pay <player> <amount>` | Send money |

## Not available

These are switched off on purpose: `/top`, `/tpr` (random teleport) and `/jump`. They would put you on top of the bedrock roof.
