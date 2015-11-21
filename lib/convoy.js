(function(root) {
  'use strict';

  if (typeof root.CJS === "undefined") {
    root.CJS = {};
  }

  var Convoy = CJS.Convoy = function (leader) {
    this.append(leader);
  };

  CJS.Util.inherits(CJS.List, Convoy);

  Convoy.prototype.turn = function (direction) {
    // TODO: Tell the leader to turn and then pass on the turn down the list
  };

}(this));
