import MappedPriorityQueue from './mapped-priority-queue';
import PriorityQueue from "../PriorityQueue/priority-queue";

describe('MappedPriorityQueue', () => {
  describe('constructor', () => {
    it('should create object with default params', () => {
      const mpQueue = new MappedPriorityQueue();
      expect(mpQueue).toBeInstanceOf(PriorityQueue);
      expect(mpQueue).toHaveProperty('length', 0);
      expect(mpQueue).toHaveProperty('head', null);
      expect(mpQueue).toHaveProperty('tail', null);
      expect(mpQueue).toHaveProperty('map', {});
    });
  });

  describe('methods', () => {
    describe('.add method', () => {
      it('should throw an error if priority is not a number type', () => {
        const mpQueue = new MappedPriorityQueue();
        expect(mpQueue.add('top', { id: 1, name: 'Ivan' })).toThrow('You can not provide priority of type not a number');
      });

      it('should throw an error if an element without id is added', () => {
        const mpQueue = new MappedPriorityQueue();
        expect(mpQueue.add(1, { name: 'Ivan' })).toThrow('You can not provide an element without id');
      });

      it('should add an element to queue map field', () => {
        const mpQueue = new MappedPriorityQueue();
        mpQueue.add(0, { id: 1 });
        expect(mpQueue).toHaveProperty('map', { 1: { id: 1 } });
      });
    });

    describe('.pop method', () => {
      it('should remove an element from end of queue', () => {
        const mpQueue = new MappedPriorityQueue();
        mpQueue.add(0, { id: 1 });
        mpQueue.add(0, { id: 2 });
        mpQueue.pop();
        expect(mpQueue.length).toBe(1);
        expect(mpQueue).toHaveProperty('map', { 2: { id: 2 } });
      });
    });

    describe('.shift method', () => {
      it('should remove an element from start of queue', () => {
        const mpQueue = new MappedPriorityQueue();
        mpQueue.add(0, { id: 1 });
        mpQueue.add(0, { id: 2 });
        mpQueue.shift();
        expect(mpQueue.length).toBe(1);
        expect(mpQueue).toHaveProperty('map', { 1: { id: 1 } });
      });
    });

    describe('.getById method', () => {
      it('should return an element by requested id', () => {
        const mpQueue = new MappedPriorityQueue();
        mpQueue.add(0, { id: 1 });
        mpQueue.add(0, { id: 2 });
        expect(mpQueue.getById(1)).toEqual({ id: 1 });
      });
    });

    describe('.removeById method', () => {
      it('should remove an element from queue by its id', () => {
        const mpQueue = new MappedPriorityQueue();
        mpQueue.add(0, { id: 1 });
        mpQueue.add(0, { id: 2 });
        mpQueue.removeById(1);
        expect(mpQueue.length).toBe(1);
        expect(mpQueue.head).toHaveProperty('next', null);
        expect(mpQueue).not.toHaveProperty('map', { 1: { id: 1 } });
      });
    });

    describe('.has method', () => {
      it('should return true if element exists in queue and false if not exists', () => {
        const mpQueue = new MappedPriorityQueue();
        mpQueue.add(0, { id: 1 });
        expect(mpQueue.has(1)).toBe(true);
        expect(mpQueue.has(2)).toBe(false);
      });
    });
  });
});
