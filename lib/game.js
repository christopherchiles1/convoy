(function(root) {
  'use strict';

  if (typeof root.CJS === "undefined") {
    root.CJS = {};
  }

  var Game = CJS.Game = function () {
    this.running = false;
    this.units = [];
    this.enemies = [];
    this.player = new CJS.Player(this, new CJS.Unit([320, 240], [1, 0]));
    this.items = new CJS.List();
    this.playerAttacks = new CJS.List();
    this.enemyAttacks = new CJS.List();
    this.level = new CJS.Level();
  };

  Game.prototype.toggle = function () {
    if (this.running) {
      this.tickID =
        clearInterval(this.tickID);
    } else {
      this.tickID =
        setInterval(this.tick.bind(this), CJS.Game.TICK);
    }
    this.running = !this.running;
  };

  Game.prototype.handleKey = function (key) {
    switch(key) {
      case 'up':
      case 'w':
        this.player.queueTurn([0, -1]);
        break;
      case 'down':
      case 's':
        this.player.queueTurn([0, 1]);
        break;
      case 'left':
      case 'a':
        this.player.queueTurn([-1, 0]);
        break;
      case 'right':
      case 'd':
        this.player.queueTurn([1, 0]);
        break;
      case 'space':
      case 'enter':
        CJS.view.menu = CJS.Menu.PAUSE;
        this.toggle();
        break;
    }
  };

  Game.prototype.tick = function () {
    this.spawn(); // NOTE: Will spawn enemies. spawns 1-up items for now
    this.move();
    this.collideLeader();
    // this.attack();
    // this.damage();
    // this.over();
    this.collect();
  };

  Game.prototype.spawn = function () {
    if (!this.items.head) {
      // make a new 1-up item
      var pos = [
        Math.floor(Math.random() * (CJS.View.WIDTH - 32)),
        Math.floor(Math.random() * (CJS.View.HEIGHT - 32)),
      ];
      this.items.append(
        new CJS.Item(
          pos,
          CJS.Sprite.ONEUP,
          function () {
            this.player.append(new CJS.Unit(
              CJS.Util.add(
                this.player.tail.position,
                this.player.tail.direction.map(function (i) { return i * -32; })
              ),
              this.player.tail.direction)
            );
          }.bind(this)
        )
      );
    }
  };

  Game.prototype.move = function () {
    this.player.tryTurn();
    this.player.each(function (unit) {
      unit.move();
    });
    this.enemies.forEach(function (enemy) {
      enemy.each(function (unit) {
        unit.move();
      });
    });
    this.playerAttacks.each(function (attack) {
      attack.move();
    });
    this.enemyAttacks.each(function (attack) {
      attack.move();
    });
  };

  Game.prototype.collideLeader = function () {
    if (this.player.head.position[0] < 0 || this.player.head.position[1] < 0 ||
        this.player.head.position[0] > 608 || this.player.head.position[1] > 448) {
      CJS.view.menu = CJS.Menu.OVER;
      this.reset();
    } else {
      this.player.each(function(unit) {
        if ((this.player.head !== unit) && CJS.Util.manhattanOverlap(this.player.head, unit)) {
          CJS.view.menu = CJS.Menu.OVER;
          this.reset();
        }
      }.bind(this));
    }
  };

  Game.prototype.reset = function () {
    this.toggle();
    this.constructor();
  };

  Game.prototype.attack = function () {

  };

  Game.prototype.damage = function () {

  };

  Game.prototype.over = function () {

  };

  Game.prototype.collect = function () {
    this.items.each(function (item) {
      if (CJS.Util.manhattanOverlap(this.player.head, item)) {
        this.items.remove(item);
        item.callback();
      }
    }.bind(this));
  };

  Game.prototype.drawHud = function () {

  };

  Game.prototype.draw = function () {
    // draw the level
    CJS.ctx.fillStyle = 'grey';
    CJS.ctx.fillRect(0, 0, CJS.View.WIDTH, CJS.View.HEIGHT);
    this.items.each(function (item) {
      item.draw();
    });
    this.units = CJS.Util.rSort(this.units);
    this.units.forEach(function (unit) {
      unit.draw();
    });
    this.playerAttacks.each(function (attack) {
      attack.draw();
    });
    this.enemyAttacks.each(function (attack) {
      attack.draw();
    });
    this.drawHud();
  };

  Game.TICK = 1000 / 20;
}(this));
