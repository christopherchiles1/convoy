(function(root) {
  'use strict';

  if (typeof root.CJS === "undefined") {
    root.CJS = {};
  }

  CJS.Constants = {
    VIEW_WIDTH: 640,
    VIEW_HEIGHT: 480,
    VIEW_TICK: 1000 / 60,
    MENU_START: {
      "Start Game": function () {},
      "How to Play": function () {},
      "About": function () {}
    }
  };
}(this));
