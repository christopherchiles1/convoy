(function(root) {
  'use strict';

  if (typeof root.CJS === 'undefined') {
    root.CJS = {};
  }

  var Menu = CJS.Menu = function (menu) {
    this.selected = [0, 0];
    this.images = menu.images;
    this.options = menu.options;
  };

  Menu.prototype.draw = function () {
    this.images.forEach(function (img) {
      img.draw();
    });
    this.options.forEach(function (opt) {
      opt.draw();
    });
  };

  Menu.START = {
    images: [
      {
        sprite: new CJS.Sprite(CJS.Sprite.BROWN_TILE),
        draw: function () {
          var i, j;
          this.sprite.draw(0, 0, 0, 2);
          this.sprite.draw(576, 0, 2, 2);
          this.sprite.draw(0, 416, 6, 2);
          this.sprite.draw(576, 416, 8, 2);
          for (i = 32; i < 576; i += 64) {
            this.sprite.draw(i, 0, 1, 2);
            this.sprite.draw(i, 416, 7, 2);
          }
          for(j = 32; j < 416; j += 64) {
            this.sprite.draw(0, j, 3, 2);
            this.sprite.draw(576, j, 5, 2);
            for(i = 32; i < 576; i += 64) {
              this.sprite.draw(i, j, 4, 2);
            }
          }
        }
      }
    ],
    options: []
  };
}(this));

// (function(root) {
//   'use strict';
//
//   if (typeof root.CJS === 'undefined') {
//     root.CJS = {};
//   }
//
//   var Menu = CJS.Menu = function (options) {
//     this.options = options;
//     this.selected = 0;
//   };
//
//   Menu.prototype.draw = function (ctx) {
//     ctx.shadowOffsetX = 1;
//     ctx.shadowOffsetY = 1;
//     ctx.shadowBlur = 0;
//     ctx.font = '50px Ariel';
//     ctx.strokeStyle = 'green';
//     ctx.shadowColor = 'lightgreen';
//     ctx.textAlign = 'center';
//     ctx.strokeText("Convoy", CJS.Constants.VIEW_WIDTH / 2, 50);
//
//     ctx.textAlign = 'left';
//     ctx.font = '30px Ariel';
//     ctx.shadowColor = 'transparent';
//     Object.keys(this.options).forEach(function (option, idx) {
//       ctx.strokeStyle = 'green';
//       if (Object.keys(this.options)[this.selected] === option) {
//         ctx.strokeStyle = 'yellow';
//         ctx.lineWidth = 1;
//         ctx.beginPath();
//         ctx.arc(100, idx * 40 + 100, 5, 0, 2 * Math.PI, false);
//         ctx.closePath();
//         ctx.stroke();
//       }
//       ctx.strokeText(option, 125, idx * 40 + 110);
//     }.bind(this));
//   };
//
//   Menu.prototype.navigate = function (direction) {
//     var length = Object.keys(this.options).length;
//     this.selected = (length + this.selected + direction) % length;
//   };
//
//   Menu.prototype.submit = function () {
//     this.options[Object.keys(this.options)[this.selected]]();
//   };
// }(this));
