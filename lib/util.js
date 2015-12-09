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

  Util.rSort = function (units) {
    for(var i = 1; i <= 100; i *= 10) {
      var buckets = new Array(10);
      for(var j = 0; j < 10; j += 1) {
        buckets[j] = [];
      }
      for(var k = 0; k < units.length; k += 1) {
        var y = units[k].position[1];
        var digit = Math.floor((y % (i * 10)) / i);
        buckets[digit].push(units[k]);
      }
      units = [];
      for(var l = 0; l < 10; l += 1) {
        units.push.apply(units, buckets[l]);
      }
    }
    return units;
  };

  // Vector math helpers
  Util.add = function (pos, delta) {
    return [pos[0] + delta[0], pos[1] + delta[1]];
  };

  Util.diff = function (start, end) {
    return [end[0] - start[0], end[1] - start[1]];
  };

  Util.eq = function (a, b) {
    return (a[0] === b[0] && a[1] === b[1]);
  };

  Util.manhattanOverlap = function (obj1, obj2) {
    var diff = Util.diff(obj1.position, obj2.position);
    return Math.abs(diff[0]) + Math.abs(diff[1]) < 32;
  };

  Util.segmentOverlap = function (obj1, obj2) {
    // NOTE: not yet implemented. Use for attack overlapping
    var diff = Util.diff(obj1.position, obj2.position);
    var rdist = Math.sqrt(diff[0] * diff[0] + diff[1] * diff[1]);
    return rdist < 32;
  };
}(this));
