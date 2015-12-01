(function(root) {
  'use strict';

  if (typeof root.CJS === "undefined") {
    root.CJS = {};
  }

  CJS.ctx = document.getElementById('canvas').getContext("2d");
  CJS.view = new CJS.View();
  CJS.view.draw();
}(this));
