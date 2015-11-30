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

  Sprite.prototype.draw = function (x, y, frame, scale) {
    var pos = this.positions[0];
    if (frame) { pos = this.positions[frame]; }
    scale = scale || 1;

    CJS.ctx.drawImage(
      this.image,
      pos[0],
      pos[1],
      this.width,
      this.height,
      x, y,
      this.width * scale,
      this.height * scale
    );
  };

  Sprite.WARRIOR = {
    image: CJS.Images.warrior,
    width: 32,
    height: 48,
    positions: [
      [0, 0], [32, 0], [64, 0], [96, 0],
      [0, 48], [32, 48], [64, 48], [96, 48],
      [0, 96], [32, 96], [64, 96], [96, 96],
      [0, 144], [32, 144], [64, 144], [96, 144]
    ]
  };

  Sprite.BROWN_TILE = {
    image: CJS.Images.tileset,
    width: 32,
    height: 32,
    positions: [
      [640, 192],
      [656, 192],
      [672, 192],
      [640, 208],
      [656, 208],
      [672, 208],
      [640, 224],
      [656, 224],
      [672, 224]
    ]
  };
}(this));