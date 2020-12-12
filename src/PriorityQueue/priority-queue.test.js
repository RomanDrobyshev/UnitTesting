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
      it('should add an element with lower priority key to the head of queue', () => {
        const pQueue = new PriorityQueue();
        pQueue.add(2, { id: 2 });
        pQueue.add(1, { id: 1 });
        expect(pQueue.head.data).toEqual({ id: 1 });
        expect(pQueue.head.next.data).toEqual({ id: 2 });
      });

      it('should add an element with priority before the element with same priority', () => {
        const pQueue = new PriorityQueue();
        pQueue.add(1, { id: 1 });
        pQueue.add(1, { id: 2 });
        expect(pQueue.head.data).toEqual({ id: 2 });
        expect(pQueue.head.next.data).toEqual({ id: 1 });
      });

      it('should throw an error if priority is not a number type', () => {
        const pQueue = new PriorityQueue();
        expect(pQueue.add('top', { id: 1 })).toThrow('You can not provide priority of type not a number');
      });
    });

    describe('.push method', () => {
      it('should add an element with lower priority key to the head of queue', () => {
        const pQueue = new PriorityQueue();
        pQueue.push({ id: 2 }, 2);
        pQueue.push({ id: 1 }, 1);
        expect(pQueue.head.data).toEqual({ id: 1 });
        expect(pQueue.head.next.data).toEqual({ id: 2 });
      });
    });

    describe('.unshift method', () => {
      it('should add an element with lower priority key to the head of queue', () => {
        const pQueue = new PriorityQueue();
        pQueue.unshift({ id: 2 }, 2);
        pQueue.unshift({ id: 1 }, 1);
        expect(pQueue.head.data).toEqual({ id: 1 });
        expect(pQueue.head.next.data).toEqual({ id: 2 });
      });
    });

    describe('.getMax method', () => {
      it('should take an element from queue with MAX priority', () => {
        const pQueue = new PriorityQueue();
        pQueue.add(1, { id: 1 });
        pQueue.add(5, { id: 5 });
        pQueue.add(2, { id: 2 });
        expect(pQueue.getMax()).toEqual({ id: 5 });
        expect(pQueue.length).toBe(2);
      });
    });

    describe('.getMin method', () => {
      it('should take an element from queue with MIN priority', () => {
        const pQueue = new PriorityQueue();
        pQueue.add(1, { id: 1 });
        pQueue.add(5, { id: 5 });
        pQueue.add(2, { id: 2 });
        expect(pQueue.getMin()).toEqual({ id: 1 });
        expect(pQueue.length).toBe(2);
      });
    });
  });
});