(function(root) {
  'use strict';

  if (typeof root.CJS === 'undefined') {
    root.CJS = {};
  }

  var Screen = CJS.Screen = function (screen, options) {
    // create image for this screen (nil for a blank screen)

    // NOTE: Screen could have a navigable options structure
      // options would be linked by cardinal directions (arrow keys)
      // options and current option would determin rendering
  };

  Screen.prototype.draw = function () {
    // set render tick
  };
}(this));
