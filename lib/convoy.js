(function(root) {
  'use strict';

  if (typeof root.CJS === "undefined") {
    root.CJS = {};
  }

  var Convoy = CJS.Convoy = function (game) {
    this.game = game;
  };

  CJS.Util.inherits(CJS.List, Convoy);

  Convoy.prototype.append = function (unit) {
    CJS.List.prototype.append.call(this, unit);
    this.game.units.push(unit);
  };

  Convoy.prototype.remove = function (unit) {
    CJS.List.prototype.remove.call(this, unit);
    this.game.units.splice(this.game.units.indexOf(unit), 1);
  };

  Convoy.prototype.turn = function (dir) {
    if (CJS.Util.add(this.head.direction, dir) != [0, 0]) {
      this.head.direction = dir;
    }
  };
}(this));
