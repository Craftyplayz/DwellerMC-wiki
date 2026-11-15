# Brewing (BreweryX)

Brew drinks in a cauldron, distill them, age them in barrels and drink them. Drinks give effects, but too much alcohol makes you stumble, slur your chat and puke.

Everything works underground. There is no rain here, so fill cauldrons with a water bucket. Lava (common in caves, see [World layout](../world/layout.md)) makes a good heat source.

## Brewing step by step
1. **Cauldron.** Fill a cauldron with water. Put a heat source directly under it: fire, soul fire, lava, magma block, campfire or soul campfire.
2. **Ingredients.** Right-click the cauldron with each ingredient. The amounts must match the recipe closely. Particles above the cauldron change color while it cooks.
3. **Time.** Cook for the recipe's time (in real minutes). Right-click with a clock to see how long it has cooked. Cooking too short or too long lowers quality.
4. **Bottle.** Right-click the cauldron with glass bottles when it is done.
5. **Distill** (if the recipe says so). Put the brew into a brewing stand and run it the number of times listed.
6. **Age** (if the recipe says so). Put the brew into a wooden barrel for the listed number of years. One year takes **20 real minutes**. The wood type must match, or the quality suffers.
7. **Drink.** Right-click to drink. Quality shows as stars on the item.

### Barrels
Place a sign on a barrel structure and write the word **Barrel** on it. Open it by right-clicking. A normal vanilla barrel also works and counts as oak, holding up to 6 brews.

## Drunkenness
- Each drink adds alcohol. At high levels you stumble, your chat turns slurred, and you puke (soul sand that cannot be picked up and disappears after a minute).
- Very high alcohol can make logging back in difficult for a while.
- Eating **bread** (-4) or drinking **milk** (-2) lowers your alcohol.
- `/brew info` shows your current drunkenness.
- Coffee and iced coffee have negative alcohol and sober you up.
- Sealed brews hide their alcohol content.

## Recipes
Names go **bad / normal / good** by quality. Cook is in real minutes. Age is in years (20 minutes each). "Any" wood means any barrel works.

### Drinks without distilling
| Drink | Ingredients | Cook | Wood | Age | Difficulty | Alcohol |
|---|---|---|---|---|---|---|
| Wheatbeer (Skunky Wheatbeer / Wheatbeer / Fine Wheatbeer) | 3 Wheat | 8 | Birch | 2 | 1 | 5 |
| Beer (Skunky Beer / Beer / Fine Beer) | 6 Wheat | 8 | Any | 3 | 1 | 6 |
| Darkbeer (Skunky Darkbeer / Darkbeer / Fine Darkbeer) | 6 Wheat | 8 | Dark Oak | 8 | 2 | 7 |
| Red Wine | 5 Sweet Berries | 5 | Any | 20 | 4 | 8 |
| Mead (Awkward Mead / Mead / Golden Mead) | 6 Sugar Cane | 3 | Oak | 4 | 2 | 9 |
| Apple Mead (Apple Mead / Sweet Apple Mead / Sweet Golden Apple Mead) | 6 Sugar Cane, 2 Apple | 4 | Oak | 4 | 4 | 11 |
| Apple Cider (Poor Cidre / Apple Cider / Great Apple Cider) | 14 Apple | 7 | Any | 3 | 4 | 7 |
| Eggnog (Egg Liquor / Eggnog / Advocaat) | 5 Egg, 2 Sugar, 1 Milk Bucket | 2 | Any | 3 | 4 | 10 |

