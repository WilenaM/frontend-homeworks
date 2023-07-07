class Employee {
    constructor (firstName, lastName, position, salary, project){
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this._salary = salary;
        this.project = project;
    }

    get salary(){
        return '$' + this._salary;
    }
}

export default Employee;