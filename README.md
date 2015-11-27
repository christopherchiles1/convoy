# Convoy

## Implementation Details
  Convoy is an RPG take on the classic game of Snake. The player controls a convoy of warriors, archers, and mages in an effort to defeat enemy forces surrounding the capitol.

### View
  * ::init - create Images, menu, game
  * .state - game or menu
  * #start - starts render tick (or requestAnimationFrame)
  * #draw()

### Images (singleton)
  * .menubg
  * .gamebg
  * .alphabet
  * .characters (warrior, archer, and mage)
  * .attacks (sword, arrow, and mage animations)
  * .items (gems and powerups)
  * #loadAll - loads all images

### Sprite
  * .image
  * .width
  * .height
  * .positions - array of tuples
  * #draw(pos)

### Menu
  * .options - nested array of MenuOptions
  * .selected - tuple
  * # navigate(dir)
  * # enter - runs the selected MenuOption's callback

### MenuOption
  * .text
  * .position
  * .callback

### Level
  * .enemies - array (queue) of enemy convoys
  * .spawnRate - in milliseconds
  * .difficulty - modifier for enemies
  * .bg - nested array of gamebg Sprites

### Game
  * .level - a level object
  * .player - a Convoy object with one hero
  * .enemies - array of current enemies
  * .items - array of items
  * .attacks - array of attacks
  * #draw - draws level, items, units, then attacks
  * #toggle - toggle tick on and off (pause game)
  * #tick - run all tasks for this tick (listed below)
  * #move - run move on all units and attacks
  * #collide - run collision detect on player leader
  * #collect - run collect action for player
  * #attack - run attack action for player if attack-tick, then enemies if attack-tick

### Convoy < List
  * .leader - returns the head of the List
  * #turn - tells leader to turn

### Unit < ListNode
  * .type - Warrior, Archer, or Mage
  * .position - tuple
  * .direction - tuple
  * .turn - nested tuple with [pos, dir] of the turn
  * #move - runs updates position based on direction and turn. Passes turn on to next unit if executed
  * #collect - look for items in range and collect them (Note: PLAYER ONLY)
  * #attack - looks for enemies in range and creates an Attack

---

### List
  * .head
  * .tail
  * #append(node)
  * #remove(node)

### ListNode
  * .next
  * .prev
  * .val

Note: Store canvas context globally (CJS.ctx)
