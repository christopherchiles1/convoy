(function(root) {
  'use strict';

  if (typeof root.CJS === "undefined") {
    root.CJS = {};
  }

  var Unit = CJS.Unit = function (position, direction) {
    this.frame = 0;
    this.sprite = CJS.Sprite.WARRIOR;
    // this.health = health;
    // this.range = range;
    // this.arc = arc;
    // this.attackRate = rate;
    this.position = position;
    this.direction = direction;
    this.turnQueue = [];
  };

  CJS.Util.inherits(CJS.ListNode, Unit);

  Unit.prototype.queueTurn = function (turn) {
    this.turnQueue.push(turn);
  };

  Unit.prototype.move = function () {
    var dist = 12;
    var dir = this.direction.map(function (i) { return i * dist; });
    var turn = this.turnQueue[0];
    if (turn) {
      var delta = CJS.Util.diff(this.position, turn.pos);
      if (delta[0] && delta[1]) {
        console.log("Turn is not valid");
        console.log(delta);
      }
      var length = Math.abs(delta[0] + delta[1]);
      var remaining = dist - length;
      if (remaining >= 0) {
        dir = CJS.Util.add(
          this.direction.map(function (i) { return i * length; }),
          turn.dir.map(function (i) { return i * remaining; })
        );
        if (this.next) { this.next.queueTurn(turn); }
        this.direction = turn.dir;
        this.turnQueue.shift();
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
    this.sprite.draw(this.position[0], this.position[1] - 16, idx);
  };
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
