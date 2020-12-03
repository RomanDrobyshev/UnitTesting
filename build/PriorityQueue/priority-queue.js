"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _queue = _interopRequireDefault(require("../Queue/queue"));

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

var PriorityQueue = /*#__PURE__*/function (_Queue) {
  _inherits(PriorityQueue, _Queue);

  var _super = _createSuper(PriorityQueue);

  function PriorityQueue() {
    _classCallCheck(this, PriorityQueue);

    return _super.apply(this, arguments);
  }

  _createClass(PriorityQueue, [{
    key: "__biuldItem",
    value: function __biuldItem(priority) {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var res = (_get2 = _get(_getPrototypeOf(PriorityQueue.prototype), "__biuldItem", this)).call.apply(_get2, [this].concat(args));

      res.priority = priority;
      return res;
    }
  }, {
    key: "add",
    value: function add(priority, data) {
      switch (this.length) {
        case 0:
          this.head = this.tail = this.__biuldItem(priority, data);
          break;

        case 1:
          if (this.head.priority >= priority) {
            this.head = this.tail.prev = this.__biuldItem(priority, data, null, this.tail);
          } else {
            this.head.next = this.tail = this.__biuldItem(priority, data, this.head);
          }

          break;

        default:
          var item = this.head;

          if (item.priority >= priority) {
            this.head = item.prev = this.__biuldItem(priority, data, null, item);
          } else {
            while (true) {
              item = item.next;

              if (item == null) {
                this.tail = this.tail.next = this.__biuldItem(priority, data, this.tail);
                break;
              }

              if (item.priority >= priority) {
                item.prev = item.prev.next = this.__biuldItem(priority, data, item.prev, item);
                break;
              }
            }
          }

      }

      return this.length++;
    }
  }, {
    key: "getMax",
    value: function getMax() {
      return this.pop();
    }
  }, {
    key: "getMin",
    value: function getMin() {
      return this.shift();
    }
  }, {
    key: "push",
    value: function push(data) {
      var priority = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this.add(priority, data);
    }
  }, {
    key: "unshift",
    value: function unshift(data) {
      var priority = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this.add(priority, data);
    }
  }]);

  return PriorityQueue;
}(_queue["default"]);

exports["default"] = PriorityQueue;