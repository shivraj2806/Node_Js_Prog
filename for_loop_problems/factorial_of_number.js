/*  Write a program that computes a factorial of a number taken as input. */

var readline = require('readline');
        var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});

rl.question("Enter the number :" , function (x) {
	var number = parseFloat(x);
	factorialOfNumber(number);

            rl.close();
         });

function factorialOfNumber(number){

    factorial = 1;
    for (var i=2; i<=number; i++) {
        factorial = (factorial * i);
    }
    console.log(factorial);       
}

