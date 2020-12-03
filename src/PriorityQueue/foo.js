import PriorityQueue from './priority-queue';

const pQueue = new PriorityQueue();
console.log('-->pQueue', pQueue);
pQueue.push({ id: 1 }, 'a');
pQueue.push({ id: 2 }, '23e3qd3q2');
pQueue.push({ id: 3 }, '......');
console.log('-->pQueue', pQueue);