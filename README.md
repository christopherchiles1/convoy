# Convoy

## Implementation Details
  Convoy is an RPG take on the classic game of Snake. The player controls a convoy of warriors, archers, and mages in an effort to defeat enemy forces surrounding the capitol.

### View
  * ::new - load Images, bind keys, create menu and game
  * .menu
  * .game
  * #bindKeys - binds keys to handleKey function
  * #handleKey(event, handler) - calls handleKey(handler.shortcut) on either game or menu
  * #draw - calls `requestAnimationFrame(this.draw)` first

### Images (singleton)
  * ::load - loads all images
  * .menubg
  * .gamebg
  * .alphabet
  * .characters (warrior, archer, and mage)
  * .attacks (sword, arrow, and mage animations)
  * .items (gems and powerups)

### Menu
  * ::new - sets full and options, selected => [0, 0]
  * .full - boolean (full screen or game overlay menu)
  * .options - nested array of MenuOptions
  * .selected - tuple
  * #navigate(dir)
  * #enter - runs the selected MenuOption's callback
  * #draw - draws background (if full), then options

### MenuOption
  * ::new - sets text, position, callback from input
  * .text
  * .position
  * .callback

### Game
  * ::new
  * .running - boolean
  * .units - array of units (radix sort by y-value before render)
  * .items - list of items (using a list for fast insert and delete)
  * .attacks - keys: player, enemy => list of attacks
  * .level - a level object
  * .player - a Convoy object with one hero
  * .enemies - array of current enemy Convoys
  * #toggle - toggle tick on and off (pause game)
  * #tick - run all tasks for this tick (listed below)
  * #move - run move on player, enemies, then attacks
  * #collideLeader - run collision detect on player leader (end game)
  * #attack - run attack action for player if attack-tick, then enemies if attack-tick
  * #damage - run collision detect on attacks and damage associated units
  * #over - check if player convoy is empty (end game)
  * #collect - run collect action for player (player collision w/ items)
  * #drawHud - draws HUD information
  * #draw - draws level, items, units, attacks, and hud

### Sprite
  * ::new
  * .image
  * .width
  * .height
  * .positions - array of tuples
  * #draw(pos) - draws the frame at positions[pos]. draws positions[0] if no input

### Convoy < List
  * ::new
  * .leader - returns the head of the List
  * #turn - tells leader to turn (note: may need to use a queue to avoid unresponsive keypresses)

### PlayerConvoy < Convoy
  * ::new - calls super and then appends Unit from input

### EnemyConvoy < Convoy
  * ::new - calls super and the appends all Units from input array
  * #turn - check possible collision with player or wall. If collision, try turning and recheck. If all directions are blocked, kill the convoy. Once a turn is chosen, call super with that turn

### Level (not rechecked yet)
  * .enemies - array (queue) of enemy convoys
  * .spawnRate - in milliseconds
  * .difficulty - modifier for enemies
  * .bg - nested array of gamebg Sprites

### Unit < ListNode (not rechecked yet)
  * .frame - used to time attacks and animation (increment on move, mod by ticks/sec)
  * .type - Warrior, Archer, or Mage (defines animation and attack type)
  * .health
  * .range
  * .arc
  * .attackRate
  * .position - tuple
  * .direction - tuple
  * .turn - nested tuple with [pos, dir] of the turn
  * #move - runs updates position based on direction and turn. Passes turn on to next unit if executed
  * #collect - look for items in range and collect them (Note: PLAYER ONLY)
  * #attack - looks for enemies in range and creates an Attack
  * #takeDamage - lower health and remove if dead
  * #dropItem - create item at position with some chance

### Attack (not rechecked yet)
  * .frame - used to time animation (increment on move)
  * .duration - remove attack when duration hits 0 (decrement on move)
  * .position
  * .direction
  * .strength
  * .range
  * .arc
  * #move - update position with direction

### Item (gems and powerups) (not rechecked yet)
  * .position
  * .frame - used to time blinking before disappearing (increment on move)
  * .duration - remove item when duration hits 0 (decrement on move)
  * .callback - runs when item is collected

### Util (not rechecked yet)
  * ::inherits(parent, child) - for object oriented programming
  * ::overlap(obj1, obj2) - returns true/false
  * ::step(position, delta) - returns new position tuple

---

### List (not rechecked yet)
  * .head
  * .tail
  * #append(node)
  * #remove(node)

### ListNode (not rechecked yet)
  * .next
  * .prev
  * .val
