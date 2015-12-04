(function(root) {
  'use strict';

  if (typeof root.CJS === 'undefined') {
    root.CJS = {};
  }

  var List = CJS.List = function () {
    this.head = undefined;
    this.tail = this.head;
  };

  List.prototype.append = function (node) {
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      var oldTail = this.tail;
      var newTail = node;
      oldTail.next = newTail;
      newTail.prev = oldTail;
      this.tail = newTail;
    }
  };

  List.prototype.remove = function (node) {
    if (node.prev) {node.prev.next = node.next;}
    if (node.next) {node.next.prev = node.prev;}
    if (!node.prev && !node.next) { this.constructor(); }
  };

  List.prototype.each = function (callback) {
    var current = this.head;
    var idx = 0;
    while (current) {
      callback(current, idx);
      current = current.next;
      idx += 1;
    }
  };
}(this));
