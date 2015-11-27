# canvas

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
  * # enter

### MenuOption
  * .text
  * .position
  * .callback

Note: Store canvas context globally (CJS.ctx)
