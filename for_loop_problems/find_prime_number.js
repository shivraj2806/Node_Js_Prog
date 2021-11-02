/* Write a program that takes a input and determines if the number is a prime. */

var readline = require('readline');
        var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});

rl.question("Enter the number :" , function (x) {
	var number = parseFloat(x);
	primeNumber(number);

            rl.close();
         });

function primeNumber(number){
    for (var i=2; i<=number/2; i++){
        let result = (number % i);
        if(result == 0 ){
            console.log ("Not Prime Number");
            break;
        }else{
            console.log ("prime number");
            break;
        }
    }
    
}