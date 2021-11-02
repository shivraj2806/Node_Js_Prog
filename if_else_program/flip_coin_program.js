/* FLIP COIN AND PRINT HEAD OR TAIL */

function flipCoin() {
    var x =  Math.floor(Math.random() * 10) % 2;
    if(x == 0) {
          console.log ("HEADS");
    }else {
          console.log("TAILS");
    }
  }
      console.log (flipCoin());