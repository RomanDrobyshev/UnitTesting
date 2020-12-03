"use strict";

var _priorityQueue = _interopRequireDefault(require("./priority-queue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var pQueue = new _priorityQueue["default"]();
console.log('-->pQueue', pQueue);
pQueue.push({
  id: 1
}, 'a');
pQueue.push({
  id: 2
}, '23e3qd3q2');
pQueue.push({
  id: 3
}, '......');
console.log('-->pQueue', pQueue);