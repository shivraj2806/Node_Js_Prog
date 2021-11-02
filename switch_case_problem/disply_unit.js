/*  Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...   */

var readline = require('readline');
var rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question("Enter the number :" , function (x) {
    rl.question("Enter the position :" , function (y){
var number = parseFloat(x);
var position = parseFloat(y);
displayUnit(number,position);

    rl.close();
    });
});

function displayUnit(number,position){
    switch (position){
        case (1):
            console.log ((number % 10));
             break;
        case (10):
            console.log (((number/10)%10));
            break;
        case (100): 
            console.log(((number/100)%10));
            break;
        case (1000): 
            console.log((number/1000));
            break;
    }
}