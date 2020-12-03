"use strict";

var _mappedPriorityQueue = _interopRequireDefault(require("./mapped-priority-queue"));

var _priorityQueue = _interopRequireDefault(require("../PriorityQueue/priority-queue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('MappedPriorityQueue', function () {
  describe('constructor', function () {
    it('should create object with default params', function () {
      var mpQueue = new _mappedPriorityQueue["default"]();
      expect(mpQueue).toBeInstanceOf(_priorityQueue["default"]);
      expect(mpQueue).toHaveProperty('length', 0);
      expect(mpQueue).toHaveProperty('head', null);
      expect(mpQueue).toHaveProperty('tail', null);
      expect(mpQueue).toHaveProperty('map', {});
    });
  });
  describe('methods', function () {
    describe('.add method', function () {
      it('should add an element in queue depending on its priority', function () {
        var mpQueue = new _mappedPriorityQueue["default"]();
        mpQueue.add(1, {
          id: 1
        });
        mpQueue.add(2, {
          id: 2
        });
        expect(mpQueue.getMax()).toEqual({
          id: 2
        });
      });
      it('should not add element without id', function () {
        var mpQueue = new _mappedPriorityQueue["default"]();
        mpQueue.add(1, {
          name: 'Ivan'
        });
        expect(mpQueue.map[undefined]).toBeUndefined();
      });
      it('should not add undefined element', function () {
        try {
          var mpQueue = new _mappedPriorityQueue["default"]();
          mpQueue.add(1, undefined);
        } catch (e) {
          expect(e.name).not.toBe('TypeError');
          expect(e.message).not.toBe('Cannot read property \'id\' of undefined');
        }
      });
      it('should not add null element', function () {
        try {
          var mpQueue = new _mappedPriorityQueue["default"]();
          mpQueue.add(1, null);
        } catch (e) {
          expect(e.name).not.toBe('TypeError');
          expect(e.message).not.toBe('Cannot read property \'id\' of undefined');
        }
      });
    });
    describe('.pop method', function () {
      it('should remove an element from end of queue', function () {
        var mpQueue = new _mappedPriorityQueue["default"]();
        mpQueue.add(0, {
          id: 1
        });
        mpQueue.add(0, {
          id: 2
        });
        mpQueue.pop();
        expect(mpQueue.length).toBe(1);
        expect(mpQueue.getMax()).toEqual({
          id: 2
        });
      });
    });
    describe('.shift method', function () {
      it('should remove an element from start of queue', function () {
        var mpQueue = new _mappedPriorityQueue["default"]();
        mpQueue.add(0, {
          id: 1
        });
        mpQueue.add(0, {
          id: 2
        });
        mpQueue.shift();
        expect(mpQueue.length).toBe(1);
        expect(mpQueue.getMax()).toEqual({
          id: 1
        });
      });
    });
    describe('.getById method', function () {
      it('should get an element by its id', function () {
        var mpQueue = new _mappedPriorityQueue["default"]();
        mpQueue.add(0, {
          id: 1
        });
        mpQueue.add(0, {
          id: 2
        });
        expect(mpQueue.getById(1)).toEqual({
          id: 1
        });
      });
    });
    describe('.removeById method', function () {
      it('should remove an element from queue by its id', function () {
        var mpQueue = new _mappedPriorityQueue["default"]();
        mpQueue.add(0, {
          id: 1
        });
        mpQueue.add(0, {
          id: 2
        });
        mpQueue.removeById(1);
        expect(mpQueue.map[1]).not.toEqual({
          id: 1
        });
      });
    });
    describe('.has method', function () {
      it('should get an element existing by its id', function () {
        var mpQueue = new _mappedPriorityQueue["default"]();
        mpQueue.add(0, {
          id: 1
        });
        mpQueue.add(0, {
          id: 2
        });
        mpQueue.has(1);
        expect(mpQueue.map[1]).not.toEqual({
          id: 1
        });
      });
    });
  });
});