# Enchanting

Deep mobs stack their own armor and toughness on top of netherite with Protection IV, so even a very strong sword does only a point or two of damage per hit to a level 49 skeleton. The server adds 27 custom enchantments to fight back with. They come only from enchantment books that mobs drop. You won't find them in enchanting tables, villager trades or loot chests. The full list with every number is on [Enchantments](list.md).

## Books and rarities
Every custom enchantment belongs to one of five rarities, and so does every book. The rarity color shows on the book's name.

| Rarity | Color |
|---|---|
| Common | White |
| Uncommon | Green |
| Rare | Blue |
| Legendary | Gold |
| Mythic | Light purple |

Books drop **unattuned**, named like "Unattuned Rare Book". They stack to 64. You don't know what is inside until you [attune](#attuning) one.

## Where books come from
A hostile [leveled mob](../mobs/levels.md) killed by a player (a tamed wolf's kill counts as its owner's) can drop an unattuned book along with its normal drops.

- **Chance:** 1% for a level 1 mob, rising evenly to **6%** at level 50.
- **[Elites](../mobs/elites.md):** ×5, so up to 30%.
- **Looting:** +1 percentage point per Looting level on the weapon in your main hand. A level 50 mob with Looting III is 9%.
- **Rarity:** deeper mobs drop rarer books. Level 1 mobs never drop Mythic books.

The mob's level decides both the chance and the rarity, not where you stand. Surface mobs are always level 50, so they drop like the bottom of the caves. Mobs from mob spawners have no level and never drop books. Mobs from trial spawners do.

| Depth | Area level | Book chance | Elite | Common | Uncommon | Rare | Legendary | Mythic |
|---|---|---|---|---|---|---|---|---|
| 0 | 1 | 1% | 5% | 70% | 22% | 7% | 1% | 0% |
| 500 | 13 | 2.22% | 11.1% | 58.2% | 23.5% | 11.4% | 4.4% | 2.4% |
| 1,000 | 25 | 3.45% | 17.2% | 46.5% | 24.9% | 15.8% | 7.9% | 4.9% |
| 1,500 | 37 | 4.67% | 23.4% | 34.7% | 26.4% | 20.2% | 11.3% | 7.3% |
| 2,000 | 49 | 5.9% | 29.5% | 23% | 27.9% | 24.6% | 14.7% | 9.8% |
| 2,031 | 50 | 6% | 30% | 22% | 28% | 25% | 15% | 10% |

The rarity columns are the share of dropped books, so at depth 1,000 about one kill in 600 gives a Mythic book. Mobs spawn a couple of levels around the area level, see [Depth & area level](../world/depth.md).

These books are separate from the vanilla enchanted books in the [rare drops](../mobs/rewards.md#rare-drops), which never carry a custom enchantment.

## Attuning
**Right-click** an unattuned book to attune it. It works anywhere, and only one book from the stack is used. The book in your main hand goes first. Clicking a chest or other block while holding the book attunes it instead of opening the block.

The book turns into a random custom enchantment of its rarity:

- The level is random from I up to the enchantment's max level, every level equally likely.
- It gets an **application chance** within its rarity's range (table below).
- The totem animation plays, without sound, and your action bar says what you got, for example "Your book became Sunder II".

The attuned book is named after the enchantment in the rarity color, like **Sunder II**. Its lore shows what the enchantment does, its max level, the application chance and the rarity.

| Rarity | Application chance | Anvil cost per level |
|---|---|---|
| Common | 50% to 60% | 1 |
| Uncommon | 60% to 70% | 2 |
| Rare | 70% to 80% | 4 |
| Legendary | 80% to 95% | 8 |
| Mythic | 95% to 100% | 8 |

The anvil cost per level works like vanilla's own enchantment costs: Sharpness and Protection are 1, Silk Touch and Thorns are 8.

## Anvils
These rules apply to every anvil on the server, vanilla enchantments included.

- **Cost:** never more than **45 levels**, and the anvil never says "Too Expensive". Items still get more expensive each time you work on them, but the price stops at 45.
- **Attuned book on an item:** the application chance is rolled when you take the result. If it fails, the levels are spent, the **book is destroyed** and the item stays as it was. You hear an item breaking and get a red message.
- **Two books of the same enchantment** always combine like vanilla, with no roll: Sunder I + Sunder I = Sunder II, up to the max level. The new book keeps the higher of the two chances.
- **Different books don't combine:** two different custom enchantments, or a custom and a vanilla book, give no result.
- **Vanilla books** apply as normal, with no roll.
- **No limit** on how many enchantments an item can have. Custom and vanilla enchantments mix freely, apart from the conflicts listed on [Enchantments](list.md).

## Grindstone
Right-clicking a grindstone opens a menu instead of the vanilla grindstone.

- The menu lists the enchantments on the item in your **main hand**. Click one to remove it.
- It is free. You get no XP back and no book.
- Curses (Binding, Vanishing) can't be removed.
- With an empty hand or an item with no enchantments, nothing happens.

## No Mending
Mending does not exist on this server. It is not in enchanting tables, villager trades, chest loot, fishing or mob gear, and anvils refuse Mending books. **Unbreakable** (Legendary) replaces it: the item never loses durability. See [Enchantments](list.md#unbreakable).

## Related
- [Enchantments](list.md): every custom enchantment and its numbers
- [Mob levels](../mobs/levels.md): what a mob's level means
- [Elite mobs](../mobs/elites.md): five times the book chance
- [Kill rewards](../mobs/rewards.md): XP, extra loot and rare drops
- [Depth & area level](../world/depth.md)
