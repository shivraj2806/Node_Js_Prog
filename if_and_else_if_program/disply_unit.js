/* Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,... */

var readline = require('readline');
        var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});

rl.question("Enter the number :" , function (x) {
	var number = parseFloat(x);
	displayUnit(number);

            rl.close();
         });

function displayUnit(number){


let x = (number % 10);
let y = ((number/10)%10);
let z = ((number/100)%10);
let t = (number/1000);
console.log (" unit : " + x + " " + " ten : " + y + " " + " hundred : " + z + " " + " thousand : " + t );

}
