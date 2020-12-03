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
      it('should add an element in queue depending on its priority', () => {
        const mpQueue = new MappedPriorityQueue();
        mpQueue.add(1, { id: 1 });
        mpQueue.add(2, { id: 2 });
        expect(mpQueue.getMax()).toEqual({ id: 2 });
      });

      it('should not add element without id', () => {
        const mpQueue = new MappedPriorityQueue();
        mpQueue.add(1, { name: 'Ivan' });
        expect(mpQueue.map[undefined]).toBeUndefined();
      });

      it('should not add undefined element', () => {
        try {
          const mpQueue = new MappedPriorityQueue();
          mpQueue.add(1, undefined);
        } catch (e) {
          expect(e.name).not.toBe('TypeError');
          expect(e.message).not.toBe('Cannot read property \'id\' of undefined');
        }
      });

      it('should not add null element', () => {
        try {
          const mpQueue = new MappedPriorityQueue();
          mpQueue.add(1, null);
        } catch (e) {
          expect(e.name).not.toBe('TypeError');
          expect(e.message).not.toBe('Cannot read property \'id\' of undefined');
        }
      });
    });

    describe('.pop method', () => {
      it('should remove an element from end of queue', () => {
        const mpQueue = new MappedPriorityQueue();
        mpQueue.add(0, { id: 1 });
        mpQueue.add(0, { id: 2 });
        mpQueue.pop();
        expect(mpQueue.length).toBe(1);
        expect(mpQueue.getMax()).toEqual({ id: 2 });
      });
    });

    describe('.shift method', () => {
      it('should remove an element from start of queue', () => {
        const mpQueue = new MappedPriorityQueue();
        mpQueue.add(0, { id: 1 });
        mpQueue.add(0, { id: 2 });
        mpQueue.shift();
        expect(mpQueue.length).toBe(1);
        expect(mpQueue.getMax()).toEqual({ id: 1 });
      });
    });

    describe('.getById method', () => {
      it('should get an element by its id', () => {
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
        expect(mpQueue.map[1]).not.toEqual({ id: 1 });
      });
    });

    describe('.has method', () => {
      it('should return true if element exists in queue and false if not exists', () => {
        const mpQueue = new MappedPriorityQueue();
        mpQueue.add(0, { id: 1 });
        mpQueue.add(0, { id: 2 });
        expect(mpQueue.has(1)).toBe(true);
        expect(mpQueue.has(2)).toBe(true);
        expect(mpQueue.has(3)).toBe(false);
      });
    });
  });

});
