(function(root) {
  'use strict';

  if (typeof root.CJS === 'undefined') {
    root.CJS = {};
  }

  // NOTE: Menu options keys are strings and values are callbacks

  var Menu = CJS.Menu = function (options) {
    this.options = options;
    this.selected = Object.keys(this.options)[0];
  };

  Menu.prototype.draw = function (ctx) {
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;
    ctx.shadowBlur = 0;
    ctx.font = '50px Ariel';
    ctx.strokeStyle = 'green';
    ctx.shadowColor = 'lightgreen';
    ctx.textAlign = 'center';
    ctx.strokeText("Convoy", CJS.Constants.VIEW_WIDTH / 2, 50);

    ctx.textAlign = 'left';
    ctx.font = '30px Ariel';
    ctx.shadowColor = 'transparent';
    Object.keys(this.options).forEach(function (option, idx) {
      ctx.strokeStyle = 'green';
      if (this.selected === option) {
        ctx.strokeStyle = 'yellow';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(100, idx * 40 + 100, 5, 0, 2 * Math.PI, false);
        ctx.closePath();
        ctx.stroke();
      }
      ctx.strokeText(option, 125, idx * 40 + 110);
    }.bind(this));
  };
}(this));
