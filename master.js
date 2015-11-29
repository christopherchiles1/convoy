(function() {
  'use strict';

  if (typeof root.CJS === "undefined") {
    root.CJS = {};
  }

  CJS.ctx = document.getElementById('canvas').getContext("2d");
  var view = new CJS.View();
  view.draw();
}());
