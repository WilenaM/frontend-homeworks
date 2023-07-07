class EmpTable {
    constructor (employeesArray){
        this.employeesArray = employeesArray;
    }

    getHtml () {
        const table = document.createElement('table');
        table.classList.add('table');
        const tHead = document.createElement('thead');
        table.prepend(tHead);
       
        ['First Name', 'Last Name', 'Project','Position','Salary']
        .forEach(function(thTitle) {
            const th = document.createElement('th');
            th.innerText=thTitle;
            tHead.append(th);
        })

        const tbody = document.createElement('tbody');
        this.employeesArray.forEach(function(employee) {
            const tr = document.createElement('tr');
            tHead.append(tr);
            const fName= document.createElement('td');
            fName.innerText = employee.firstName;
            tr.append(fName);
            const lName= document.createElement('td');
            lName.innerText = employee.lastName;
            tr.append(lName);
            const project = document.createElement('td');
            project.innerText = employee.project;
            tr.append(project);
            const position = document.createElement('td');
            position.innerText = employee.position;
            tr.append(position);
            const salary = document.createElement('td');
            salary.innerText = employee.salary;
            tr.append(salary);
        })

        return table;


    }
    
} 

export default EmpTable;