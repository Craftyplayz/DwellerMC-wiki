# Enchantments

All 27 custom enchantments, grouped by rarity. They come from enchantment books, see [Enchanting](index.md) for drops, attuning and anvils.

**Melee** means swords, axes and maces.

## How they combine
- **Damage bonuses add up**, then multiply the hit once. Elite Bane, Giant Killer, Depth Slayer and Meteor work this way: +45% and +30% make +75%.
- **Damage reductions multiply** each other. Elite Ward, Bulwark and Last Stand work this way: -60% and -48% make 0.4 × 0.52 = 0.21, so -79%.
- **Armor pieces add up** when several pieces carry the same enchantment: Bulwark IV on all four pieces is -48%.
- **Full-charge hit:** your attack bar was at least 90% recharged, the same rule vanilla uses for sweeps. Disarm, Shatter, Silence, Cleave and Executioner only work on full-charge hits.
- **PvP:** everything works against players too, except Disarm, Silence, and the bonuses against leveled mobs and elites (Elite Bane, Elite Ward, Depth Slayer, Bulwark). Cleave and Quake splash never hits players.

A "leveled mob" is any mob with a [level](../mobs/levels.md): natural spawns in the caves and on the [Surface](../world/surface.md). Mob spawner mobs, bosses and players have no level.

## Common

### Frostbite
Every hit slows the target.

- **Goes on:** melee
- **Levels:** I: Slowness I for 3 s. II: Slowness II for 5 s.
- Every direct hit counts, weak hits and mace smashes included. Works on everything: mobs, elites, bosses and players.

### Bloodlust
Kills give Regeneration.

- **Goes on:** melee
- **Levels:** I: Regeneration I for 2 s. II: Regeneration II for 2 s. III: Regeneration II for 5 s.
- The weapon has to land the killing blow. Cleave and Quake splash kills count. Any kill counts, animals and players too.
- A new kill restarts the timer, unless you already have a stronger Regeneration.

### Grounded
Resists knockback.

- **Goes on:** boots
- **Levels:** I: +10% knockback resistance. II: +20%. III: +30%.
- A full netherite set already gives 40%. Explosion knockback is not reduced.

### Night Sight
Night Vision while worn.

- **Goes on:** helmets
- **Levels:** I only.
- Works in every world. The effect icon shows, the particles don't. It lasts up to 1 s after you take the helmet off.
- Night Vision from a potion is left alone. It doesn't help against Darkness.

### Escape Artist
A burst of speed when badly hurt.

- **Goes on:** boots
- **Levels:**

| Level | Effect | Cooldown |
|---|---|---|
| I | Speed II for 3 s | 30 s |
| II | Speed III for 4 s | 20 s |
| III | Speed III and Resistance I for 4 s | 20 s |

- Triggers when any damage leaves you below **30%** of your max health. Nothing shows the cooldown.

## Uncommon

### Disarm
Chance to knock a mob's weapon away.

- **Goes on:** melee
- **Levels:** I: 5% per full-charge hit. II: 10%.
- The weapon, bows and crossbows too, lands on the ground for **10 s**. Nobody can pick it up: not players, mobs or hoppers. Then it goes back to the mob, unless the mob picked up something else in the meantime.
- A new disarm restarts the timer. If the mob dies while disarmed, the weapon is gone. Mob gear never drops anyway.
- Mobs only, does nothing to players.

### Elite Bane
Extra damage to elites.

