(function(root) {
  'use strict';

  if (typeof root.CJS === "undefined") {
    root.CJS = {};
  }

  var MenuOption = CJS.MenuOption = function (option) {
    this.images = option.images;
    this.position = option.position;
    this.callback = option.callback;
  };

  MenuOption.prototype.draw = function () {

  };
}(this));
