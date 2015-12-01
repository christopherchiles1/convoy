(function(root) {
  'use strict';

  if (typeof root.CJS === "undefined") {
    root.CJS = {};
  }

  var Player = CJS.Player = function (game, leader) {
    CJS.Convoy.call(this, game);
    this.append(leader);
  };

  CJS.Util.inherits(CJS.Convoy, Player);
}(this));
