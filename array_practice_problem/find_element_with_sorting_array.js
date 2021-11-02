/*  Write a program in the following steps
a. Generates 10 Random 3 Digit number.
b. Store this random numbers into a array.
c. Then find the 2nd largest and the 2nd smallest element with sorting the array.  */

let i = 0;
let numb = 0;
let randomNumbArr = new Array();

//To generate 10 Random Numbers
for (i = 0; i < 10; i++) {
    numb = (Math.floor(Math.random() * 899) + 100);
    console.log(numb);
    randomNumbArr.push(numb);
}

console.log(randomNumbArr);

//To sort the Array and find 2nd largest and smallest number
let sortArr = randomNumbArr.sort();
console.log(sortArr);

console.log("Second Smallest Number in the Array: " + sortArr[1]);
console.log("Second Largest Number in the Array: " + sortArr[8]);