(function(root) {
  'use strict';

  if (typeof root.CJS === "undefined") {
    root.CJS = {};
  }

  var MenuOption = CJS.MenuOption = function (option) {
    this.images = option.images;
    this.position = option.position;
    this.callback = option.callback;
  };

  MenuOption.prototype.draw = function () {
    this.images.forEach(function (img) {
      img.draw();
    });
  };

  MenuOption.PLAY = {
    images: {
      draw: function () {
        CJS.Util.drawString("Start Game");
      }
    },
    position: [125, 125],
    callback: function (game) {
      game.toggle();
    }
  };

  MenuOption.HOW = {
    images: {
      draw: function () {
        CJS.Util.drawString("How to Play");
      }
    },
    position: [125, 175],
    callback: function (view) {
      view.menu = new CJS.Menu(CJS.Menu.HOW);
    }
  };
}(this));
