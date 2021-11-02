/* ADDITION OF TWO RANDOM DICE NUMBER */

function addition(){
    var firstRandomNumber = (Math.floor(Math.random()* 10)+1);
    var secondRandomNumber = (Math.floor(Math.random()* 10)+1);
    console.log("FIRST NUMBER : "+firstRandomNumber)
    console.log("SECOND NUMBER : "+secondRandomNumber)
    
    console.log("ADDITION : "+(firstRandomNumber + secondRandomNumber));
    }
        console.log(addition());    
