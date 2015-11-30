(function(root) {
  'use strict';

  if (typeof root.CJS === "undefined") {
    root.CJS = {};
  }

  var Images = CJS.Images = {
    load: function () {
      Images.alphabet.src("/images/alphabet.png");
      Images.borders.src("/images/borders.png");
      Images.tileset.src("/images/tileset.png");
      Images.warrior.src("/images/warrior.png");
      Images.archer.src("/images/archer.png");
      Images.mage.src("/images/mage.png");
      Images.demon.src("/images/demon.png");
      Images.sorcerer.src("/images/sorcerer.png");
      Images.skeleton.src("/images/skeleton.png");
    },
    alphabet: new Image(),
    borders: new Image(),
    tileset: new Image(),
    warrior: new Image(),
    archer: new Image(),
    mage: new Image(),
    demon: new Image(),
    sorcerer: new Image(),
    skeleton: new Image()
  };
}(this));
