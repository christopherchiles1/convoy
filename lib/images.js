(function(root) {
  'use strict';

  if (typeof root.CJS === "undefined") {
    root.CJS = {};
  }

  var Images = CJS.Images = {
    load: function () {
      CJS.Images.borders.src = "images/borders.png";
      CJS.Images.tileset.src = "images/tileset.png";
      CJS.Images.warrior.src = "images/warrior.png";
      CJS.Images.archer.src = "images/archer.png";
      CJS.Images.mage.src = "images/mage.png";
      CJS.Images.demon.src = "images/demon.png";
      CJS.Images.sorcerer.src = "images/sorcerer.png";
      CJS.Images.skeleton.src = "images/skeleton.png";
    },
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
