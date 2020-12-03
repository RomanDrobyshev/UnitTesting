"use strict";

var _priorityQueue = _interopRequireDefault(require("./priority-queue"));

var _queue = _interopRequireDefault(require("../Queue/queue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('PriorityQueue', function () {
  describe('constructor', function () {
    it('should create object with default params', function () {
      var pQueue = new _priorityQueue["default"]();
      expect(pQueue).toBeInstanceOf(_queue["default"]);
      expect(pQueue).toHaveProperty('length', 0);
      expect(pQueue).toHaveProperty('head', null);
      expect(pQueue).toHaveProperty('tail', null);
    });
  });
  describe('methods', function () {
    describe('.add method', function () {
      it('should add an element in queue depending on its priority', function () {
        var pQueue = new _priorityQueue["default"]();
        pQueue.add(1, {
          id: 1
        });
        pQueue.add(2, {
          id: 2
        });
        expect(pQueue.getMax()).toEqual({
          id: 2
        });
      });
    });
    describe('.push method', function () {
      it('should add an element in queue depending on its priority', function () {
        var pQueue = new _priorityQueue["default"]();
        pQueue.push({
          id: 1
        }, 1);
        pQueue.push({
          id: 2
        }, 2);
        expect(pQueue.getMax()).toEqual({
          id: 2
        });
      });
    });
    describe('.unshift method', function () {
      it('should add an element in queue depending on its priority', function () {
        var pQueue = new _priorityQueue["default"]();
        pQueue.push({
          id: 1
        }, 1);
        pQueue.unshift({
          id: 2
        }, 2);
        expect(pQueue.getMax()).toEqual({
          id: 2
        });
      });
    });
    describe('.getMax method', function () {
      it('should return an element with MAX priority', function () {
        var pQueue = new _priorityQueue["default"]();
        pQueue.push({
          id: 1
        }, 1);
        pQueue.push({
          id: 5
        }, 5);
        pQueue.push({
          id: 2
        }, 2);
        expect(pQueue.getMax()).toEqual({
          id: 5
        });
      });
      it('should not change queue length after call', function () {
        var pQueue = new _priorityQueue["default"]();
        pQueue.push({
          id: 1
        }, 1);
        pQueue.push({
          id: 2
        }, 2);
        pQueue.push({
          id: 3
        }, 3);
        pQueue.getMax();
        expect(pQueue.length).toEqual(3);
      });
    });
    describe('.getMin method', function () {
      it('should return an element with MIN priority', function () {
        var pQueue = new _priorityQueue["default"]();
        pQueue.push({
          id: 1
        }, 1);
        pQueue.push({
          id: 5
        }, 5);
        pQueue.push({
          id: 2
        }, 2);
        expect(pQueue.getMin()).toEqual({
          id: 1
        });
      });
      it('should not change queue length after call', function () {
        var pQueue = new _priorityQueue["default"]();
        pQueue.push({
          id: 1
        }, 1);
        pQueue.push({
          id: 2
        }, 2);
        pQueue.push({
          id: 3
        }, 3);
        pQueue.getMin();
        expect(pQueue.length).toEqual(3);
      });
    });
    it('should give to last element lower priority even if it has the same priority as element with MAX priority', function () {
      var pQueue = new _priorityQueue["default"]();
      pQueue.push({
        id: 1
      }, 1);
      pQueue.push({
        id: 2
      }, 2);
      pQueue.push({
        id: 3
      }, 2);
      expect(pQueue.getMax()).toEqual({
        id: 2
      });
    });
  });
  describe('queue element params', function () {
    describe('priority', function () {
      it('should be a number type value', function () {
        var pQueue = new _priorityQueue["default"]();
        pQueue.push({
          id: 1
        }, '1');
        expect(_typeof(pQueue.tail.priority)).toBe('number');
      });
    });
  });
});