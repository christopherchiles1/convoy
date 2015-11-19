(function(root) {
  'use strict';

  if (typeof root.CJS === 'undefined') {
    root.CJS = {};
  }

  var KeyHandler = CJS.KeyHandler = function (view) {
    this.callbacks = {};
    this.view = view;
  };

  KeyHandler.prototype.addKey = function (key, state, callback) {
    var is_new = !this.callbacks[key];
    if (is_new) { this.callbacks[key] = {} }
    this.callbacks[key][state] = callback;
    if (is_new) {
      root.key(key, function () {
        this.callbacks[key][this.getState()]();
        return false;
      }.bind(this))
    }
  };

  KeyHandler.prototype.getState = function () {
    // NOTE: think about refactoring keyhandler state
    if (this.view.menu) { return 'MENU' };
    if (this.view.game.running) { return 'GAME' };
  };
}(this));
