(function(root) {
  'use strict';

  if (typeof root.CJS === 'undefined') {
    root.CJS = {};
  }
  // NOTE: Screen could have a navigable options structure
    // options would be linked by cardinal directions (arrow keys)
    // options and current option would determin rendering

  var Screen = CJS.Screen = function (image, options) {
    if image {
      this.image = new Image();
      this.image.src = image;
    } else {
      this.image = null;
    }

    // TODO: Add options handling
  };

  Screen.prototype.draw = function () {
    // draw image if there is one
    // draw options with one selected
  };
}(this));
