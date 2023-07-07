"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EmpTable =
/*#__PURE__*/
function () {
  function EmpTable(employeesArray) {
    _classCallCheck(this, EmpTable);

    this.employeesArray = employeesArray;
  }

  _createClass(EmpTable, [{
    key: "getHtml",
    value: function getHtml() {
      var table = document.createElement('table');
      table.classList.add('table');
      var tHead = document.createElement('thead');
      table.prepend(tHead);
      ['First Name', 'Last Name', 'Project', 'Position', 'Salary'].forEach(function (thTitle) {
        var th = document.createElement('th');
        th.innerText = thTitle;
        tHead.append(th);
      });
      var tbody = document.createElement('tbody');
      this.employeesArray.forEach(function (employee) {
        var tr = document.createElement('tr');
        tHead.append(tr);
        var fName = document.createElement('td');
        fName.innerText = employee.firstName;
        tr.append(fName);
        var lName = document.createElement('td');
        lName.innerText = employee.lastName;
        tr.append(lName);
        var project = document.createElement('td');
        project.innerText = employee.project;
        tr.append(project);
        var position = document.createElement('td');
        position.innerText = employee.position;
        tr.append(position);
        var salary = document.createElement('td');
        salary.innerText = employee.salary;
        tr.append(salary);
      });
      return table;
    }
  }]);

  return EmpTable;
}();

var _default = EmpTable;
exports["default"] = _default;