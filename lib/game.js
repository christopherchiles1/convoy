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
    // NOTE: Turn allObjects into an AVL tree for better performance later
    this.allObjects = [];
    var leader = new CJS.Unit(
      [CJS.Constants.VIEW_WIDTH / 2, CJS.Constants.VIEW_HEIGHT / 2],
      [0, 1]
    );
    this.allObjects.push(leader);
    this.player = new CJS.Convoy(leader);
    this.toggle();
  };

  Game.prototype.tick = function () {
    // move all objects that are moveable
    this.moveObjects();
    // check collisions on all objects that are collideable
    // this.checkCollisions();
    // run actions for all objects that are actionable
  };

  Game.prototype.draw = function (ctx) {
    this.sortObjects();
    this.allObjects.forEach(function (obj) {
      obj.draw(ctx);
    });
  };

  Game.prototype.sortObjects = function () {
    this.allObjects.sort(function (a, b) {
      if (a.position[1] < b.position[1]) {
        return -1;
      } else {
        return 1;
      }
    });
  };

  Game.prototype.moveObjects = function () {
    this.allObjects.forEach(function (obj) {
      obj.move();
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
    this.running = !this.running;
  };
}(this));
