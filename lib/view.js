(function(root) {
  'use strict';

  if (typeof root.CJS === 'undefined') {
    root.CJS = {};
  }

  var View = CJS.View = function () {
    this.bg = this.createBackground();
    this.keyhandler = this.bindKeys();
    this.game = new CJS.Game();
    this.menus = this.buildMenus();
    this.menu = this.menus.START;
  };

  View.prototype.start = function (ctx) {
    setInterval(this.draw.bind(this, ctx), CJS.Constants.VIEW_TICK);
  };

  View.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, CJS.Constants.VIEW_WIDTH, CJS.Constants.VIEW_HEIGHT);
    ctx.drawImage(this.bg, 0, 0, CJS.Constants.VIEW_WIDTH, CJS.Constants.VIEW_HEIGHT);
    this.game.draw(ctx);
    if (this.menu) { this.menu.draw(ctx); }
  };

  View.prototype.createBackground = function () {
    var background = new Image();
    background.src = "assets/images/bg.png";
    return background;
  };

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
      this.pauseGame();
    }.bind(this));
    keyhandler.addKey('enter', 'GAME', function () {
      this.pauseGame();
    }.bind(this));
    keyhandler.addKey('up', 'GAME', function () {
      this.game.turnPlayer(CJS.Constants.UP);
    }.bind(this));
    keyhandler.addKey('down', 'GAME', function () {
      this.game.turnPlayer(CJS.Constants.DOWN);
    }.bind(this));
    keyhandler.addKey('right', 'GAME', function () {
      this.game.turnPlayer(CJS.Constants.RIGHT);
    }.bind(this));
    keyhandler.addKey('left', 'GAME', function () {
      this.game.turnPlayer(CJS.Constants.LEFT);
    }.bind(this));
    return keyhandler;
  };

  View.prototype.buildMenus = function () {
    return {
      START: new CJS.Menu({
        "Start Game": this.startGame.bind(this),
        "How to Play": (function () {}),
        "About": (function () {})
      }),
      PAUSE: new CJS.Menu({
        "Continue": this.unpauseGame.bind(this),
        "Restart": this.startGame.bind(this),
        "How to Play": (function () {})
      }),
      OVER: new CJS.Menu({
        "New Game": this.startGame.bind(this),
        "How to Play": (function () {})
      })
    };
  };

  View.prototype.startGame = function () {
    this.menu = undefined;
    this.keyhandler.state = "GAME";
    this.game.start();
  };

  View.prototype.unpauseGame = function () {
    this.menu = undefined;
    this.keyhandler.state = "GAME";
    this.game.toggle();
  };

  View.prototype.pauseGame = function () {
    this.menu = this.menus.PAUSE;
    this.keyhandler.state = "MENU";
    this.game.toggle();
  };
}(this));
