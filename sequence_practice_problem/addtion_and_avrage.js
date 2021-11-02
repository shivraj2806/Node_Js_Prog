/* ADDITION AND AVORAGE OF 5 RANDOM TWO DIGIT NUMBER */

function additionAndAvorage() {
    var sum = 0;
    let avg;
    for (var i = 0; i < 5; i++) {
        var x = (Math.floor(Math.random() * 89) + 10);
           console.log (" For index " + (i) + " value " + x);
        sum = sum + x;
    }
    console.log ("ADDITION "+sum);
    avg = (sum / 5);
    console.log ("AVG "+avg);
}

console.log(additionAndAvorage());