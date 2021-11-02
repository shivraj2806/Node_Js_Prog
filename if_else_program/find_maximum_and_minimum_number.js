/* FIND MAXIMUM AND MIMIMUM VALUE */

function maxAndMini () {
    var maximum = 0;
    var minimum = 999;
    for (var i = 0; i < 5; i++) {
        var x = (Math.floor(Math.random() * 899) + 100);
        console.log("Index : " +i + " value " + " " +x);
        if (x > maximum) {
            maximum = x;
        }
        if (x < minimum) {
            minimum = x;
        }
    }
    console.log ("maximum : " + maximum);
    console.log("minimum :" + minimum);
}
    console.log(maxAndMini());