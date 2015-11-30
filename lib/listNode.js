(function(root) {
  'use strict';

  if (typeof root.CJS === 'undefined') {
    root.CJS = {};
  }

  var ListNode = CJS.ListNode = function (val) {
    this.next = undefined;
    this.prev =  undefined;
    this.val = val;
  };
}(this));
