"use strict";

var _mappedPriorityQueue = _interopRequireDefault(require("./mapped-priority-queue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mpQueue = new _mappedPriorityQueue["default"]();
console.log('-->mpQueue', mpQueue);
mpQueue.add(0, {
  id: 1
});
mpQueue.add(0, {
  id: 2
});
console.log('-->mpQueue', mpQueue.has('21312'));
console.log('-->mpQueue', mpQueue.has(5)); // mpQueue.add(1, undefined);
// console.log('-->mpQueue', mpQueue.map);
// console.log('-->mpQueue.map[undefined]', mpQueue.map[undefined]);