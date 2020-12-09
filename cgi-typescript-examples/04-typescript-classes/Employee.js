var Employee = /** @class */ (function () {
    //constructor which is called callback because this method will call automatically
    //when the object get created
    function Employee(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    //variables which are defined within method parameters are called local variables
    Employee.prototype.createEmployee = function (firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        return "employee created successfully";
    };
    Employee.prototype.displayEmployee = function () {
        return "First Name: " + this.firstName + " Last Name: " + this.lastName + " Email: " + this.email;
    };
    return Employee;
}());
//employee is a variable type of reference
var employee = new Employee('Marry', 'Public', 'marry@example.com');
console.log("displaying details created by constructor: " + employee.displayEmployee());
console.log(employee.createEmployee('John', 'Doe', 'johndoe@gmail.com'));
console.log("displaying details created by calling createEmployee method: " + employee.displayEmployee());
this.firstName = "Sachin";
console.log(this.firstName);
console.log(this);
console.log(employee);
