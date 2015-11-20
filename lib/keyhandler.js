(function(root) {
  'use strict';

  if (typeof root.CJS === 'undefined') {
    root.CJS = {};
  }

  var KeyHandler = CJS.KeyHandler = function () {
    this.callbacks = {};
    this.state = 'MENU';
  };

  KeyHandler.prototype.addKey = function (key, state, callback) {
    var is_new = !this.callbacks[key];
    if (is_new) { this.callbacks[key] = {} }
    this.callbacks[key][state] = callback;
    if (is_new) {
      root.key(key, function () {
        this.callbacks[key][this.state]();
        return false;
      }.bind(this))
    }
  };
}(this));
