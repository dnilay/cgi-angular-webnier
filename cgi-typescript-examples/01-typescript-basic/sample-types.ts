let found: boolean = true;
let grade: number = 88.6;
let firstName: string = "John";
let lastName: string = 'Doe';
let fixed:any="tsc sam  ";
console.log(fixed);
fixed=10.0;
console.log(fixed)
fixed=new Date();
console.log(fixed);
// let's break it!
/*
found = 0;
grade = "A";
firstName = false;
*/

console.log(found);
console.log("The grade is " + grade);
//procedure-1
console.log("First Name: ",firstName," Last Name: ",lastName);
//procedure-2
console.log("First Name: "+firstName+"Last Name: "+lastName);
//procedure-3
console.log(`First Name Is: ${firstName} And Last Name is: ${lastName} And Grade Is: ${grade} it is ${found}`);
console.log("First Name ",firstName+" Last Name: "+lastName)
