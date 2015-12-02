(function(root) {
  'use strict';

  if (typeof root.CJS === "undefined") {
    root.CJS = {};
  }

  var Unit = CJS.Unit = function (position, direction) {
    this.frame = Math.floor(Math.random() * 20);
    this.sprite = CJS.Sprite.WARRIOR;
    // this.health = health;
    // this.range = range;
    // this.arc = arc;
    // this.attackRate = rate;
    this.position = position;
    this.direction = direction;
  };

  CJS.Util.inherits(CJS.ListNode, Unit);

  Unit.prototype.move = function () {
    var dist = 6; // distance to travel
    var dir = this.direction.map(function (i) { return i * dist; });
    if (this.prev) {
      var axis = 1 - this.direction.indexOf(0);
      var delta = CJS.Util.diff(this.position, this.prev.position);
      var remaining = Math.abs(delta[axis]) - dist;
      if (remaining <= 0) {
        dir[axis] = delta[axis];
        dir[1 - axis] = -Math.sign(delta[1-axis]) * remaining;

        this.direction[axis] = 0;
        this.direction[1 - axis] = Math.sign(delta[1 - axis]);
      }
    }

    this.position = CJS.Util.add(this.position, dir);
    this.frame = (this.frame + 1) % 20;
  };

  Unit.prototype.attack = function () {

  };

  Unit.prototype.damage = function () {

    //remove from CJS.units if dead
  };

  Unit.prototype.draw = function () {
    var idx = Math.floor(this.frame * 4 / 20);
    if (CJS.Util.eq(this.direction, CJS.Constants.DIRS.left)) {
      idx += 4;
    } else if (CJS.Util.eq(this.direction, CJS.Constants.DIRS.right)) {
      idx += 8;
    } else if (CJS.Util.eq(this.direction, CJS.Constants.DIRS.up)) {
      idx += 12;
    }
    this.sprite.draw(this.position[0], this.position[1], idx);
  };

  Unit.WARRIOR = new Unit(
    [320, 240], CJS.Constants.DIRS.right
  );
}(this));

// (function(root) {
//   'use strict';
//
//   if (typeof root.CJS === "undefined") {
//     root.CJS = {};
//   }
//
//   var Unit = CJS.Unit = function (position, direction) {
//     this.position = position;
//     this.direction = direction;
//     this.speed = 1;
//   };
//
//   CJS.Util.inherits(CJS.ListNode, Unit);
//
//   Unit.prototype.draw = function (ctx) {
//     ctx.fillStyle = 'blue';
//     ctx.beginPath();
//     ctx.arc(
//       this.position[0],
//       this.position[1],
//       CJS.Constants.UNIT_RADIUS,
//       0,
//       2 * Math.PI,
//       false
//     );
//     ctx.closePath();
//     ctx.strokeStyle = "black";
//     ctx.fill();
//     ctx.stroke();
//   };
//
//   Unit.prototype.move = function () {
//     this.position = CJS.Util.add(this.position, this.direction, this.speed)
//   };
// }(this));
