/* FIND LEAP YEAR */

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the year :" , function (x) {
	var year = parseFloat(x);
	checkLeapYear(year);

            rl.close();
         });

function checkLeapYear(year) {
    let  leapValue = false;

    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        leapValue = true;
    }

    if (leapValue)
        console.log (year + " is a leap year.");
    else
        console.log(year + " is not a leap year.");
}
   