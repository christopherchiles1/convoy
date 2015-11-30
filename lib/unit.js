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
