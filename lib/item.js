(function(root) {
  'use strict';

  if (typeof root.CJS === "undefined") {
    root.CJS = {};
  }

  var Item = CJS.Item = function (position, sprite, callback) {
    this.position = position;
    this.sprite = sprite;
    // this.frame = 0;
    // this.duration = 160;
    this.callback = callback;
  };

  Item.prototype.draw = function () {
    this.sprite.draw(this.position[0], this.position[1]);
  };
}(this));
