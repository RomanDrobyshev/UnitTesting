import PriorityQueue from './priority-queue';

describe('PriorityQueue', () => {
  let pQueue;
  beforeEach(() => {
    pQueue = new PriorityQueue();
  });
  describe('constructor', () => {
    it('should create object with default params', () => {
      expect(pQueue).toBeInstanceOf(PriorityQueue);
      expect(pQueue).toHaveProperty('length', 0);
      expect(pQueue).toHaveProperty('head', null);
      expect(pQueue).toHaveProperty('tail', null);
    });
  });

  describe('methods', () => {
    describe('.add method', () => {
      it('should throw an error if added item with no priority', () => {
        expect(pQueue.add()).toThrow('You can not add an element without priority');
        expect(pQueue.length).toBe(0);
      });

      it('should throw an error if priority is not a number type', () => {
        expect(pQueue.add('top', { id: 1 })).toThrow('You can not provide priority of type not a number');
        expect(pQueue.length).toBe(0);
      });

      it('should add an element with lower priority key to the head of queue', () => {
        pQueue.add(2, { id: 2 });
        pQueue.add(1, { id: 1 });
        expect(pQueue.length).toBe(2);
        expect(pQueue.head.data).toEqual({ id: 1 });
        expect(pQueue.head.next.data).toEqual({ id: 2 });
        expect(pQueue.tail.data).toEqual({ id: 2 });
        expect(pQueue.add(3, { id: 3 })).toBe(3);
      });

      it('should add an element with priority before the element with same priority', () => {
        pQueue.add(1, { id: 1 });
        pQueue.add(1, { id: 2 });
        expect(pQueue.length).toBe(2);
        expect(pQueue.head.data).toEqual({ id: 2 });
        expect(pQueue.head.next.data).toEqual({ id: 1 });
        expect(pQueue.add(3, { id: 3 })).toBe(3);
      });
    });

    describe('.push method', () => {
      it('should add an element with lower priority key to the head of queue', () => {
        pQueue.push({ id: 2 }, 2);
        pQueue.push({ id: 1 }, 1);
        expect(pQueue.length).toBe(2);
        expect(pQueue.head.data).toEqual({ id: 1 });
        expect(pQueue.head.next.data).toEqual({ id: 2 });
        expect(pQueue.push({ id: 3 }, 3)).toBe(3);
      });
    });

    describe('.unshift method', () => {
      it('should add an element with lower priority key to the head of queue', () => {
        pQueue.unshift({ id: 2 }, 2);
        pQueue.unshift({ id: 1 }, 1);
        expect(pQueue.length).toBe(2);
        expect(pQueue.head.data).toEqual({ id: 1 });
        expect(pQueue.head.next.data).toEqual({ id: 2 });
        expect(pQueue.unshift({ id: 3 }, 3)).toBe(3);
      });
    });

    describe('.getMax method', () => {
      it('should take an element from queue with MAX priority', () => {
        pQueue.add(1, { id: 1 });
        pQueue.add(5, { id: 5 });
        pQueue.add(2, { id: 2 });
        expect(pQueue.getMax()).toEqual({ id: 5 });
        expect(pQueue.length).toBe(2);
      });
    });

    describe('.getMin method', () => {
      it('should take an element from queue with MIN priority', () => {
        pQueue.add(1, { id: 1 });
        pQueue.add(5, { id: 5 });
        pQueue.add(2, { id: 2 });
        expect(pQueue.getMin()).toEqual({ id: 1 });
        expect(pQueue.length).toBe(2);
      });
    });
  });
});