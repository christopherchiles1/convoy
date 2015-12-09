(function(root) {
  'use strict';

  if (typeof root.CJS === 'undefined') {
    root.CJS = {};
  }

  var Menu = CJS.Menu = function (options) {
    this.selected = 0;
    this.options = options;
    this.frame = 0;
  };

  Menu.prototype.navigate = function (dir) {
    var length = Object.keys(this.options).length;
    this.selected = (length + this.selected + dir) % length;
  };

  Menu.prototype.enter = function () {
    this.options[Object.keys(this.options)[this.selected]]();
  };

  Menu.prototype.handleKey = function (key) {
    switch(key) {
      case 'up':
      case 'w':
        this.navigate(-1);
        break;
      case 'down':
      case 's':
        this.navigate(1);
        break;
      case 'space':
      case 'enter':
        this.enter();
        break;
    }
  };

  Menu.prototype.tick = function () {
    this.frame = (this.frame + 1) % 20;
  };

  Menu.prototype.draw = function () {
    this.drawBg();

    CJS.ctx.font = '50px Ariel';
    CJS.ctx.fillStyle = 'black';
    CJS.ctx.strokeStyle = 'grey';
    CJS.ctx.textAlign = 'center';
    CJS.ctx.fillText("Convoy", CJS.View.WIDTH / 2, 60);
    CJS.ctx.strokeText("Convoy", CJS.View.WIDTH / 2, 60);

    CJS.ctx.font = '18px Ariel';
    // instrutions temporarily at bottom of menu
    CJS.ctx.fillText("Space to play/pause | Arrow keys to change direction", CJS.View.WIDTH / 2, 440);

    CJS.ctx.font = '30px Ariel';
    Object.keys(this.options).forEach(function (option, idx) {
      var i, j, s;
      s = CJS.Sprite.OPTION_TILE;
      s.draw(CJS.View.WIDTH / 2 - 120, idx * 50 + 100, 0);
      s.draw(CJS.View.WIDTH / 2 - 120, idx * 50 + 120, 6);
      s.draw(CJS.View.WIDTH / 2 + 100, idx * 50 + 100, 2);
      s.draw(CJS.View.WIDTH / 2 + 100, idx * 50 + 120, 8);
      for (i = 10; i < 220; i += 20) {
        s.draw(CJS.View.WIDTH / 2 - 120 + i, idx * 50 + 100, 1);
        s.draw(CJS.View.WIDTH / 2 - 120 + i, idx * 50 + 120, 7);
      }
      if (Object.keys(this.options)[this.selected] === option) {
        s = CJS.Sprite.WARRIOR;
        var k = Math.floor(this.frame * 4 / 20);
        s.draw(CJS.View.WIDTH / 2 - 136, idx * 50 + 96, k);
      }
      CJS.ctx.fillStyle = 'black';
      CJS.ctx.fillText(option, CJS.View.WIDTH / 2, idx * 50 + 128);
    }.bind(this));
  };

  Menu.prototype.drawBg = function () {
    var i, j;
    var s = CJS.Sprite.MENU_TILE;
    s.draw(0, 0, 0);
    s.draw(576, 0, 2);
    s.draw(0, 416, 6);
    s.draw(576, 416, 8);
    for (i = 32; i < 576; i += 64) {
      s.draw(i, 0, 1);
      s.draw(i, 416, 7);
    }
    for(j = 32; j < 416; j += 64) {
      s.draw(0, j, 3);
      s.draw(576, j, 5);
      for(i = 32; i < 576; i += 64) {
        s.draw(i, j, 4);
      }
    }
  };

  Menu.START = new Menu(
    {
      "Start Game": function () {
        CJS.view.toggleGame();
      },
      "---": function () {
        // change the menu view to instructions
      },
      " --- ": function () {
        // change the menu view to instructions
      },
      "  ---  ": function () {
        // change the menu view to instructions
      }
    }
  );

  Menu.PAUSE = new Menu(
    {
      "Continue Game": function () {
        CJS.view.toggleGame();
      },
      "---": function () {
        // change the menu view to instructions
      },
      " --- ": function () {
        // change the menu view to instructions
      },
      "  ---  ": function () {
        // change the menu view to instructions
      }
    }
  );

  Menu.OVER = new Menu(
    {
      "Play Again": function () {
        CJS.view.toggleGame();
      },
      "---": function () {
        // change the menu view to instructions
      },
      " --- ": function () {
        // change the menu view to instructions
      },
      "  ---  ": function () {
        // change the menu view to instructions
      }
    }
  );
}(this));
