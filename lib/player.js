(function(root) {
  'use strict';

  if (typeof root.CJS === "undefined") {
    root.CJS = {};
  }

  var Player = CJS.Player = function (game, leader) {
    CJS.Convoy.call(this, game);
    this.turnQueue = [];
    this.append(leader);
  };

  CJS.Util.inherits(CJS.Convoy, Player);

  Player.prototype.queueTurn = function (dir) {
    this.turnQueue.push(dir);
  };

  Player.prototype.tryTurn = function () {
    if (this.turnQueue[0] && !this.head.turnQueue[0]) {
      var dir = this.turnQueue.shift();
      if (!CJS.Util.eq(CJS.Util.add(this.head.direction, dir), [0, 0])) {
        CJS.Convoy.prototype.turn.call(this, dir);
      } else {
        this.tryTurn();
      }
    }
  };
}(this));
