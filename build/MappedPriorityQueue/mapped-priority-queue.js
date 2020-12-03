"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _priorityQueue = _interopRequireDefault(require("../PriorityQueue/priority-queue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MappedPriorityQueue = /*#__PURE__*/function (_PriorityQueue) {
  _inherits(MappedPriorityQueue, _PriorityQueue);

  var _super = _createSuper(MappedPriorityQueue);

  function MappedPriorityQueue() {
    var _this;

    _classCallCheck(this, MappedPriorityQueue);

    _this = _super.call(this);
    _this.map = {};
    return _this;
  }

  _createClass(MappedPriorityQueue, [{
    key: "add",
    value: function add(priority, data) {
      this.map[data.id] = data;
      return _get(_getPrototypeOf(MappedPriorityQueue.prototype), "add", this).call(this, priority, data);
    }
  }, {
    key: "pop",
    value: function pop() {
      var res = _get(_getPrototypeOf(MappedPriorityQueue.prototype), "pop", this).call(this);

      if (res != null) delete this.map[res.id];
      return res;
    }
  }, {
    key: "shift",
    value: function shift() {
      var res = _get(_getPrototypeOf(MappedPriorityQueue.prototype), "shift", this).call(this);

      if (res != null) delete this.map[res.id];
      return res;
    }
  }, {
    key: "getById",
    value: function getById(id) {
      return this.map[id];
    }
  }, {
    key: "removeById",
    value: function removeById(id) {
      delete this.map[id];
      var item = this.head;
      if (item.id !== id) while ((item = item.next) != null && item.id !== id) {
        ;
      }

      if (item != null) {
        item.prev.next = item.next;
        item.next.prev = item.prev;
      }
    }
  }, {
    key: "has",
    value: function has(id) {
      return this.map[id] != null;
    }
  }]);

  return MappedPriorityQueue;
}(_priorityQueue["default"]);

exports["default"] = MappedPriorityQueue;