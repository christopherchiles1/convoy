(function(root) {
  'use strict';

  if (typeof root.CJS === 'undefined') {
    root.CJS = {};
  }

  var Game = CJS.Game = function () {
    this.startGame();
  };

  Game.prototype.startGame = function () {
    // TODO: Reset everything and then start all game mechanics

    // this.allObjects; NOTE: allObjects will be a heap or BST for render order
    // this.player = new CJS.Convoy();
    this.toggle(); // starts game tick
  };

  Game.prototype.tick = function () {

  };

  Game.prototype.draw = function (ctx) {
    ctx.fillText(20, 20, "GAME");
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
