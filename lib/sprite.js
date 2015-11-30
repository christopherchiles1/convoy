(function(root) {
  'use strict';

  if (typeof root.CJS === 'undefined') {
    root.CJS = {};
  }

  var Sprite = CJS.Sprite = function (sprite) {
    this.image = sprite.image;
    this.width = sprite.width;
    this.height = sprite.height;
    this.positions = sprite.positions;
  };

  Sprite.prototype.draw = function (x, y, frame) {
    var pos = this.positions[0];
    if (frame) { pos = this.positions[frame]; }

    CJS.ctx.drawImage(
      this.image,
      pos[0],
      pos[1],
      this.width,
      this.height,
      x, y,
      this.width,
      this.height
    );
  };

  Sprite.WARRIOR = {
    image: CJS.Images.warrior,
    width: 32,
    height: 48,
    positions: [
      [0, 0],
      [32, 0],
      [64, 0],
      [96, 0],
      [0, 48],
      [32, 48],
      [64, 48],
      [96, 48],
      [0, 96],
      [32, 96],
      [64, 96],
      [96, 96],
      [0, 144],
      [32, 144],
      [64, 144],
      [96, 144]
    ]
  };
}(this));
