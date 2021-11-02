/* Read a Number and Display the week day (Sunday, Monday,...) */

var readline = require('readline');
        var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});

rl.question("Enter the number :" , function (x) {
	var number = parseFloat(x);
	displayWeekDays(number);

            rl.close();
         });

function displayWeekDays(number){

        if( number == 0 ){
            console.log ("sunday");
        }else if ( number == 1 ){
            console.log ("monday");
        }else if ( number == 2 ){
            console.log ("tuesday");
        }else if ( number == 3 ){
            console.log ("wednesday");
        }else if ( number == 4 ){
            console.log ("thursday");
        }else if ( number == 5 ){
            console.log ("friday");
        }else {
            console.log ("saturday");
        }
}
