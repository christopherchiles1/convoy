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

    this.frame = (this.frame + 1) % 20;
  };

  Unit.prototype.attack = function () {

  };

  Unit.prototype.damage = function () {

    //remove from CJS.units if dead
  };

  Unit.prototype.draw = function () {
    // alter index based on direction as well
    var idx = Math.floor(this.frame * 4 / 20);
    this.sprite.draw(this.position[0], this.position[1], idx);
  };

  Unit.WARRIOR = new Unit(
    [320, 240], [0, 1]
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
//     this.position = CJS.Util.step(this.position, this.direction, this.speed)
//   };
// }(this));
