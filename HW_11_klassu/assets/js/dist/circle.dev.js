"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Circle =
/*#__PURE__*/
function () {
  function Circle(radius) {
    _classCallCheck(this, Circle);

    this.r = radius;
  }

  _createClass(Circle, [{
    key: "area",
    value: function area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }, {
    key: "length",
    value: function length() {
      return Math.PI * this.diameter;
    }
  }, {
    key: "radius",
    get: function get() {
      return this.r;
    },
    set: function set(value) {
      this.r = value;
    }
  }, {
    key: "diameter",
    get: function get() {
      return this.r * 2;
    }
  }]);

  return Circle;
}();