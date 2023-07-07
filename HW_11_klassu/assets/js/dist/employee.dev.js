"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Employee =
/*#__PURE__*/
function () {
  function Employee(firstName, lastName, position, salary, project) {
    _classCallCheck(this, Employee);

    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this._salary = salary;
    this.project = project;
  }

  _createClass(Employee, [{
    key: "salary",
    get: function get() {
      return '$' + this._salary;
    }
  }]);

  return Employee;
}();

var _default = Employee;
exports["default"] = _default;