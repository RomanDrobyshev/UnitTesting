import MappedPriorityQueue from './mapped-priority-queue';

describe('MappedPriorityQueue', () => {
  let mpQueue;
  beforeEach(() => {
    mpQueue = new MappedPriorityQueue();
  });
  describe('constructor', () => {
    it('should create object with default params', () => {
      expect(mpQueue).toBeInstanceOf(MappedPriorityQueue);
      expect(mpQueue).toHaveProperty('length', 0);
      expect(mpQueue).toHaveProperty('head', null);
      expect(mpQueue).toHaveProperty('tail', null);
      expect(mpQueue).toHaveProperty('map', {});
    });
  });

  describe('methods', () => {
    describe('.add method', () => {
      it('should throw an error if added item with no priority', () => {
        expect(mpQueue.add()).toThrow('You can not add an element without priority');
        expect(mpQueue.length).toBe(0);
      });

      it('should throw an error if priority is not a number type', () => {
        expect(mpQueue.add('top', { id: 1, name: 'Ivan' })).toThrow('You can not provide priority of type not a number');
        expect(mpQueue.length).toBe(0);
      });

      it('should throw an error if an element without id is added', () => {
        expect(mpQueue.add(1, { name: 'Ivan' })).toThrow('You can not provide an element without id');
        expect(mpQueue.length).toBe(0);
      });

      it('should add an element to queue map field', () => {
        mpQueue.add(0, { id: 1 });
        expect(mpQueue).toHaveProperty('map', { 1: { id: 1 } });
      });
    });

    describe('.pop method', () => {
      it('should remove an element from end of queue', () => {
        mpQueue.add(0, { id: 1 });
        mpQueue.add(0, { id: 2 });
        mpQueue.pop();
        expect(mpQueue.length).toBe(1);
        expect(mpQueue).toHaveProperty('map', { 2: { id: 2 } });
        expect(mpQueue.pop()).toEqual({ id: 2 });
        expect(mpQueue.length).toBe(0);
      });

      it('should return "null" if queue is empty', () => {
        expect(mpQueue.pop()).toEqual(null);
      });
    });

    describe('.shift method', () => {
      it('should remove an element from start of queue', () => {
        mpQueue.add(0, { id: 1 });
        mpQueue.add(0, { id: 2 });
        mpQueue.shift();
        expect(mpQueue.length).toBe(1);
        expect(mpQueue).toHaveProperty('map', { 1: { id: 1 } });
      });

      it('should return "null" if queue is empty', () => {
        expect(mpQueue.shift()).toEqual(null);
      });
    });

    describe('.getById method', () => {
      it('should return an element by requested id', () => {
        mpQueue.add(0, { id: 1 });
        mpQueue.add(0, { id: 2 });
        expect(mpQueue.getById(1)).toEqual({ id: 1 });
        expect(mpQueue.length).toBe(2);
      });

      it('should return "undefined" if an element with requested id is absent', () => {
        mpQueue.add(0, { id: 1 });
        mpQueue.add(0, { id: 2 });
        expect(mpQueue.getById(777)).toBe(undefined);
        expect(mpQueue.length).toBe(2);
      });

      it('should throw an error if no id', () => {
        expect(mpQueue.getById()).toThrow('You can not get an element without passing id');
      });
    });

    describe('.removeById method', () => {
      it('should remove an element from queue by its id', () => {
        mpQueue.add(0, { id: 1 });
        mpQueue.add(0, { id: 2 });
        mpQueue.removeById(1);
        expect(mpQueue.length).toBe(1);
        expect(mpQueue.head).toHaveProperty('next', null);
        expect(mpQueue).not.toHaveProperty('map', { 1: { id: 1 } });
      });

      it('should return "undefined" if an element with requested id is absent', () => {
        mpQueue.add(0, { id: 1 });
        mpQueue.add(0, { id: 2 });
        expect(mpQueue.removeById(777)).toBe(undefined);
        expect(mpQueue.length).toBe(2);
      });

      it('should throw an error if no id', () => {
        expect(mpQueue.getById()).toThrow('You can not remove an element without passing id');
      });
    });

    describe('.has method', () => {
      it('should return true if element exists in queue', () => {
        mpQueue.add(0, { id: 1 });
        expect(mpQueue.has(1)).toBe(true);
      });

      it('should return false if element exists in queue', () => {
        mpQueue.add(0, { id: 1 });
        expect(mpQueue.has(2)).toBe(false);
      });

      it('should throw an error if no id', () => {
        expect(mpQueue.has()).toThrow('You can not check an element existing without passing id');
      });
    });
  });
});
