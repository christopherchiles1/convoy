(function(root) {
  'use strict';

  if (typeof root.CJS === 'undefined') {
    root.CJS = {};
  }

  var View = CJS.View = function () {
    // create bg screen
    this.bg = new CJS.Screen("assets/images/bg.png");
    // create menu screen
    this.menu = new CJS.Screen();
  };

  View.prototype.start = function (ctx) {
    // TODO: bind key handlers here
    setInterval(this.draw.bind(this, ctx), CJS.Constants.VIEW_TICK);
  };

  View.prototype.draw = function (ctx) {
    this.bg.draw(ctx);
    // this.menu.draw(ctx);
  };
}(this));
