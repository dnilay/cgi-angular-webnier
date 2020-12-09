class Employee
{
    // properties
    //instance variables
    public firstName: string;
    public lastName: string;
    public email: string;
//constructor which is called callback because this method will call automatically
    //when the object get created
    constructor(firstName: string, lastName: string, email:string) {
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
    }
//variables which are defined within method parameters are called local variables
  public  createEmployee(firstName: string, lastName: string, email:string): string
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        return "employee created successfully"
    }

    displayEmployee():string
    {
        return`First Name: ${this.firstName} Last Name: ${this.lastName} Email: ${this.email}`;
    }
}
//employee is a variable type of reference
let employee = new Employee('Marry','Public','marry@example.com');
console.log("displaying details created by constructor: "+employee.displayEmployee());
console.log(employee.createEmployee('John', 'Doe','johndoe@gmail.com'));
console.log("displaying details created by calling createEmployee method: "+employee.displayEmployee());
this.firstName="Sachin";
console.log(this.firstName);
console.log(this);
console.log(employee);
