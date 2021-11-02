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

    switch (number){
        case 0 :
            console.log ("sunday");
            break;
        case 1:
            console.log ("monday");
            break;
        case 2: 
            console.log("tuesday");
            break;
        case 3: 
            console.log("wednesday");
            break;
        case 4: 
            console.log("thursday");
            break;
        case 5: 
            console.log("friday");
            break;
        case 6: 
            console.log("saturday");
            break;    
    }

}