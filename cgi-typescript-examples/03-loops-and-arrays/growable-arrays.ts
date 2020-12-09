let sportsTwo: string[] = ["Golf", "Cricket", "Tennis"];
console.log(sportsTwo.length)
sportsTwo.push("Baseball");
sportsTwo.push("Football");
console.log(sportsTwo.length);
let result=sportsTwo.pop();
console.log(sportsTwo.length);
console.log(result);
console.log("traditional approach");
for (let i=0; i<sportsTwo.length; i++)
{
    console.log(sportsTwo[i]);
}
console.log("enhanced for loop approach");
for (let tempSports of sportsTwo) {

    console.log(tempSports);
}
