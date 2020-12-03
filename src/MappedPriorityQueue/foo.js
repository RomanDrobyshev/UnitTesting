import MappedPriorityQueue from './mapped-priority-queue';

const mpQueue = new MappedPriorityQueue();
console.log('-->mpQueue', mpQueue);
mpQueue.add(0, { id: 1 });
mpQueue.add(0, { id: 2 });
console.log('-->mpQueue', mpQueue.has('21312'));
console.log('-->mpQueue', mpQueue.has(5));
// mpQueue.add(1, undefined);
// console.log('-->mpQueue', mpQueue.map);
// console.log('-->mpQueue.map[undefined]', mpQueue.map[undefined]);