let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];
//traditional approach
for (let i = 0; i <sportsOne.length; i++) {
  console.log(sportsOne[i]);
}
//enhanced for loop
for (let i of sportsOne)
{
  if(i=='Cricket')
  {
    console.log(`${i} is my favorite sports`)
  }
  else {
    console.log(`${i}`);
  }
}
