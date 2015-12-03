(function(root) {
  'use strict';

  if (typeof root.CJS === 'undefined') {
    root.CJS = {};
  }

  var Menu = CJS.Menu = function (options) {
    this.selected = 0;
    this.options = options;
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
        this.navigate(-1);
        break;
      case 'space':
      case 'enter':
        this.enter();
        break;
    }
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

    CJS.ctx.textAlign = 'left';
    CJS.ctx.font = '30px Ariel';
    Object.keys(this.options).forEach(function (option, idx) {
      if (Object.keys(this.options)[this.selected] === option) {
        CJS.ctx.fillStyle = 'green';
        CJS.ctx.lineWidth = 1;
        CJS.ctx.beginPath();
        CJS.ctx.arc(100, idx * 40 + 100, 5, 0, 2 * Math.PI, false);
        CJS.ctx.closePath();
        CJS.ctx.fill();
      }
      CJS.ctx.fillStyle = 'black';
      CJS.ctx.fillText(option, 125, idx * 40 + 110);
    }.bind(this));
  };

  Menu.prototype.drawBg = function () {
    var i, j;
    var s = CJS.Sprite.MENU_TILE;
    s.draw(0, 0, 0, 2);
    s.draw(576, 0, 2, 2);
    s.draw(0, 416, 6, 2);
    s.draw(576, 416, 8, 2);
    for (i = 32; i < 576; i += 64) {
      s.draw(i, 0, 1, 2);
      s.draw(i, 416, 7, 2);
    }
    for(j = 32; j < 416; j += 64) {
      s.draw(0, j, 3, 2);
      s.draw(576, j, 5, 2);
      for(i = 32; i < 576; i += 64) {
        s.draw(i, j, 4, 2);
      }
    }
  };

  Menu.START = new Menu(
    {
      "Start Game": function () {
        CJS.view.toggleGame();
      }
      // ,
      // "How to Play": function () {
      //   // change the menu view to instructions
      // }
    }
  );

  Menu.PAUSE = new Menu(
    {
      "Continue Game": function () {
        CJS.view.toggleGame();
      }
      // ,
      // "How to Play": function () {
      //   // change the menu view to instructions
      // }
    }
  );

  Menu.OVER = new Menu(
    {
      "Play Again": function () {
        CJS.view.toggleGame();
      }
      // ,
      // "How to Play": function () {
      //   // change the menu view to instructions
      // }
    }
  );
}(this));
