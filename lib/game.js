(function(root) {
  'use strict';

  if (typeof root.CJS === 'undefined') {
    root.CJS = {};
  }

  var Game = CJS.Game = function () {
    this.running = false;
  };

  Game.prototype.start = function () {
    // NOTE: Turn all objects into an AVL tree for better performance later
    this.allObjects = [];

    // this.allObjects; NOTE: allObjects will be a heap or BST for render order
    // this.player = new CJS.Convoy();
    this.toggle();
  };

  Game.prototype.tick = function () {

  };

  Game.prototype.draw = function (ctx) {
    ctx.fillText(20, 20, "GAME");
  };

  Game.prototype.turnPlayer = function (dir) {
    this.player.turn(dir);
  };

  Game.prototype.toggle = function () {
    if (this.running) {
      this.tickID =
        clearInterval(this.tickID);
    } else {
      this.tickID =
        setInterval(this.tick.bind(this), CJS.Constants.GAME_TICK);
    }
    this.running = !this.running
  };
}(this));
