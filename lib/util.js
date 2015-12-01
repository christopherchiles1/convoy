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

  // Util.step = function (position, direction, speed) {
  //   return [Math.round(position[0] + speed * direction[0]),
  //           Math.round(position[1] + speed * direction[1])];
  // };
}(this));
