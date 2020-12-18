import Queue from './queue';

describe('Queue', () => {
  let queue;
  beforeEach(() => {
    queue = new Queue();
  });
  describe('constructor', () => {
    it('should create object with default params', () => {
      expect(queue).toBeInstanceOf(Queue);
      expect(queue).toHaveProperty('length', 0);
      expect(queue).toHaveProperty('head', null);
      expect(queue).toHaveProperty('tail', null);
    });
  });

  describe('methods', () => {
    it('should add element to start of the queue', () => {
      queue.unshift({ id: 1 });
      queue.unshift({ id: 2 });
      expect(queue.length).toBe(2);
      expect(queue.head.data).toEqual({ id: 2 });
      expect(queue.head.next).toHaveProperty('data', { id: 1 });
      expect(queue.tail.data).toEqual({ id: 1 });
      expect(queue.unshift({ id: 3 })).toBe(3);
    });

    it('should add element to end of the queue', () => {
      queue.push({ id: 1 });
      queue.push({ id: 2 });
      expect(queue.length).toBe(2);
      expect(queue.head.data).toEqual({ id: 1 });
      expect(queue.head.next).toHaveProperty('data', { id: 2 });
      expect(queue.tail.data).toEqual({ id: 2 });
      expect(queue.push({ id: 3 })).toBe(3);
    });

    describe('.pop() method', () => {
      it('should remove element from end of the queue', () => {
        queue.push({ id: 1 });
        queue.push({ id: 2 });
        expect(queue.pop()).toEqual({ id: 2 });
        expect(queue.length).toBe(1);
        expect(queue.head.data).toEqual({ id: 1 });
      });

      it('should return "null" if queue is empty', () => {
        expect(queue.pop()).toEqual(null);
      });
    });

    describe('.shift() method', () => {
      it('should remove element from start of the queue', () => {
        queue.push({ id: 1 });
        queue.push({ id: 2 });
        expect(queue.shift()).toEqual({ id: 1 });
        expect(queue.length).toBe(1);
        expect(queue.head.data).toEqual({ id: 2 });
      });

      it('should return "null" if queue is empty', () => {
        expect(queue.shift()).toEqual(null);
      });
    });
  });
});