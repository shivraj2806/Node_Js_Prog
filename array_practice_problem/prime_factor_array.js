/*  Extend the Prime Factorization Program to store all the Prime Factors of a
number n into an array and finally display the output.*/

let numb = 10;
let factorsArray = new Array();
console.log("Factors of the Given Number: ");

//To check for prime factors of a number
function primeFactors(numb) {
    for (let i = 2; i <= numb; i++) {

        while (numb % i == 0) {
            factorsArray.push(i);
            numb /= i;
        }
    }
    return factorsArray;
}

console.log(primeFactors(numb));