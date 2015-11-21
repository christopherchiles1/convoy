(function(root) {
  'use strict';

  if (typeof root.CJS === 'undefined') {
    root.CJS = {};
  }

  var Game = CJS.Game = function () {
    this.running = false;
    this.allObjects = [];
  };

  Game.prototype.start = function () {
    // NOTE: Turn all objects into an AVL tree for better performance later
    this.allObjects = [];
    var leader = new CJS.Unit([CJS.Constants.VIEW_WIDTH / 2, CJS.Constants.VIEW_HEIGHT / 2]);
    this.allObjects.push(leader);
    this.player = new CJS.Convoy(leader);
    this.toggle();
  };

  Game.prototype.tick = function () {

  };

  Game.prototype.draw = function (ctx) {
    ctx.fillText(this.running, 20, 40);

    this.sortObjects();
    this.allObjects.forEach(function (obj) {
      obj.draw(ctx);
    });
  };

  Game.prototype.sortObjects = function () {
    this.allObjects.sort(function (a, b) {
      if (a.position[0] < b.position[0]) {
        return -1;
      } else {
        return 1;
      }
    });
  };

  Game.prototype.turnPlayer = function (dir) {
    // this.player.turn(dir);
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
