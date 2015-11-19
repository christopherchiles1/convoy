(function(root) {
  'use strict';

  if (typeof root.CJS === 'undefined') {
    root.CJS = {};
  }
  // NOTE: Screen could have a navigable options structure
    // options would be linked by cardinal directions (arrow keys)
    // options and current option would determin rendering

  var Screen = CJS.Screen = function (image, options) {
    if (image) {
      this.image = new Image();
      this.image.src = image;
    } else {
      this.image = null;
    }
    // TODO: Add options handling
  };

  Screen.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, CJS.Constants.VIEW_WIDTH, CJS.Constants.VIEW_HEIGHT);
    if (this.image) {
      ctx.drawImage(this.image, 0, 0, CJS.Constants.VIEW_WIDTH, CJS.Constants.VIEW_HEIGHT);
    }
    this.drawOptions(ctx)
  };

  Screen.prototype.drawOptions = function (ctx) {
    // draw an options box and then each option on top of that

    // TODO: draw options with one selected
  };
}(this));
