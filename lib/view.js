(function(root) {
  'use strict';

  if (typeof root.CJS === 'undefined') {
    root.CJS = {};
  }

  var View = CJS.View = function () {
    this.bg = this.createBackground();
    this.keyhandler = this.bindKeys();
    this.game = new CJS.Game();
    this.menu = new CJS.Menu(CJS.Constants.MENU_START);
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

  View.prototype.bindKeys = function () {
    var keyhandler = new CJS.KeyHandler(this);
    keyhandler.addKey('space', 'MENU', function () {
      this.menu.submit();
    }.bind(this));
    keyhandler.addKey('enter', 'MENU', function () {
      this.menu.submit();
    }.bind(this));
    keyhandler.addKey('up', 'MENU', function () {
      this.menu.navigate(-1);
    }.bind(this));
    keyhandler.addKey('down', 'MENU', function () {
      this.menu.navigate(1);
    }.bind(this));
    keyhandler.addKey('space', 'GAME', function () {
      this.game.pause();
    }.bind(this));
    keyhandler.addKey('enter', 'GAME', function () {
      this.game.pause();
    }.bind(this));
    keyhandler.addKey('up', 'GAME', function () {
      this.game.turn(CJS.Constants.UP);
    }.bind(this));
    keyhandler.addKey('down', 'GAME', function () {
      this.game.turn(CJS.Constants.DOWN);
    }.bind(this));
    keyhandler.addKey('right', 'GAME', function () {
      this.game.turn(CJS.Constants.RIGHT);
    }.bind(this));
    keyhandler.addKey('left', 'GAME', function () {
      this.game.turn(CJS.Constants.LEFT);
    }.bind(this));
    return keyhandler;
  };
}(this));
