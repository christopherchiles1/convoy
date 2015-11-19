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
    // TODO: store options and make first one selected automatically
  };

  Menu.prototype.draw = function (ctx) {
    // draw menu with options that were passed in
  };
}(this));
