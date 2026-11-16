# Kill rewards

Leveled mobs give more XP and loot, scaled by their [power](levels.md#power). Rewards only apply when **a player** kills the mob: deaths from lava, falling or other mobs give normal drops.

## Bonus XP
XP = normal XP × (1 + 9 × power), rounded down.

| Level | XP multiplier |
|---|---|
| 1 | ×1 |
| 10 | ×2 |
| 25 | ×4.5 |
| 35 | ×6.5 |
| 50 | ×9.9 |

[Elites](elites.md) get a further **×5**: a level 50 elite gives about 50× normal XP.

## Extra loot
Each normal drop (rotten flesh, bones, string and so on) gets extra copies:

- **Extra rolls** = 2 × power. The whole part is guaranteed, and the fraction is a chance for one more roll.
- Each roll adds another copy of that drop.

| Level | Extra rolls | Example: a stack of 2 bones becomes… |
|---|---|---|
| 10 | 0.22 | 2, or 4 (22% chance) |
| 25 | 0.78 | 2, or 4 (78% chance) |
| 40 | 1.47 | 4, or 6 (47% chance) |
| 50 | 1.97 | 4, or 6 (97% chance) |

Elites don't get extra loot rolls. They get a guaranteed rare drop instead, five times the [enchantment book](#enchantment-books) chance, plus a 2% chance of a Sunward suit piece for the [Surface](../world/surface.md).

## Rare drops
- **Normal leveled mobs:** 3% × power chance (about 0.3% at level 10, 1.2% at level 25, 3% at level 50).
- **[Elites](elites.md):** always one.

| Item | Chance |
|---|---|
| 1–2 Diamonds | 30% |
| 2–4 Emeralds | 30% |
| Enchanted book: a random vanilla enchantment, at a random level from I up to its max | 25% |
| Golden Apple | 12% |
| Enchanted Golden Apple | 2% |
| Totem of Undying | 1% |

The book can roll any enchantment that chest loot can have, curses and Frost Walker included. Mending, Swift Sneak, Soul Speed, Wind Burst and the server's [custom enchantments](../enchants/list.md) never appear.

## Enchantment books
Hostile leveled mobs killed by a player can also drop an unattuned enchantment book for the server's custom enchantments: 1% at level 1 up to 6% at level 50, ×5 for elites. Deeper mobs drop rarer books. See [Enchanting](../enchants/index.md) for the odds and how to use them.

## Related
- [Mob levels](levels.md)
- [Elite mobs](elites.md)
- [Enchanting](../enchants/index.md): custom enchantment books
- [Mob gear](gear.md): mob armor and weapons never drop
- [Ores](../world/ores.md)
- [The Surface](../world/surface.md)
