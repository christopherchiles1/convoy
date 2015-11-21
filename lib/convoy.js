(function(root) {
  'use strict';

  if (typeof root.CJS === "undefined") {
    root.CJS = {};
  }

  var Convoy = CJS.Convoy = function (leader) {
    this.append(leader);
  };

  CJS.Util.inherits(CJS.List, Convoy);
}(this));
