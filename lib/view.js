(function(root) {
  'use strict';

  if (typeof root.CJS === 'undefined') {
    root.CJS = {};
  }

  var View = CJS.View = function () {
    this.bg = this.createBackground();
    this.menu = new CJS.Menu({
      "Start Game": function () {},
      "How to Play": function () {}
    });
    // TODO: bind key handlers here
  };

  View.prototype.start = function (ctx) {
    setInterval(this.draw.bind(this, ctx), CJS.Constants.VIEW_TICK);
  };

  View.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, CJS.Constants.VIEW_WIDTH, CJS.Constants.VIEW_HEIGHT);
    ctx.drawImage(this.bg, 0, 0, CJS.Constants.VIEW_WIDTH, CJS.Constants.VIEW_HEIGHT);
    this.menu.draw(ctx);
  };

  View.prototype.createBackground = function () {
    var background = new Image();
    background.src = "assets/images/bg.png"
    return background
  }
}(this));
