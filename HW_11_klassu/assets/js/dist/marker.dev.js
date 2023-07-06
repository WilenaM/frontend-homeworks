"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Marker =
/*#__PURE__*/
function () {
  function Marker(color, amount) {
    _classCallCheck(this, Marker);

    this.colorCss = color;
    this.amount = amount;
    this.paintPerSympol = 0.5;
  }

  _createClass(Marker, [{
    key: "printText",
    value: function printText(text) {
      var symbolAmount = text.replaceAll(' ', '').length;
      var paintForText = symbolAmount * this.paintPerSympol;

      if (this.amount >= paintForText) {
        this.amount = this.amount - paintForText;
        return "<p style=\"color: ".concat(this.colorCss, "\">").concat(text, "</p>");
      } else {
        alert('Paint is not enough for this text');
        return '';
      }
    }
  }, {
    key: "color",
    get: function get() {
      return this.colorCss;
    }
  }, {
    key: "paintAmount",
    get: function get() {
      return this.amount + '%';
    }
  }]);

  return Marker;
}();

var _default = Marker;
exports["default"] = _default;