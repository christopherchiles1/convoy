(function(root) {
  'use strict';

  if (typeof root.CJS === 'undefined') {
    root.CJS = {};
  }

  var Sprite = CJS.Sprite = function (image, width, height, drawWidth, drawHeight, positions) {
    this.image = image;
    this.width = width;
    this.height = height;
    this.positions = positions;
    this.drawWidth = drawWidth;
    this.drawHeight = drawHeight;
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
      this.drawWidth,
      this.drawHeight
    );
  };

  // Sprite constants
  Sprite.UNIT_POSITIONS = [
    [0, 0], [32, 0], [64, 0], [96, 0],
    [0, 48], [32, 48], [64, 48], [96, 48],
    [0, 96], [32, 96], [64, 96], [96, 96],
    [0, 144], [32, 144], [64, 144], [96, 144]
  ];

  Sprite.WARRIOR = new Sprite(
    CJS.Images.warrior,
    32, 48, 32, 48,
    Sprite.UNIT_POSITIONS
  );


  Sprite.MENU_TILE = new Sprite(
    CJS.Images.tileset,
    32, 32, 64, 64,
    [
      [256, 1216], [272, 1216], [288, 1216],
      [256, 1232], [272, 1232], [288, 1232],
      [256, 1248], [272, 1248], [288, 1248]
    ]
  );

  // Sprite.OPTION_TILE = new Sprite(
  //   CJS.Images.tileset,
  //   32, 32, 20, 20,
  //   [
  //     [256, 1120], [272, 1120], [288, 1120],
  //     [256, 1136], [272, 1136], [288, 1136],
  //     [256, 1152], [272, 1152], [288, 1152]
  //   ]
  // );

  Sprite.OPTION_TILE = new Sprite(
    CJS.Images.tileset,
    16, 16, 20, 20,
    [
      [64, 448], [72, 448], [80, 448],
      [64, 456], [72, 456], [80, 456],
      [64, 464], [72, 464], [80, 464]
    ]
  );

  Sprite.BROWN_TILE = new Sprite(
    CJS.Images.tileset,
    32, 32, 64, 64,
    [
      [640, 192], [656, 192], [672, 192],
      [640, 208], [656, 208], [672, 208],
      [640, 224], [656, 224], [672, 224]
    ]
  );

}(this));
