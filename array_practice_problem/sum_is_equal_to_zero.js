/* Write a Program to show Sum of three Integer adds to ZERO */

const arr = [0, -1, 2, -3, 1];
     
function findTriplets(arr) {
    let found = false;
    for (var i = 0; i < arr.length - 2; i++) {
    for (var j = i + 1; j < arr.length - 1; j++) {
        for (var k = j + 1; k < arr.length; k++) {
            if (arr[i] + arr[j] + arr[k] === 0)
            {
                console.log(arr[i]);
                console.log(" ");
                console.log(arr[j]);
                console.log(" ");
                console.log(arr[k]);
                console.log("<br>");
                found = true;
                
            }
        }
    }

    if(found === false) {
        console.log (" not exist ");
    }
}
}
console.log(findTriplets(arr));
