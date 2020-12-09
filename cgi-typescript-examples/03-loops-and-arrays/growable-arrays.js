var sportsTwo = ["Golf", "Cricket", "Tennis"];
console.log(sportsTwo.length);
sportsTwo.push("Baseball");
sportsTwo.push("Football");
console.log(sportsTwo.length);
var result = sportsTwo.pop();
console.log(sportsTwo.length);
console.log(result);
console.log("traditional approach");
for (var i = 0; i < sportsTwo.length; i++) {
    console.log(sportsTwo[i]);
}
console.log("enhanced for loop approach");
for (var _i = 0, sportsTwo_1 = sportsTwo; _i < sportsTwo_1.length; _i++) {
    var tempSports = sportsTwo_1[_i];
    console.log(tempSports);
}
