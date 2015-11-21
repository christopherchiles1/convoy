(function(root) {
  'use strict';

  if (typeof root.CJS === 'undefined') {
    root.CJS = {};
  }

  var ListNode = CJS.ListNode = function (val) {
    this.next;
    this.prev;
    this.val = val;
  };
}(this));
