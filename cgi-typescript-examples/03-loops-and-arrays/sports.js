var sportsOne = ["Golf", "Cricket", "Tennis", "Swimming"];
//traditional approach
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
//enhanced for loop
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var i = sportsOne_1[_i];
    if (i === 'Cricket') {
        console.log(i + " is my favorite sports");
    }
    else {
        console.log("" + i);
    }
}
