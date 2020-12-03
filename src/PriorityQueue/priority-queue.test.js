import PriorityQueue from './priority-queue';
import Queue from '../Queue/queue';

describe('PriorityQueue', () => {
  describe('constructor', () => {
    it('should create object with default params', () => {
      const pQueue = new PriorityQueue();
      expect(pQueue).toBeInstanceOf(Queue);
      expect(pQueue).toHaveProperty('length', 0);
      expect(pQueue).toHaveProperty('head', null);
      expect(pQueue).toHaveProperty('tail', null);
    });
  });

  describe('methods', () => {
    describe('.add method', () => {
      it('should add an element in queue depending on its priority', () => {
        const pQueue = new PriorityQueue();
        pQueue.add(1, { id: 1 });
        pQueue.add(2, { id: 2 });
        expect(pQueue.getMax()).toEqual({ id: 2 });
      });
    });

    describe('.push method', () => {
      it('should add an element in queue depending on its priority', () => {
        const pQueue = new PriorityQueue();
        pQueue.push({ id: 1 }, 1);
        pQueue.push({ id: 2 }, 2);
        expect(pQueue.getMax()).toEqual({ id: 2 });
      });
    });

    describe('.unshift method', () => {
      it('should add an element in queue depending on its priority', () => {
        const pQueue = new PriorityQueue();
        pQueue.push({ id: 1 }, 1);
        pQueue.unshift({ id: 2 }, 2);
        expect(pQueue.getMax()).toEqual({ id: 2 });
      });
    });

    describe('.getMax method', () => {
      it('should return an element with MAX priority', () => {
        const pQueue = new PriorityQueue();
        pQueue.push({ id: 1 }, 1);
        pQueue.push({ id: 5 }, 5);
        pQueue.push({ id: 2 }, 2);
        expect(pQueue.getMax()).toEqual({ id: 5 });
      });

      it('should not change queue length after call', () => {
        const pQueue = new PriorityQueue();
        pQueue.push({ id: 1 }, 1);
        pQueue.push({ id: 2 }, 2);
        pQueue.push({ id: 3 }, 3);
        pQueue.getMax();
        expect(pQueue.length).toEqual(3);
      });
    });

    describe('.getMin method', () => {
      it('should return an element with MIN priority', () => {
        const pQueue = new PriorityQueue();
        pQueue.push({ id: 1 }, 1);
        pQueue.push({ id: 5 }, 5);
        pQueue.push({ id: 2 }, 2);
        expect(pQueue.getMin()).toEqual({ id: 1 });
      });

      it('should not change queue length after call', () => {
        const pQueue = new PriorityQueue();
        pQueue.push({ id: 1 }, 1);
        pQueue.push({ id: 2 }, 2);
        pQueue.push({ id: 3 }, 3);
        pQueue.getMin();
        expect(pQueue.length).toEqual(3);
      });
    });

    it('should give to last element lower priority even if it has the same priority as element with MAX priority', () => {
      const pQueue = new PriorityQueue();
      pQueue.push({ id: 1 }, 1);
      pQueue.push({ id: 2 }, 2);
      pQueue.push({ id: 3 }, 2);
      expect(pQueue.getMax()).toEqual({ id: 2 });
    });
  });

  describe('queue element params', () => {
    describe('priority', () => {
      it('should be a number type value', () => {
        const pQueue = new PriorityQueue();
        pQueue.push({ id: 1 }, '1');
        expect(typeof pQueue.tail.priority).toBe('number');
      })
    })
  });

});