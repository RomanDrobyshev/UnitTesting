"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Queue = /*#__PURE__*/function () {
  function Queue() {
    _classCallCheck(this, Queue);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  _createClass(Queue, [{
    key: "__biuldItem",
    value: function __biuldItem(data) {
      var prev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var next = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      return {
        data: data,
        prev: prev,
        next: next
      };
    }
  }, {
    key: "push",
    value: function push(data) {
      switch (this.length) {
        case 0:
          this.tail = this.head = this.__biuldItem(data);
          break;

        default:
          this.tail = this.tail.next = this.__biuldItem(data, this.tail);
      }

      return this.length++;
    }
  }, {
    key: "pop",
    value: function pop() {
      var res = null;

      switch (this.length) {
        case 0:
          break;

        case 1:
          res = this.tail.data;
          this.tail = this.head = null;
          this.length--;
          break;

        default:
          res = this.tail.data;
          this.tail = this.tail.prev;
          this.tail.next = null;
          this.length--;
      }

      return res;
    }
  }, {
    key: "unshift",
    value: function unshift(data) {
      switch (this.length) {
        case 0:
          this.head = this.tail = this.__biuldItem(data);
          break;

        default:
          this.head = this.head.prev = this.__biuldItem(data, null, this.head);
      }

      return this.length++;
    }
  }, {
    key: "shift",
    value: function shift() {
      var res = null;

      switch (this.length) {
        case 0:
          break;

        case 1:
          res = this.head.data;
          this.head = this.tail = null;
          this.length--;
          break;

        default:
          res = this.head.data;
          this.head = this.head.next;
          this.head.prev = null;
          this.length--;
      }

      return res;
    }
  }]);

  return Queue;
}();

exports["default"] = Queue;