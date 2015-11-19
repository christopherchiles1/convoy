(function(root) {
  'use strict';

  if (typeof root.CJS === 'undefined') {
    root.CJS = {};
  }
  // NOTE: Menu could have a navigable options structure
    // options would be linked by cardinal directions (arrow keys)
    // options and current option would determin rendering

  // NOTE: Menu options keys are strings and values are callbacks

  var Menu = CJS.Menu = function (options) {
    this.options = options;
    this.selected = Object.keys(this.options)[0];
  };

  Menu.prototype.draw = function (ctx) {
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
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
      if (this.selected === option) { ctx.strokeStyle = 'yellow' }
      // TODO: Add a cursor icon in front of selected option
      ctx.strokeText(option, 125, idx * 40 + 110);
    }.bind(this));
  };
}(this));
