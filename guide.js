// Field Guide content (unofficial fan guide)
window.GUIDE=[
{id:'basics',t:'The Basics',h:`<h2>The Basics</h2><p class="lead">What Rust actually is, and the shape of a wipe.</p>
<p>Rust is a multiplayer survival game where <b>everyone else is the main threat</b>. You spawn naked on a beach with a Rock and a Torch, gather resources, craft tools and weapons, build a base, and try to keep what you've got while other players try to take it.</p>
<h3>Wipes</h3>
<p>Servers <b>wipe</b> regularly: the map resets and everyone starts naked again. Facepunch forces a wipe on all servers with the monthly update (first Thursday of each month); many community servers also wipe weekly or bi-weekly. Some wipes also reset <b>blueprints</b> (what you've learned to craft).</p>
<h3>The shape of a wipe</h3>
<table><tr><th>Stage</th><th>What the server looks like</th><th>Your priority</th></tr>
<tr><td><b>Early (first hours)</b></td><td>Everyone naked. Bows, spears, stone tools. Lots of fresh spawns on the coast.</td><td>Bag, stone tools, a small stone base with a lock, get off the beach.</td></tr>
<tr><td><b>Mid (day 1–4)</b></td><td>Guns everywhere, groups have workbench 2–3, first raids with satchels and C4. Roads and monuments are contested.</td><td>Secure a hidden, efficient base; build a scrap income; get T1/T2 guns; don't lose everything in one trip.</td></tr>
<tr><td><b>Late (end of wipe)</b></td><td>Big groups have rockets and automatic rifles. Many players quit; bases decay.</td><td>Raid decayed or abandoned bases, play for fights, or rest until the next wipe.</td></tr></table>
<div class="box">The single most important mindset: <b>you will die a lot</b>. What matters is what you lose when you die and where you respawn. Everything in this guide is about making death cheap.</div>
<h3>Default controls (real game)</h3>
<table><tr><td>WASD / Shift / Ctrl / Space</td><td>Move / sprint / crouch / jump</td></tr><tr><td>Tab</td><td>Inventory</td></tr><tr><td>Q</td><td>Crafting menu</td></tr><tr><td>E (hold E)</td><td>Use / interact (more options)</td></tr><tr><td>G</td><td>Map</td></tr><tr><td>1–6 / mouse wheel</td><td>Select hotbar slot</td></tr><tr><td>Right-click with Building Plan / Hammer</td><td>Open building / upgrade wheel</td></tr></table>`},
{id:'vitals',t:'Vitals',h:`<h2>Vitals</h2><p class="lead">The bars in the bottom-right corner.</p>
<table><tr><th>Stat</th><th>What it does</th><th>How to manage it</th></tr>
<tr><td><b>Health</b></td><td>0 = dead. Regenerates slowly when you're well fed and hydrated.</td><td>Bandages (4 cloth), medical syringes, large medkits, eating.</td></tr>
<tr><td><b>Calories</b></td><td>Drains over time and faster when sprinting. At zero you take damage.</td><td>Mushrooms, corn, pumpkins, berries, fish, <b>cooked</b> meat (raw meat can poison you), cans from crates.</td></tr>
<tr><td><b>Hydration</b></td><td>Drains over time. At zero you take damage.</td><td>Rivers, lakes, water bottles/jugs, water catchers, purifiers. <b>Never drink salt water</b> — it dehydrates you.</td></tr>
<tr><td><b>Temperature</b></td><td>Cold (snow, night, water) or heat (desert) hurts you over time.</td><td>Clothing, campfires, staying dry. Snow biomes need warm clothes.</td></tr>
<tr><td><b>Radiation</b></td><td>Builds up at monuments; damages you past a threshold.</td><td>Radiation-protective clothing (Hazmat suit), leave the zone.</td></tr>
<tr><td><b>Bleeding</b></td><td>From animal attacks, arrows, falls. Drains health.</td><td>Bandage.</td></tr>
<tr><td><b>Comfort</b></td><td>Near a campfire/rug/chair; boosts health regen.</td><td>Nice for base downtime.</td></tr></table>
<div class="box">Fresh spawns start with low health and food. Your first 10 minutes: eat a few mushrooms/corn, drink at a river, and don't sprint everywhere for no reason.</div>`},
{id:"animals",t:"Animals & Hunting",h:`<h2>Animals & Hunting</h2><p class="lead">Food is scarce on purpose. Animals are your main source of calories, and some of them hunt you back.</p>
<table><tr><th>Animal</th><th>Behaviour</th><th>Gives (harvest the corpse with a tool)</th></tr>
<tr><td><b>Deer / Stag</b></td><td>Skittish. Runs the moment it notices you. Hard to catch on foot; use a bow.</td><td>Meat, leather, bone, fat</td></tr>
<tr><td><b>Boar</b></td><td>Wanders slowly. Charges if you get close or hit it. Hits hard for a fresh spawn.</td><td>Pork (meat), lots of fat, leather, bone</td></tr>
<tr><td><b>Wolf</b></td><td>Hunts players, often in pairs, more aggressive at night. Faster than you can sprint, so fight, don&#39;t run.</td><td>Meat, leather, bone</td></tr>
<tr><td><b>Bear</b> (real game)</td><td>Very tough, kills fresh spawns fast. Avoid until you have a gun.</td><td>Lots of meat, fat, leather</td></tr>
<tr><td><b>Chicken, horse, shark</b> (real game)</td><td>Chickens are easy food; horses are rideable; sharks in deep water.</td><td>Various</td></tr></table>
<h3>Hunting loop</h3><ol><li>Kill it (spear or bow; arrows are 25 wood + 10 stone for 2 in this training).</li><li><b>Harvest</b> the corpse by hitting it with a tool. Hatchets harvest fastest.</li><li><b>Cook</b> raw meat at a campfire (100 wood). Raw meat makes you sick.</li><li>Animal fat + cloth → Low Grade Fuel, leather → hide clothing, bone → bone tools and arrows.</li></ol>
<div class="box">Plants like mushrooms, corn and hemp are rare and get picked fast by other players. Don&#39;t count on finding them: learn to hunt early.</div>
<div class="box r">Fighting animals makes noise. Hostile players hear it and come looking.</div>`},
{id:'resources',t:'Resources',h:`<h2>Resources</h2><p class="lead">What everything is, where it comes from and what it's for.</p>
<h3>Reading nodes</h3><p>Ore nodes look like boulders. Their colour tells you what's inside: <span class="tag">grey</span> = Stone, <span class="tag">rusty brown</span> = Metal Ore, <span class="tag">yellow</span> = Sulfur Ore. In the real game, hit the <b>sparkle</b> on a node (or the red <b>X</b> on a tree) for bonus yield.</p>
<table><tr><th>Resource</th><th>Where found</th><th>Used for</th></tr>
<tr><td><b>Wood</b></td><td>Trees, dead logs, cacti (a little)</td><td>Tools, twig/wood building, TC (1000), doors, furnace fuel, campfires, bows, arrows</td></tr>
<tr><td><b>Stone</b></td><td>Stone nodes, loose rocks on the ground</td><td>Stone tools, stone building (300 per full piece), furnaces, spears, arrows</td></tr>
<tr><td><b>Metal Ore → Metal Fragments</b></td><td>Metal nodes; smelt 1:1 in a furnace</td><td>Code locks, sheet metal doors, metal building, guns, tools, armour</td></tr>
<tr><td><b>Sulfur Ore → Sulfur</b></td><td>Sulfur nodes; smelt in a furnace</td><td>Gunpowder (20 sulfur + 30 charcoal = 10 GP) → ammo, explosives</td></tr>
<tr><td><b>HQ Metal Ore → HQM</b></td><td>End of metal nodes, quarries; recycling pipes, springs, tech parts</td><td>Armoured building, high-tier guns, metal armour, workbench 2/3</td></tr>
<tr><td><b>Cloth</b></td><td>Hemp plants; recycling rope/tarps/sewing kits</td><td>Sleeping bags, bandages, bows, clothing, LGF. <a href="#" onclick="openGuide('cloth');return false" style="color:var(--yellow)">Deep dive →</a></td></tr>
<tr><td><b>Animal Fat, Leather, Bone, Meat</b></td><td>Skinning animals (boar, deer, wolf, bear, horse, chicken)</td><td>Fat + cloth → low grade fuel; leather → hide clothing; bone → bone tools/arrows; cook meat for food</td></tr>
<tr><td><b>Low Grade Fuel</b></td><td>Road and oil barrels; craft 3 fat + 1 cloth → 4 LGF</td><td>Furnace (50), lanterns, med syringes, explosives, flamethrower, quarries</td></tr>
<tr><td><b>Charcoal</b></td><td>Burning wood in furnaces and campfires</td><td>Gunpowder. Keep every piece.</td></tr>
<tr><td><b>Scrap</b></td><td>Barrels, crates, recycling, missions</td><td>Workbenches, research, tech tree, vending machines</td></tr>
<tr><td><b>Crude Oil</b></td><td>Oil barrels, pump jacks, oil rigs</td><td>Refine into Low Grade Fuel</td></tr></table>
<h3>Smelting</h3><p>A Furnace (200 stone, 100 wood, 50 LGF) burns wood to smelt ore. Every piece of wood it burns becomes charcoal. Split ore into multiple stacks to smelt faster. Large furnaces and refineries come later.</p>`},
{id:'cloth',t:'Cloth (deep dive)',h:`<h2>Cloth</h2><p class="lead">The resource new players forget about — until they need a sleeping bag.</p>
<h3>What it is</h3><p>Cloth is woven plant fibre. It's light, cheap and needed for some of the most important early items in the game.</p>
<h3>Where to find it</h3>
<ul><li><b>Hemp plants</b> — the main source. Tall, light-green fibrous plants that grow in grassland and forests (not on beaches). Press E to pick: <b>10 cloth</b> each. Hemp also gives seeds you can plant later.</li>
<li><b>Recycling</b> — Tarps, Rope and Sewing Kits recycle into cloth at a Recycler.</li>
<li><b>Farming</b> — mid-wipe, planter boxes of hemp give a steady supply.</li></ul>
<h3>What it's for</h3>
<table><tr><th>Item</th><th>Cloth</th><th>Why it matters</th></tr>
<tr><td>Sleeping Bag</td><td>30</td><td>Your respawn point. Craft one in your first 10 minutes.</td></tr>
<tr><td>Bandage</td><td>4</td><td>Stops bleeding, small heal.</td></tr>
<tr><td>Bow (+200 wood)</td><td>50</td><td>Your first real weapon.</td></tr>
<tr><td>Burlap clothing</td><td>varies</td><td>Cheap warmth and a little protection.</td></tr>
<tr><td>Low Grade Fuel</td><td>1 (+3 fat → 4 LGF)</td><td>Furnace crafting, lights, syringes.</td></tr>
<tr><td>Medical Syringe</td><td>15</td><td>Fast heal in fights.</td></tr>
<tr><td>C4, beds, hazmat, rugs</td><td>various</td><td>Mid/late game.</td></tr></table>
<div class="box g">Early-wipe route: spawn → pick hemp as you walk inland → 30 cloth → sleeping bag. Done before you've even made a hatchet.</div>`},
{id:'components',t:'Components & Scrap',h:`<h2>Components & Scrap</h2><p class="lead">The loot that drives progression.</p>
<p><b>Components</b> are parts found in barrels and crates: Rope, Tarp, Sewing Kit, Gears, Metal Pipe, Metal Blade, Springs, Semi-Auto Body, Rifle Body, SMG Body, Road Signs, Sheet Metal, Tech Trash and more. You can use them to craft, or recycle them.</p>
<h3>Recycling</h3><p>Recyclers turn components into raw resources and <b>scrap</b>. Found at <b>Outpost</b>, <b>Bandit Camp</b> and most monuments. Rough idea of outputs:</p>
<table><tr><th>Component</th><th>Recycles into (approx.)</th></tr>
<tr><td>Tarp</td><td>Lots of cloth</td></tr><tr><td>Rope</td><td>Cloth</td></tr><tr><td>Sewing Kit</td><td>Cloth + rope</td></tr>
<tr><td>Gears</td><td>Scrap + metal fragments</td></tr><tr><td>Metal Pipe</td><td>Scrap + HQM</td></tr><tr><td>Metal Spring</td><td>Scrap + HQM</td></tr><tr><td>Tech Trash</td><td>Scrap + HQM</td></tr></table>
<div class="box">Keep components you need for crafting soon (gears for garage doors, pipes/springs for guns). Recycle the rest.</div>
<h3>Where scrap comes from</h3><ul><li>Road barrels and oil barrels — the classic "road farm"</li><li>Crates at monuments, underwater crates, sunken loot</li><li>Recycling components</li><li>Train tunnels (underground, with scientists)</li><li>Vending machines and trades at Outpost / Bandit Camp</li></ul>`},
{id:'progression',t:'Crafting & Progression',h:`<h2>Crafting & Progression</h2><p class="lead">How you go from rock to rifle.</p>
<h3>Blueprints</h3><p>You start knowing basic recipes (tools, bags, doors, code lock, furnace...). Everything else needs a <b>blueprint</b>. Learn blueprints by:</p>
<ul><li><b>Research Table</b> — put in an item + scrap, get its blueprint. Fast if you find the item in loot.</li>
<li><b>Tech Tree</b> — at a Workbench, spend scrap to unlock items in order.</li><li>Teammates can share by researching too; blueprints are per player.</li></ul>
<h3>Workbenches</h3>
<table><tr><th>Bench</th><th>Cost (approx.)</th><th>Unlocks</th></tr>
<tr><td>Level 1</td><td>500 wood, 100 frags, 50 scrap</td><td>T1: revolver, double barrel, P2, crossbow, salvaged tools, roadsign armour</td></tr>
<tr><td>Level 2</td><td>500 frags, 20 HQM, 500 scrap</td><td>T2: Python, SAR, Thompson, custom SMG, metal armour pieces, garage door</td></tr>
<tr><td>Level 3</td><td>1000 frags, 100 HQM, 1250 scrap</td><td>T3: AK, LR-300, bolt action, C4, rockets, armoured doors</td></tr></table>
<div class="box">Safe zones (Outpost, Bandit Camp) have research tables and recyclers you can use without a base. Great for solo players mid-wipe.</div>`},
{id:'bags',t:'Sleeping Bags & Respawning',h:`<h2>Sleeping Bags & Respawning</h2><p class="lead">Your bags are your wipe. Lose them and you're a fresh spawn on the coast again.</p>
<h3>How they work</h3><ul>
<li>Sleeping Bag: <b>30 cloth</b>. Place it anywhere you have building permission (not inside someone else's TC range, not in monuments).</li>
<li>When you die, you choose: a random beach, or one of your bags/beds.</li>
<li>After spawning on a bag it goes on a <b>5-minute cooldown</b>. Beds (cloth + frags + sewing kits) have a shorter <b>~2-minute</b> cooldown.</li>
<li>Bags placed <b>close together share cooldowns</b> — spawning on one puts nearby ones on cooldown too. Spread them out.</li>
<li>You can rename bags and <b>assign them to a teammate</b> (hold E → Give). There's a per-player bag limit on each server.</li>
<li>Bags are fragile and easy to find. Anyone can destroy one.</li></ul>
<h3>Bag strategy</h3><ol>
<li><b>First 10 minutes:</b> one bag inland, wherever you plan to build.</li>
<li><b>At your base:</b> at least one bag (better: a bed) inside, in a room raiders can't reach easily.</li>
<li><b>Outside your base:</b> one or two hidden bags 100–300m away, behind rocks or in bushes. If raiders camp your base, you can spawn outside and fight them from behind, or respawn without walking into their sights.</li>
<li><b>Farm/loot spots:</b> a bag near the monument, road or farm area you use most.</li>
<li><b>Far side of the map:</b> one emergency bag so a raid doesn't send you back to the beach.</li></ol>
<div class="box r"><b>Sleepers.</b> When you log off, your character stays in the world asleep. Anyone can kill your sleeper and loot everything on you. <b>Always log off inside your base</b>, ideally deep inside it.</div>
<div class="box"><b>Death runs.</b> When you die, your items drop in a backpack/corpse. You can run back from a nearby bag and recover it — that's why bags near where you fight matter.</div>`},
{id:'building',t:'Building a Base',h:`<h2>Building a Base</h2><p class="lead">How building actually works.</p>
<h3>Tools</h3><ul><li><b>Building Plan</b> (20 wood): places pieces in <b>twig</b>.</li><li><b>Hammer</b> (100 wood): upgrades, repairs, rotates and (for a short time) picks up pieces.</li></ul>
<h3>Building grades</h3>
<table><tr><th>Grade</th><th>Cost per full piece (approx.)</th><th>Notes</th></tr>
<tr><td>Twig</td><td>50 wood</td><td>Breaks to a rock. Placement only.</td></tr>
<tr><td>Wood</td><td>200 wood</td><td>Can be burned/chopped. Usually skipped.</td></tr>
<tr><td>Stone</td><td>300 stone</td><td>The baseline. Needs explosives to raid.</td></tr>
<tr><td>Sheet Metal</td><td>200 metal fragments</td><td>Much tougher. Mid-wipe goal.</td></tr>
<tr><td>Armoured</td><td>25 HQM</td><td>Best. Expensive.</td></tr></table>
<h3>Tool Cupboard (TC)</h3><ul>
<li>1000 wood. Place it <b>first</b>, inside your base.</li>
<li>Gives <b>building privilege</b> in a radius: only authorized players can build, place bags or upgrade there.</li>
<li>Holds <b>upkeep</b>. Your base consumes resources over time (in the materials it's built from). Empty TC = <b>decay</b>: pieces lose HP and eventually collapse.</li>
<li>Lock it (code lock), and put it deep in the base. If raiders reach your TC, they can clear the auth list and take your base.</li></ul>
<h3>Soft sides</h3><p>Walls, foundations and some pieces have a <b>soft side</b> (the inside face) that is much weaker to melee. Always place walls from the inside so the hard side faces out. Raiders with enough time can pickaxe a soft side.</p>
<h3>Doors & locks</h3>
<table><tr><th>Door</th><th>Cost</th><th>Notes</th></tr>
<tr><td>Wooden</td><td>300 wood</td><td>First hours only. Burnable.</td></tr>
<tr><td>Sheet Metal</td><td>150 frags</td><td>Standard early-mid door.</td></tr>
<tr><td>Garage</td><td>Frags + gears, WB2</td><td>Stronger, great for loot rooms.</td></tr>
<tr><td>Armoured</td><td>HQM + gears, WB3</td><td>Strongest.</td></tr></table>
<p><b>Key Lock</b> (75 wood): the key drops when you die — raiders can use it. <b>Code Lock</b> (100 frags): 4-digit code, wrong guesses shock the guesser. Use code locks as soon as you can.</p>`},
{id:'defense',t:'Not Getting Raided',h:`<h2>Not Getting Raided</h2><p class="lead">You can't make a base unraidable. You can make it not worth it.</p>
<div class="box">Raiders weigh <b>cost</b> (sulfur, time, risk) against <b>expected loot</b>. Your job: raise the cost, lower the visible value, and be hard to find.</div>
<h3>1. Location</h3><ul><li>Avoid the <b>coast, main roads, rivers everyone follows, and monuments</b>. Those are highways — every person walking past is a potential raider.</li>
<li>Good spots: against cliffs, in thick forest, behind rock formations, in valleys, near nothing interesting.</li>
<li>Don't build next to a big clan base. You'll be their sulfur warmup.</li></ul>
<h3>2. Design</h3><ul>
<li><b>Airlock</b>: two doors in a row at your entrance so someone can't push in behind you when you open the door.</li>
<li><b>Honeycomb</b>: extra layers of walls/triangle foundations around your core. Each layer adds a full wall's raid cost to every path.</li>
<li><b>Multiple doors to the loot</b>: each door on the path to your TC/loot is another cost.</li>
<li><b>Split loot</b>: don't keep everything in one box. Some in the core, some elsewhere.</li>
<li><b>Hide the TC</b> deep in the core, behind the most doors.</li>
<li>Small and efficient beats big and thin. A 2x2 stone with an airlock and honeycomb is stronger than a sprawling wood mansion.</li></ul>
<h3>3. Behaviour</h3><ul>
<li><b>Don't run loot to your base in the open</b> while being followed. Check behind you.</li>
<li><b>Don't type your code with people watching</b>, and change it if you think it leaked.</li>
<li><b>Keep upkeep in the TC.</b> Decaying bases are the cheapest raids on the server.</li>
<li><b>Don't show off.</b> Turrets, lights and lots of furnaces running say "rich".</li>
<li><b>Log off inside</b> and don't leave a sleeper outside.</li>
<li><b>Don't provoke big groups</b> near your base unless you're ready to be raided.</li>
<li>When the base is raided while you're online, defend from a bag outside, not from the door they're blowing.</li></ul>
<h3>4. Extra layers (mid-wipe)</h3><ul><li><b>External walls</b> (high wood/stone walls) around the base: more to break, harder to approach.</li><li><b>Shotgun traps</b> and <b>auto turrets</b> on entrances (turrets need electricity).</li><li><b>Peaks/roof access</b> so you can shoot back when raided.</li><li><b>Bunkers</b> — clever building tricks that make the entrance much more expensive. Look up current bunker designs; they change with patches.</li></ul>`},
{id:'raidmath',t:'Raid Math',h:`<h2>Raid Math</h2><p class="lead">Approximate costs to break things. Values change with patches — check Rustlabs or the wiki for current numbers.</p>
<h3>Explosive costs (sulfur)</h3>
<table><tr><th>Explosive</th><th>≈ Sulfur</th></tr>
<tr><td>Beancan Grenade</td><td>~120</td></tr><tr><td>Satchel Charge (4 beancans + rope + stash)</td><td>~480</td></tr>
<tr><td>Explosive 5.56 ammo (each)</td><td>~25</td></tr><tr><td>Rocket</td><td>~1,400</td></tr><tr><td>Timed Explosive (C4)</td><td>~2,200</td></tr></table>
<h3>What it takes to break (approx.)</h3>
<table><tr><th>Target</th><th>Satchels</th><th>Rockets</th><th>C4</th></tr>
<tr><td>Wooden Door</td><td>2</td><td>1</td><td>1</td></tr><tr><td>Sheet Metal Door</td><td>4</td><td>2</td><td>1</td></tr>
<tr><td>Garage Door</td><td>9</td><td>3</td><td>2</td></tr><tr><td>Armoured Door</td><td>12</td><td>4</td><td>2</td></tr>
<tr><td>Stone Wall</td><td>10</td><td>4</td><td>2</td></tr><tr><td>Sheet Metal Wall</td><td>23</td><td>8</td><td>4</td></tr><tr><td>Armoured Wall</td><td>46</td><td>15</td><td>8</td></tr></table>
<div class="box">Think like a raider: they hit the <b>cheapest path</b>. If your stone base has one sheet-metal door to your loot, the raid costs 1 C4. Add an airlock and a second door to the core → 2–3 C4. Add a honeycomb layer → they need to break walls too. You want every path to cost more than your loot looks worth.</div>
<h3>Non-explosive raids</h3><ul><li>Twig: any tool.</li><li>Wood walls & doors: fire arrows, flamethrower, melee on soft sides.</li><li>Decayed bases: almost anything.</li><li>Eoka / guns with explosive ammo for doors, a hatchet on soft sides if nobody's watching.</li></ul>`},
{id:'midwipe',t:'Mid-Wipe: Escaping the Coast',h:`<h2>Mid-Wipe: Escaping the Coast</h2><p class="lead">The trap: you get raided or die a few times, lose your bags, and you're spawning naked on the beach every 5 minutes while everyone else has guns. Here's how to never get stuck there.</p>
<h3>Why players get stuck</h3><ul><li>Only one bag — at the base that just got raided (and is now camped).</li><li>Base built on the coast or a road, so it keeps getting hit.</li><li>Carrying everything all the time, so every death resets you.</li><li>Fighting geared players with a rock and losing every respawn.</li><li>No blueprints learned, so even with resources you can't craft anything useful.</li></ul>
<h3>Prevention (do this every wipe)</h3><ol>
<li><b>Spread bags</b>: base, 2 hidden ones nearby, one across the map. If your main base dies, you still spawn inland.</li>
<li><b>A backup stash</b>: a hidden Small Stash (buried, hard to see) or a tiny stone 1x1 away from your main base with a kit, food, meds and a bag.</li>
<li><b>Bank loot often</b>. Only carry what you need for the trip.</li>
<li><b>Research what you loot</b>: every blueprint you learn stays with you after a raid. Blueprints are progress that can't be stolen.</li>
<li><b>Upkeep</b>: keep at least a day in the TC so a quiet base doesn't decay into an easy target.</li></ol>
<h3>If you've just been wiped out mid-wipe</h3><ol>
<li><b>Don't go back to the old base</b> if raiders are still there. Spawn on your backup bag or go somewhere new.</li>
<li><b>Get off the coast immediately.</b> Head inland, picking hemp as you go. Craft a bag on the move.</li>
<li><b>Quick kit</b>: spear (300 wood) or bow (200 wood, 50 cloth) + arrows, a few bandages. Avoid fights; you're not here to PvP yet.</li>
<li><b>Find a quiet spot</b>: away from roads, rivers people follow and monuments. Snow or desert edges are often quieter but colder/hotter.</li>
<li><b>Stone 1x1 or 2x1 straight from twig</b>, door, code lock, TC with upkeep. Bag + furnace inside. Small and cheap = not worth raiding.</li>
<li><b>Safe-zone loop</b>: farm barrels/components → recycle at <b>Outpost</b> or <b>Bandit Camp</b> → buy at vending machines or research. You can't be legally shot there (unless you go hostile).</li>
<li><b>Farm at off-peak times</b>: early morning server time, or when the big groups are busy at Cargo Ship, Oil Rig or a raid (check map markers / listen for helicopters).</li>
<li><b>Expand only when you have spare</b>: 2x2 with an airlock → honeycomb → sheet metal → external walls.</li></ol>
<h3>Earning safely mid-wipe</h3><ul>
<li><b>Fishing</b> (fishing rod / traps) for food and some scrap value.</li>
<li><b>Underground train tunnels</b> for scrap and travel away from surface roamers (there are scientists).</li>
<li><b>Small monuments</b> (gas station, supermarket, lighthouse) are quick, lower-risk loot.</li>
<li><b>Boats</b> to small islands or the far coast for quiet building spots.</li>
<li><b>Vending & trading</b>: sell excess (stone, wood, cloth, fuel) to players' shops.</li>
<li><b>Join a group or make friends</b> with a neighbour. Rust gets easier with two or three people.</li></ul>
<div class="box g"><b>The golden rule:</b> make your base cheap to own and expensive to raid. A hidden stone 2x2 with an airlock, a code lock, a stocked TC and bags spread around the map will carry a solo player through most mid-wipes.</div>`},
{id:'monuments',t:'Monuments & Safe Zones',h:`<h2>Monuments & Safe Zones</h2><p class="lead">The landmarks that hold the best loot — and the most players.</p>
<h3>Safe zones</h3><ul><li><b>Outpost</b> and <b>Bandit Camp</b>: no fighting allowed. Turrets/guards shoot anyone who becomes <b>hostile</b> (attacks or aims at others). Holding a weapon out also matters at Outpost.</li><li>Recyclers, research tables, repair benches, vending machines, Bandit Camp gambling and the airwolf/boat vendors.</li><li>Players camp the roads leading in and out. Leave carefully.</li></ul>
<h3>Monuments</h3><ul><li>Small: gas station, supermarket, lighthouse, warehouses — quick loot, low radiation.</li>
<li>Medium/large: harbour, airfield, trainyard, water treatment, power plant, satellite dish, sewer branch, dome, military tunnels, launch site — better crates, often radiation, scientists and <b>keycard puzzles</b>.</li>
<li>Endgame events: <b>Oil Rigs</b>, <b>Cargo Ship</b>, <b>Patrol Helicopter</b>, <b>Bradley APC</b> at launch site — high-tier loot, contested by groups.</li></ul>
<h3>Keycard puzzles</h3><p>Green → Blue → Red. Each card opens a room with better loot and the next card. Usually needs a fuse and some radiation protection.</p>
<div class="box r">Radiation stacks up. Bring a Hazmat suit or radiation-protected clothing for larger monuments, and leave when your RAD meter climbs.</div>`},
{id:'pvp',t:'Fighting & Gear',h:`<h2>Fighting & Gear</h2><p class="lead">A rough weapon and armour ladder.</p>
<h3>Weapons ladder</h3>
<table><tr><th>Stage</th><th>Weapons</th></tr>
<tr><td>Primitive</td><td>Rock, spear, bow, crossbow, Eoka (single-shot pipe gun)</td></tr>
<tr><td>T1</td><td>Revolver, Double Barrel shotgun, Waterpipe shotgun, P2 pistol</td></tr>
<tr><td>T2</td><td>Python, Semi-Auto Rifle (SAR), Thompson, Custom SMG, MP5</td></tr>
<tr><td>T3</td><td>AK-47, LR-300, Bolt Action rifle, L96, M249, rockets, C4</td></tr></table>
<h3>Armour</h3><ul><li>Early: burlap, hide clothing, wooden armour.</li><li>T1: roadsign kit (jacket + kilt), coffee can helmet.</li><li>T2/T3: metal facemask & chestplate (HQM). Hazmat for radiation.</li></ul>
<h3>Fight smart</h3><ul><li>Don't fight geared players with nothing. Run, hide, break line of sight.</li><li>Heal with bandages/syringes between engagements.</li><li>Fight near your bags so death means a quick return, not a beach spawn.</li><li>"Friendly?" works sometimes. Trust carefully.</li></ul>`},
{id:"crafting",t:"Crafting Requirements",h:`<h2>Crafting Requirements</h2><p class="lead">What it actually takes to craft something in Rust.</p>
<p>Every recipe in Rust has up to four requirements. The Training Island simulates all of them:</p>
<table><tr><th>Requirement</th><th>What it means</th></tr>
<tr><td><b>Ingredients</b></td><td>The resources and components in the recipe. They are taken from your inventory <b>when you start</b> crafting; cancelling refunds them.</td></tr>
<tr><td><b>Blueprint</b></td><td>Basic items are known from the start. Everything else needs its blueprint: research a looted copy at a <b>Research Table</b> (item + scrap), or unlock it on the <b>tech tree</b> at a workbench (more scrap, no item needed).</td></tr>
<tr><td><b>Workbench level</b></td><td>Tier 1/2/3 items need you to be standing near a Workbench of at least that level.</td></tr>
<tr><td><b>Time</b></td><td>Crafting takes real seconds and runs in a queue while you keep playing. If you die, the queue is cancelled and the ingredients drop with your backpack.</td></tr></table>
<h3>Examples (approximate real values)</h3>
<table><tr><th>Item</th><th>Ingredients</th><th>Needs</th><th>Time</th></tr>
<tr><td>Stone Hatchet</td><td>200 wood, 100 stone</td><td>—</td><td>~30s</td></tr>
<tr><td>Sleeping Bag</td><td>30 cloth</td><td>—</td><td>~30s</td></tr>
<tr><td>Tool Cupboard</td><td>1000 wood</td><td>—</td><td>~30s</td></tr>
<tr><td>Workbench Level 1</td><td>500 wood, 100 frags, 50 scrap</td><td>—</td><td>~60s</td></tr>
<tr><td>Research Table</td><td>200 frags, 20 scrap</td><td>WB1</td><td>~30s</td></tr>
<tr><td>Gunpowder ×10</td><td>30 charcoal, 20 sulfur</td><td>WB1</td><td>fast</td></tr>
<tr><td>Medical Syringe</td><td>15 cloth, 10 frags, 10 low grade fuel</td><td>WB1 + blueprint</td><td>~10s</td></tr>
<tr><td>Crossbow</td><td>200 wood, 75 frags, 2 rope</td><td>WB1 + blueprint</td><td>~30s</td></tr></table>
<div class="box">Typical progression: farm scrap → Workbench 1 → Research Table → research everything you loot. Blueprints are progress nobody can raid.</div>`},
{id:"survival2",t:"Clothing, Cold & Bleeding",h:`<h2>Clothing, Cold &amp; Bleeding</h2><p class="lead">The vitals that sneak up on fresh spawns.</p>
<h3>Temperature</h3><ul><li>Nights, rain, snow and swimming make you cold. Cold drains calories much faster; freezing damages you.</li><li>Fixes: clothing (burlap from cloth, hide from leather), standing near a campfire, staying dry, getting inside.</li></ul>
<h3>Clothing &amp; armour</h3><ul><li>Clothes give warmth; armour pieces reduce damage from arrows, bullets and melee.</li><li>Early: burlap set (cloth). Tier 1: road sign jacket/kilt and coffee can helmet. Later: metal facemask and chestplate.</li><li>Everything you wear drops when you die — wear what you can afford to lose.</li></ul>
<h3>Bleeding</h3><ul><li>Arrows, spears, animal bites and falls can cause bleeding, which drains health until treated.</li><li>Bandages (4 cloth) stop it; Medical Syringes heal and stop it. Always carry a few.</li></ul>`},
{id:"events",t:"Supply Drops & Enemy Fights",h:`<h2>Supply Drops &amp; Enemy Fights</h2><p class="lead">Server events and the chaos around them.</p>
<h3>Supply drops</h3><ul><li>A cargo plane crosses the map and drops a crate on a parachute (players can also call one with a Supply Signal). Purple smoke marks it after it lands.</li><li>Drops hold Tier 1–3 loot. Everyone who sees the plane heads for it, so drops are fights.</li><li>Tips: approach from cover, wait for others to fight, loot fast, leave by a different route.</li></ul>
<h3>Other players fight each other</h3><ul><li>In real Rust, groups and solos fight constantly over loot, monuments and drops.</li><li><b>Ratting:</b> letting others fight, then looting the dead or finishing the weakened winner. Risky, but it is how many solos gear up mid-wipe.</li><li>Gunfire is loud — every shot tells the server where the fight is.</li></ul>`},
{id:"rust2026",t:"Rust in 2026",h:`<h2>Rust in 2026</h2><p class="lead">What Facepunch added this year, month by month.</p>
<table><tr><th>Update</th><th>Highlights</th></tr>
<tr><td>Feb – Naval Update</td><td>Buildable boats, deep sea, tropical islands, ghost ships, improved AI.</td></tr>
<tr><td>Apr – Spring Clean</td><td>Armoured Ladder Hatch, Water Wheel, QoL and performance.</td></tr>
<tr><td>May – Upgrade Hard, Raid Harder</td><td>Workbench upgrades, the Mortar, improved Tin Can Alarm.</td></tr>
<tr><td>Jun – Built Different</td><td>New player models and animations, a new armour set, the M16A2.</td></tr>
<tr><td>Jul – Common Ground</td><td>Apartment Complex monument, rentable shops, new clan system and Clan Table.</td></tr>
<tr><td>Aug – Power Trip</td><td>Player-maintained monuments (Satellite Crash, restorable Power Plant), Dome pumping.</td></tr>
<tr><td>Sep – Breach and Clear</td><td>Monument blockers, breakable Attack Heli armour, HQM nodes, upkeep group scaling.</td></tr>
<tr><td>Oct – Livestock</td><td>Farmable cows and sheep (milk, wool), Ranch vendor, Biofuel Generator, Sandbag Barricade overhaul, Powergrid loot rooms.</td></tr>
<tr><td>Nov – Printed and Polished</td><td>Blueprint rework, the Uzi 9mm, big optimisation pass.</td></tr></table>
<div class="box">In the Training Island you can try a few of these: <b>cows</b> you can milk and <b>sheep</b> you harvest for wool, the <b>Sandbag Barricade</b> (cover that blocks bullets) and the <b>Tin Can Alarm</b> (rattles when something walks past your base). Their recipes here are approximate.</div>
<div class="box r">Facepunch reworked blueprints in November 2026. This guide describes the classic research table / tech tree system; check the current wiki for the newest rules.</div><p style="font-size:12px;color:var(--dim);margin-top:18px">Sources: <a href="https://rust.facepunch.com/news/" target="_blank" style="color:var(--yellow)">Facepunch news</a>, <a href="https://rustfront.com/news/2026-10-livestock-update" target="_blank" style="color:var(--yellow)">Rustfront patch notes</a></p>`},
{id:"combat",t:"Combat & Ballistics",h:`<h2>Combat &amp; Ballistics</h2><p class="lead">How damage actually works.</p>
<h3>The damage formula</h3><p><b>base damage × range falloff × hit-zone multiplier × (1 − armour protection)</b>. Most players have 100 HP.</p>
<h3>Hit zones</h3><table><tr><th>Zone</th><th>Multiplier</th></tr><tr><td>Head</td><td>×2 for bullets and arrows (crossbow ×1.5)</td></tr><tr><td>Chest / stomach</td><td>×1</td></tr><tr><td>Arms / thighs</td><td>~×0.7</td></tr><tr><td>Hands / feet</td><td>~×0.5</td></tr></table>
<h3>Bullets are physical</h3><ul><li>Bullets and arrows travel, take time to arrive, and drop over distance. Arrows drop a lot — aim high at range.</li><li><b>Damage falloff:</b> pistols lose roughly 40% of their damage by 30 m; rifles keep damage much further.</li><li><b>Aim cone:</b> standing still, crouching and aiming down sights tighten it; moving and jumping widen it. Long sprays widen it further — tap or burst at range.</li></ul>
<h3>Armour (projectile protection, approx.)</h3><table><tr><th>Slot</th><th>Examples</th></tr><tr><td>Head</td><td>Bone 10% · Wood 15% · Coffee Can 40% · Metal Facemask 50%</td></tr><tr><td>Chest</td><td>Hide 5% · Wood 15% · Road Sign 40% · Metal 50%</td></tr><tr><td>Legs</td><td>Hide 5% · Wood 15% · Road Sign Kilt 35%</td></tr></table>
<p>Example: an AK does ~50 per body shot; into a 40% road sign jacket that is ~30, so four shots.</p>
<h3>Bows</h3><ul><li>Hunting bow ~50 body / 100 head. Crossbow ~60 / 90. Compound bow hits harder when fully drawn.</li></ul>
<div class="box">In the Training Island these rules are live: hit zones, falloff on the revolver, bullet drop, a wider cone while moving, and per-slot armour on you and on armoured enemies.</div><p style="font-size:12px;color:var(--dim);margin-top:18px">Sources: <a href="https://rust-survival-a0i.pages.dev/23_Combat_Math" target="_blank" style="color:var(--yellow)">Combat Math (fan wiki)</a>, <a href="https://supercraft.host/wiki/rust/pvp_combat_guide/" target="_blank" style="color:var(--yellow)">PvP combat guide</a> — community figures, treat as approximate.</p>`},
{id:"movement",t:"Movement, Swimming & Falling",h:`<h2>Movement, Swimming &amp; Falling</h2><p class="lead">The physical side of staying alive.</p>
<h3>Crouching</h3><ul><li>Quieter than walking, a smaller target, and a tighter aim cone — but slower. Crouch to sneak past players and when shooting at range.</li></ul>
<h3>Swimming &amp; drowning</h3><ul><li>Swimming soaks you instantly — being wet makes cold much worse at night.</li><li>You can stay underwater for about <b>30 seconds</b> before you start drowning; scuba gear and submarines extend that.</li><li>Ocean water is salty: drinking it costs hydration and health.</li></ul>
<h3>Fall damage</h3><table><tr><th>Height</th><th>Damage</th></tr><tr><td>Under 5 m</td><td>None</td></tr><tr><td>5–10 m</td><td>~10 HP</td></tr><tr><td>10–15 m</td><td>20–30 HP</td></tr><tr><td>15 m+</td><td>50–100 HP, often fatal</td></tr></table><p>Landing in deep water cancels fall damage.</p>
<h3>Comfort</h3><ul><li>Builds near a campfire, furnace or rug, or inside an enclosed base. Faster health regen, slower hunger, faster radiation recovery. Blocked while starving or dehydrated.</li></ul>
<h3>Vitals thresholds</h3><ul><li>Health regenerates (~0.5 HP/s) while hunger and thirst are reasonably high.</li><li>Each bleeding source drains about 1 HP/s until bandaged.</li><li>Radiation starts hurting once it builds up; a hazmat suit roughly halves intake.</li></ul><p style="font-size:12px;color:var(--dim);margin-top:18px">Sources: <a href="https://rust-survival.pages.dev/15_Survival_Mechanics" target="_blank" style="color:var(--yellow)">Survival Mechanics (fan wiki)</a>, <a href="https://xgamingserver.com/blog/rust-radiation-temperature-survival-guide/" target="_blank" style="color:var(--yellow)">xgamingserver survival guide</a></p>`},
{id:'glossary',t:'Glossary',h:`<h2>Glossary</h2><p class="lead">Words you'll hear in game chat.</p><table>
<tr><td><b>Wipe</b></td><td>Server reset. "Mid-wipe" = the middle days.</td></tr>
<tr><td><b>Naked / fresh spawn</b></td><td>Player with nothing, usually on the coast.</td></tr>
<tr><td><b>Bag / bag up</b></td><td>Sleeping bag / place bags.</td></tr>
<tr><td><b>TC</b></td><td>Tool Cupboard.</td></tr><tr><td><b>Auth</b></td><td>Authorized on a TC or turret.</td></tr>
<tr><td><b>Upkeep / decay</b></td><td>Resources in TC that stop your base falling apart.</td></tr>
<tr><td><b>BP</b></td><td>Blueprint.</td></tr><tr><td><b>WB / T1/T2/T3</b></td><td>Workbench levels / tiers.</td></tr>
<tr><td><b>Frags / HQM / LGF</b></td><td>Metal fragments / high-quality metal / low grade fuel.</td></tr>
<tr><td><b>Airlock</b></td><td>Two doors in a row at an entrance.</td></tr><tr><td><b>Honeycomb</b></td><td>Extra wall layers around the core.</td></tr>
<tr><td><b>Soft side</b></td><td>The weaker face of a wall.</td></tr><tr><td><b>Online / offline raid</b></td><td>Raiding while owners are on / off.</td></tr>
<tr><td><b>Door camping</b></td><td>Waiting outside someone's door to kill them.</td></tr>
<tr><td><b>Roof camping</b></td><td>Building onto someone's roof to shoot them.</td></tr>
<tr><td><b>Roam / roamer</b></td><td>Group or player walking around looking for fights.</td></tr>
<tr><td><b>Zerg</b></td><td>A very large group.</td></tr><tr><td><b>Rat / ratting</b></td><td>Sneaking, looting leftovers or stealing quietly.</td></tr>
<tr><td><b>Sleeper</b></td><td>A logged-off player's body.</td></tr><tr><td><b>KOS</b></td><td>Kill on sight.</td></tr>
<tr><td><b>Scrap</b></td><td>Progression currency.</td></tr><tr><td><b>Road farm</b></td><td>Looting barrels along roads.</td></tr></table>`},
{id:"infected",t:"Infected Mode: Overview",h:"<h2>Infected Mode</h2><p class=\"lead\">A survival-horror layer on top of the Rust training island: the infected, parkour, weapon crafting and dangerous nights. None of this is in Rust itself — it is an extra for the training island.</p>\n<h3>What changes</h3><ul>\n<li><b>The infected</b> roam the island and pack the quarantined town of <b>Marrow Creek</b> in the east. They hear gunshots from far away and come running.</li>\n<li><b>Nights are deadly.</b> Night Stalkers come out after dusk: fast, relentless, and afraid of ultraviolet light.</li>\n<li><b>Parkour.</b> Climb ledges, vault, slide, kick and grapple across rooftops. Everything costs stamina.</li>\n<li><b>Melee crafting.</b> Weapons wear out, can be repaired a few times, and take elemental mods.</li>\n<li><b>Skills.</b> Three skill trees level up as you play: Agility, Power and Survivor.</li>\n</ul>\n<div class=\"box\">Your Rust base still works as a shelter: the infected can crowd around a closed, locked base and bang on it, but they cannot break in. Build one before your first night.</div>"},
{id:"infected-types",t:"The Infected",h:"<h2>The Infected</h2><p class=\"lead\">Know what is coming at you.</p>\n<table><tr><th>Type</th><th>Behaviour</th><th>How to deal with it</th></tr>\n<tr><td><b>Shambler</b></td><td>Slow and clumsy, but comes in groups and grabs you.</td><td>Fight one at a time. If grabbed, press E repeatedly or kick (F) to break free.</td></tr>\n<tr><td><b>Runner</b></td><td>Sprints and lunges.</td><td>Back up, kick it down, finish it with a heavy weapon.</td></tr>\n<tr><td><b>Burster</b></td><td>Bloated; explodes when close or killed and leaves a toxic cloud.</td><td>Kill it from range — bow, revolver or a thrown weapon.</td></tr>\n<tr><td><b>Brute</b></td><td>Huge, slow, hits extremely hard and knocks you flying.</td><td>Stay mobile, use fire or explosives, never trade blows up close.</td></tr>\n<tr><td><b>Night Stalker</b></td><td>Only at night. Very fast, pounces, shrieks to call others.</td><td>Break line of sight, run for light, use the UV flashlight or a UV flare.</td></tr></table>\n<h3>Fighting tips</h3><ul><li>Aim for the head — headshots do the most damage and a killing headshot ends it instantly.</li><li>Kick (F) to make space; a kick from the air hits twice as hard.</li><li>Don't get surrounded. Climb onto a car or a rooftop — most infected are bad climbers.</li><li>Gunfire is loud. Every shot pulls in more infected.</li><li>Search bodies (E) for crafting materials.</li></ul>"},
{id:"infected-night",t:"Night & UV Light",h:"<h2>Night &amp; UV Light</h2><p class=\"lead\">The sun is your friend.</p>\n<ul><li>At dusk a warning appears. After dark, Night Stalkers start hunting each player.</li>\n<li>While they chase you, the <b>chase meter</b> rises. Break line of sight for a few seconds or stand in UV light to lose them.</li>\n<li><b>UV flashlight (V):</b> stuns and repels Night Stalkers in its cone. It drains a battery that recharges while off.</li>\n<li><b>UV flare:</b> a thrown purple light that keeps stalkers away for a while.</li>\n<li><b>UV lamp:</b> a deployable that makes a safe zone around your base.</li>\n<li>At dawn the stalkers flee the sunlight.</li></ul>"},
{id:"infected-parkour",t:"Parkour & Stamina",h:"<h2>Parkour &amp; Stamina</h2><p class=\"lead\">Rooftops are the safest road.</p>\n<table><tr><th>Move</th><th>How</th></tr>\n<tr><td>Climb</td><td>Face a ledge up to about 3 m above your feet and press Space (also works mid-jump). Chain climbs to reach roofs.</td></tr>\n<tr><td>Vault</td><td>Sprint into a low obstacle to hop over it.</td></tr>\n<tr><td>Slide</td><td>Sprint, then press C.</td></tr>\n<tr><td>Kick</td><td>F — knocks enemies back. From the air it is a dropkick.</td></tr>\n<tr><td>Safe landing</td><td>Hold C as you land from a big drop to roll and avoid fall damage.</td></tr>\n<tr><td>Grappling hook</td><td>Unlock it in the Agility tree, craft it, then aim at a surface and click.</td></tr></table>\n<p>Sprinting, jumping, climbing, kicking and swinging weapons all cost <b>stamina</b> (yellow bar). Run it dry and you are exhausted until it recovers.</p>"},
{id:"infected-crafting",t:"Weapons, Mods & Throwables",h:"<h2>Weapons, Mods &amp; Throwables</h2><p class=\"lead\">Scavenge, craft, upgrade.</p>\n<h3>Crafting materials</h3><p>Duct tape, nails, alcohol, batteries and chemicals come from town containers (cabinets, car trunks, toolboxes), infected bodies, barrels and crates — together with Rust materials like metal fragments, pipes, blades and cloth.</p>\n<h3>Melee weapons</h3><ul><li>Lead pipe, machete, fire axe, baseball bat, katana and sledgehammer, each with its own speed, reach, damage and stamina cost.</li><li>Weapons lose durability with every hit. A broken weapon still works, but weakly. Each weapon can be repaired a few times from the inventory.</li></ul>\n<h3>Mods (need a blueprint)</h3><table><tr><th>Mod</th><th>Effect</th></tr><tr><td>Nail Wrap</td><td>Bleeding</td></tr><tr><td>Shock Coil</td><td>Stuns and chains to nearby enemies</td></tr><tr><td>Fire Kit</td><td>Sets enemies on fire</td></tr><tr><td>Toxin Vial</td><td>Poison that slows</td></tr></table>\n<p>Find mod blueprints in town and use them to learn the recipe. Combine a weapon and a mod kit in the crafting menu.</p>\n<h3>Throwables</h3><ul><li><b>Molotov</b> — a pool of fire.</li><li><b>Firecracker</b> — a noisy lure that pulls the infected away.</li><li><b>UV flare</b> — keeps Night Stalkers back.</li><li><b>Pipe bomb</b> — a big explosion on a short fuse.</li></ul><p>Hold the mouse button to see the throwing arc, release to throw. Red gas canisters in town explode when shot.</p>"},
{id:"infected-skills",t:"Skills & Sense Pulse",h:"<h2>Skills &amp; Sense Pulse</h2><p class=\"lead\">Get better by doing.</p>\n<ul><li><b>Agility</b> grows from climbing, vaulting, sliding and sprinting.</li><li><b>Power</b> grows from fighting and kills.</li><li><b>Survivor</b> grows from crafting, looting and gathering.</li><li>Experience is doubled at night.</li></ul>\n<p>Each level gives a skill point for that tree. Press <b>K</b> to spend points on perks such as faster climbing, the grappling hook, stronger kicks, heavy attacks, better loot and stronger healing.</p>\n<h3>Sense pulse (Q)</h3><p>Sends out a pulse that briefly marks loot (yellow) and threats (red) around you, even through walls. It has a cooldown.</p>"},
{id:"extras-world",t:"Vehicles, Dog & Fishing",h:"<h2>Vehicles, Dog &amp; Fishing</h2><p class=\"lead\">Extras for the training island. None of these are in Rust itself.</p>\n<h3>Vehicles</h3><ul><li>Seven kinds of vehicle are parked around town, the fuel stop, the depot, farms, cabins and roads: the tough <b>Old Pickup</b>, the fast <b>Dirt Bike</b>, the <b>Street Racer</b> (fastest, with a nitro boost on <b>Shift</b>, but fragile), the economical <b>Family Sedan</b>, the slow but armoured <b>Box Van</b>, the bouncy off-road <b>Dune Buggy</b> and the small, nimble <b>Quad ATV</b>. On the buggy, ATV and bike you sit in the open, so infected can reach you.</li><li>Walk up and press <b>E</b> to get in and <b>E</b> again to get out.</li><li><b>W/S</b> throttle and brake, <b>A/D</b> steer, <b>Space</b> handbrake (on the bike, tap it to hop), <b>Shift</b> boost on the bike and the Street Racer, <b>R</b> horn, <b>T</b> camera. They burn Low Grade Fuel: press E at the fuel cap to refuel, and repair the engine with Metal Fragments or Duct Tape.</li><li>Engines are loud, so the infected will hear you coming.</li></ul>\n<h3>Dog companion</h3><ul><li>Stray dogs wander near farms, cabins and fuel stops. Crouch so a dog dares to come closer, then feed it two meals (Cooked Meat or a Bone Biscuit) with <b>E</b>.</li><li>Your dog follows you, growls at threats, bites whatever attacks you, and sometimes sniffs out loot. Press <b>Z</b> to make it stay or follow.</li></ul>\n<h3>Fishing</h3><ul><li>Craft a Fishing Rod and some bait. Hold the mouse button to charge a cast, then release.</li><li>Click when the bobber is pulled under, then hold to reel. Keep the line tension in the green, or the line snaps.</li><li>Cook raw fish at a campfire.</li></ul>"},
{id:"extras-events",t:"World Events",h:"<h2>World Events</h2><ul>\n<li><b>Red Moon:</b> some nights the moon turns red and waves of infected hunt everyone. Survive until dawn.</li>\n<li><b>Thunderstorms:</b> lightning can strike and set trees on fire. Stay off open hills.</li>\n<li><b>Helicopter crash:</b> a crash site is marked on the map (M). Its supply crates open after the wreck stops burning, and every player and infected nearby will want them.</li></ul>"},
{id:"extras-defense",t:"Base Defense & Haven Camp",h:"<h2>Base Defense &amp; Haven Camp</h2>\n<h3>Defenses</h3><table><tr><th>Trap</th><th>What it does</th></tr><tr><td>Spike Barricade</td><td>Hurts whatever walks into it</td></tr><tr><td>Shock Fence</td><td>Stuns, needs power</td></tr><tr><td>Flame Trap</td><td>Burns, needs fuel</td></tr><tr><td>Auto Turret</td><td>Shoots hostiles automatically</td></tr></table>\n<p>Craft them in the <b>Defenses</b> section, place them like other deployables, and press <b>E</b> on one to refuel, recharge or repair it.</p>\n<h3>Haven Camp</h3><p>A fortified survivor camp that is a safe zone: hostiles lose interest, and guards shoot anything that follows you in. You cannot build inside. It has a trader, a recycler, a workbench, water and a fire.</p>"},
{id:"extras-traversal",t:"Glider, Ziplines & Photo Mode",h:"<h2>Glider, Ziplines &amp; Photo Mode</h2><ul>\n<li><b>Patchwork Glider:</b> craft it, then press <b>Space</b> while falling to open it. Rising warm air (thermals) lifts you on sunny days.</li>\n<li><b>Ziplines</b> run between rooftops, towers and hills. Press <b>E</b> at the high post to ride one. Rope ladders lead up to the launch points.</li>\n<li><b>Photo mode (P):</b> a free camera with filters, a grid and time-of-day preview. You can save a PNG.</li></ul>"},
];