- **Goes on:** melee
- **Levels:** I: +15%. II: +30%. III: +45%.
- A weapon with Elite Bane also hits through the [Shielded](../mobs/elites.md#traits) trait, without using up one of its blocks.
- Elites only.

### Vitality
More max health while worn.

- **Goes on:** any armor piece
- **Levels:** I: +2 max health (1 heart) per piece. II: +4. III: +6.
- Pieces add up: Vitality III on all four is +24, twelve extra hearts.

### Elite Ward
Less damage from elites.

- **Goes on:** any armor piece
- **Levels:** I: -5% per piece. II: -10%. III: -15%.
- Pieces add up: Elite Ward III on all four is -60%.
- Covers the elite's own hits and projectiles. Not its Explosive death blast and not its summoned minions.
- Elites only.

### Purity
Harmful effects last shorter.

- **Goes on:** helmets
- **Levels:** I: 33% shorter. II: 55% shorter. III: 75% shorter.
- Any harmful effect from any source: mob hits, arrows, witch potions, elite auras, wardens and players. Good effects are untouched.

## Rare

### Sunder
Hits ignore part of the armor and Protection.

- **Goes on:** melee
- **Levels:** I: 15% ignored. II: 30%. III: 45%. IV: 60%. V: 75%.
- Ignores that share of **both** the target's armor (armor and toughness) and its Protection enchantment.
- Can't share a weapon with Breach. Stacks with Shatter.

Example: a Sharpness 20 netherite sword (18.5 damage) against a level 49 skeleton in netherite. Its armor takes away about 80% of the hit, and Protection IV on four pieces another 64%.

| Sunder | Damage per hit |
|---|---|
| None | 1.3 |
| I | 2.7 |
| II | 4.5 |
| III | 6.7 |
| IV | 9.4 |
| V | 12.4 |

Damage bonuses like Depth Slayer multiply on top of that.

### Cleave
Hits also damage nearby mobs.

- **Goes on:** melee
- **Levels:** I: 30% of the hit. II: 45%. III: 60%.
- On a full-charge hit, every other mob within **3 blocks** of the target takes that share, through its own armor. There is no limit on how many.
- Never hits players.
- Splash kills count as your kills, for Bloodlust and for drops. Splash damage counts for Lifesteal. On-hit effects like Frostbite or Disarm don't trigger on splash.
- Can't share a weapon with Sweeping Edge or Quake.

### Giant Killer
Extra damage to targets with more max health than you.

- **Goes on:** melee
- **Levels:** I: up to +10%. II: up to +20%. III: up to +30%.
- No bonus when the target's max health is equal to yours or lower. The full bonus at **twice** your max health or more, and evenly in between.
- Uses your real max health, Vitality included. With 20 health, every mob with 40 or more max health gets the full bonus.

### Deflection
Chance to deflect projectiles.

- **Goes on:** chestplates
- **Levels:** I: 10% per projectile. II: 20%. III: 30%.
- Any projectile: arrows, tridents, fireballs, shulker bullets, wither skulls, wind charges. A deflected projectile does nothing. Arrows drop to the ground, fireballs and skulls vanish.

### Dodge
Chance to avoid a hit completely.

- **Goes on:** leggings
- **Levels:** I: 4% per hit. II: 8%. III: 12%.
- Works on melee hits, projectiles and explosions. A dodged hit does no damage, no knockback and no status effect. There is no sound or particle.
- Falls, fire, lava and poison can't be dodged.

### Quake
Smashes also damage nearby mobs.

- **Goes on:** maces
- **Levels:** I: 30% of the smash. II: 45%. III: 60%.
- A smash attack also hits every other mob within **3 blocks** of the target, for that share of the full smash damage (fall bonus, Density and Meteor included).
- Same rules as Cleave. Can't share a mace with Cleave.

## Legendary

### Shatter
Hits strip the target's armor.

- **Goes on:** melee
- **Levels:** I: up to 3 stacks. II: up to 6. III: up to 9.
- Each full-charge hit adds a stack. Each stack removes **5%** of the target's armor and toughness, so 9 stacks remove 45%.
- Each stack lasts **10 s** on its own. Hitting at the cap restarts the oldest stack.
- Stacks sit on the target, so everyone hitting it benefits. They are gone when the mob unloads.
- Stacks with Sunder.

### Silence
Chance to switch off a mob's abilities.

- **Goes on:** melee
- **Levels:** I only.
- **15%** per full-charge hit on a leveled mob. The mob is silenced for **5 s**. A new proc restarts the timer.
- While silenced, a mob loses every [elite trait](../mobs/elites.md#traits) (active, passive and Explosive death) and every [level ability](../mobs/abilities.md): status hits, archer aim and double shots, strong witch potions, extra slime splits, spider leaps, enderman teleports and the zombie reinforcement bonus.
- Its stats, gear, name tag, elite particles and boss bar stay.
- Mobs only, does nothing to players.

### Last Stand
Less damage while badly hurt.

- **Goes on:** chestplates
- **Levels:** I: -15%. II: -30%.
- Works while your health, before the hit, is below **30%** of your max. Covers every kind of damage, falls, lava and poison too.
- Can share a chestplate with Second Wind.

### Second Wind
Strong regeneration when badly hurt.

- **Goes on:** chestplates
- **Levels:** I only.
- When any damage leaves you below **25%** of your max health: Regeneration III for 5 s. Then a **60 s** cooldown. Nothing shows the cooldown.

### Overheal
Overflow healing becomes absorption.

- **Goes on:** leggings
- **Levels:** I: up to 4 absorption (2 yellow hearts). II: up to 8 (4 yellow hearts).
- Healing past full health turns into absorption: potions, Regeneration, Bloodlust, Second Wind and Lifesteal. Natural regeneration from food doesn't count.
- It fades after **10 s** without dealing or taking damage.
- Golden apple absorption is separate and untouched.

### Unbreakable
The item never loses durability.

- **Goes on:** anything with durability
- **Levels:** I only.
- Replaces Mending, which doesn't exist on the server.
- Putting it on an item with Unbreaking removes Unbreaking and fully repairs the item. Unbreaking can't be added to an Unbreakable item.
- Can't go on [Sunward suit](../world/surface.md#the-sunward-suit) pieces.

### Meteor
Smashes hit harder the further you fell.

- **Goes on:** maces
- **Levels:** I: +15% per block fallen. II: +30% per block.
- Counts up to **10 blocks**, so at most +150% at I and +300% at II. The bonus applies to the whole smash.
- Can't share a mace with Density.

## Mythic

### Executioner
Hits also deal a share of the target's max health.

- **Goes on:** melee
- **Levels:** I: 2% of the target's max health. II: 4%. III: 6%.
- On each full-charge hit, as extra damage a moment after the hit. It ignores armor, Protection and defensive enchantments. Damage bonuses don't raise it.
- Bosses (warden, wither, ender dragon, elder guardian) take at most **10** extra per hit.
- A weapon with Executioner also hits through the [Shielded](../mobs/elites.md#traits) trait, without using up one of its blocks.

### Depth Slayer
Extra damage to deep mobs.

- **Goes on:** melee
- **Levels:** +50% per level against a level 50 mob: I: +50%. II: +100%. III: +150%. IV: +200%. V: +250%.
- The bonus follows the mob's [power](../mobs/levels.md#power): almost nothing at level 1, about 40% of the full bonus at level 25.
- Leveled mobs only.

| Mob level | I | II | III | IV | V |
|---|---|---|---|---|---|
| 1 | +0% | +0% | +0% | +0% | +1% |
| 10 | +6% | +11% | +17% | +22% | +28% |
| 20 | +14% | +29% | +43% | +58% | +72% |
| 25 | +19% | +39% | +58% | +78% | +97% |
| 30 | +25% | +50% | +75% | +100% | +125% |
| 40 | +37% | +73% | +110% | +147% | +183% |
| 50 | +49% | +99% | +148% | +197% | +247% |

Values are for a mob in the middle of its level.

### Lifesteal
Heals a share of the damage you deal.

- **Goes on:** melee
- **Levels:** I: 3%. II: 6%. III: 9%.
- Counts all damage the weapon deals: the hit, Executioner's extra damage and Cleave or Quake splash. Works on every hit, with no cap.
- Only damage that actually lands counts, up to the target's remaining health and absorption.
- Healing past full health feeds Overheal.

### Bulwark
Less damage from leveled mobs.

- **Goes on:** any armor piece
- **Levels:** I: -3% per piece. II: -6%. III: -9%. IV: -12%.
- Pieces add up: Bulwark IV on all four is -48%. Covers a leveled mob's hits, projectiles and explosions, at any level.
- Leveled mobs only.

## Elites
- **Shielded:** a weapon with Elite Bane or Executioner hits straight through, without using up a block.
- **Thorny:** the reflected damage is worked out from your hit before the custom damage bonuses.
- See [Elite mobs](../mobs/elites.md).

## Related
- [Enchanting](index.md): books, drops, attuning, anvils and the grindstone
- [Mob levels](../mobs/levels.md): power and levels
- [Elite mobs](../mobs/elites.md)
- [Kill rewards](../mobs/rewards.md)
