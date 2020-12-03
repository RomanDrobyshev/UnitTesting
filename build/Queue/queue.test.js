"use strict";

var _queue = _interopRequireDefault(require("./queue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Queue', function () {
  describe('constructor', function () {
    it('should create object with default params', function () {
      var queue = new _queue["default"]();
      expect(queue).toHaveProperty('length', 0);
      expect(queue).toHaveProperty('head', null);
      expect(queue).toHaveProperty('tail', null);
    });
  });
  describe('methods', function () {
    it('should add element to end of the queue', function () {
      var queue = new _queue["default"]();
      queue.push({
        id: 1
      });
      queue.push({
        id: 2
      });
      expect(queue.length).toBe(2);
      expect(queue.head.data).toEqual({
        id: 1
      });
      expect(queue.tail.data).toEqual({
        id: 2
      });
    });
    it('should add element to start of the queue', function () {
      var queue = new _queue["default"]();
      queue.unshift({
        id: 1
      });
      queue.unshift({
        id: 2
      });
      expect(queue.length).toBe(2);
      expect(queue.head.data).toEqual({
        id: 2
      });
      expect(queue.tail.data).toEqual({
        id: 1
      });
    });
    it('should remove element from end of the queue', function () {
      var queue = new _queue["default"]();
      queue.push({
        id: 1
      });
      queue.push({
        id: 2
      });
      queue.push({
        id: 3
      });
      queue.pop();
      expect(queue.length).toBe(2);
      expect(queue.head.data).toEqual({
        id: 1
      });
    });
    it('should remove element from start of the queue', function () {
      var queue = new _queue["default"]();
      queue.push({
        id: 1
      });
      queue.push({
        id: 2
      });
      queue.push({
        id: 3
      });
      queue.shift();
      expect(queue.length).toBe(2);
      expect(queue.head.data).toEqual({
        id: 2
      });
    });
  });
});