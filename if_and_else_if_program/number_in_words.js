/* Read a single digit number and write the number in word  */

var readline = require('readline');
        var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});

rl.question("Enter the number :" , function (x) {
	var number = parseFloat(x);
	numberInWord(number);

            rl.close();
         });

function numberInWord(number){

        if( number == 0 ){
            console.log ("zero");
        }else if ( number == 1 ){
            console.log ("one");
        }else{
            console.log ("two");
        }
}