### Distilled drinks
| Drink | Ingredients | Cook | Distill runs | Wood | Age | Difficulty | Alcohol |
|---|---|---|---|---|---|---|---|
| Apple Liquor (Sour Apple Liquor / Apple Liquor / Calvados) | 12 Apple | 16 | 3 | Acacia | 6 | 5 | 14 |
| Whiskey (Unsightly Whiskey / Whiskey / Scotch Whiskey) | 10 Wheat | 10 | 2 (50 s each) | Spruce | 18 | 7 | 26 |
| Burning Whiskey (Powdery / Burning / Blazing Whiskey) | 10 Wheat, 2 Blaze Powder | 12 | 3 (55 s each) | Spruce | 18 | 7 | 28 |
| Rum (Bitter Rum / Spicy Rum / Golden Rum) | 18 Sugar Cane | 6 | 2 (30 s each) | Oak | 14 | 6 | 30 |
| Vodka (Lousy Vodka / Vodka / Russian Vodka) | 10 Potato | 15 | 3 | none | 0 | 4 | 20 |
| Golden Vodka (Rancid Vodka / Golden Vodka / Shimmering Golden Vodka) | 10 Potato, 2 Gold Nugget | 18 | 3 | none | 0 | 6 | 20 |
| Mushroom Vodka | 10 Potato, 3 Red Mushroom, 3 Brown Mushroom | 18 | 5 | none | 0 | 7 | 18 |
| Gin (Pale Gin / Gin / Old Tom Gin) | 9 Wheat, 6 Cornflowers or Blue Orchids (any mix), 1 Apple | 6 | 2 | none | 0 | 6 | 20 |
| Tequila (Mezcal / Tequila / Tequila Anejo) | 8 Cactus | 15 | 2 | Birch | 12 | 5 | 20 |
| Absinthe (Poor / Absinthe / Strong Absinthe) | 15 Short Grass | 3 | 6 (80 s each) | none | 0 | 8 | 42 |
| Green Absinthe (Poor / Green / Bright Green Absinthe) | 17 Short Grass, 2 Poisonous Potato | 5 | 6 (85 s each) | none | 0 | 9 | 46 |

Distill runs without a time listed take the default 40 seconds each.

### Non-alcoholic and special
| Drink | Ingredients | Cook | Difficulty | Alcohol |
|---|---|---|---|---|
| Potato Soup | 5 Potato, 3 Short Grass | 3 | 1 | 0 |
| Coffee (Stale / Coffee / Strong Coffee) | 12 Cocoa Beans, 2 Milk Bucket | 2 | 3 | -6 |
| Iced Coffee (Watery / Iced / Strong Iced Coffee) | 8 Cookie, 4 Snowball, 1 Milk Bucket | 1 | 4 | -8 |
| Hot Chocolate | 3 Cookie | 2 | 2 | 0 |

### Effects
| Drink | Effects when drunk |
|---|---|
| Apple Mead | Water Breathing, level 1 to 2, 150 s |
| Rum | Fire Resistance 1 for 20 to 100 s (better with quality); Poison 1 for 30 s on bad quality, less on good |
| Vodka | Weakness 15 s, Poison 10 s |
| Golden Vodka | Weakness 28 s, Poison 4 s |
| Mushroom Vodka | Weakness 80 s, Nausea 27 s, Night Vision 50 to 80 s, Blindness 12 s on bad quality, Slowness 10 s |
| Absinthe | Poison 15 to 25 s (worse on bad quality) |
| Green Absinthe | Poison 25 to 40 s, Instant Damage 2, Night Vision 40 to 60 s |
| Potato Soup | Instant Health, level 0 to 1 |
| Coffee | Regeneration 1 for 2 to 5 s, Speed 1 for 30 to 140 s |
| Iced Coffee | Regeneration 30 s, Speed 10 s |
| Hot Chocolate | Haste 40 s |

Some of these negative effects get weaker as quality rises. Staff may have changed recipes, so ask if something does not match.

## Getting the ingredients underground
Wheat, potatoes, sugar cane and cactus can be farmed with enough light. Some items (sweet berries, apples, cocoa, blaze powder) are harder to come by: loot chests, [structures](../world/structures.md) and trading are your best bet. Oak logs for barrels come from azalea trees in the [Lush Caves](../world/biomes/lush-caves.md).

## Related
- [Vaults](vaults.md): store brews safely.
- [Name colors](namecolor.md)
