(function(root) {
  'use strict';

  if (typeof root.CJS === "undefined") {
    root.CJS = {};
  }

  var Util = CJS.Util = {};

  Util.inherits = function (parent, child) {
    function Surrogate () {}
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate();
    child.prototype.constructor = child;
  };

  Util.drawString = function (string) {
    for(var i = 0; i < string.length; i += 1) {
      CJS.Sprite.draw(); // TODO: get alphabet sprites together
    }
  };

  Util.add = function (pos, delta) {
    return [pos[0] + delta[0], pos[1] + delta[1]];
  };

  Util.diff = function (start, end) {
    return [end[0] - start[0], end[1] - start[1]];
  };
}(this));
