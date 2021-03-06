(function(root) {
  'use strict';

  if (typeof root.CJS === "undefined") {
    root.CJS = {};
  }

  var View = CJS.View = function () {
    CJS.Images.load();
    this.bindKeys();
    this.menu = CJS.Menu.START;
    this.game = new CJS.Game();
    setInterval(this.tick.bind(this), CJS.Game.TICK);
  };

  View.prototype.draw = function () {
    requestAnimationFrame(this.draw.bind(this));
    CJS.ctx.clearRect(0, 0, View.WIDTH, View.HEIGHT);
    if (this.game.running) {
      this.game.draw();
    } else {
      this.menu.draw();
    }
  };

  View.prototype.tick = function () {
    this.menu.tick();
  };

  View.prototype.bindKeys = function () {
    var keys = "w, a, s, d, up, left, down, right, space, enter";
    key(keys, this.handleKey.bind(this));
  };

  View.prototype.handleKey = function (event, handler) {
    if (this.game.running) {
      this.game.handleKey(handler.shortcut);
    } else {
      this.menu.handleKey(handler.shortcut);
    }
    return false;
  };

  View.prototype.toggleGame = function () {
    this.game.toggle();
  };

  View.WIDTH = 640;
  View.HEIGHT = 480;
}(this));
