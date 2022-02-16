//Guessing number Game

var won_no = 0;
var lost_no = 0;

for (i = 0; i <= 4; i++) {
    var num = parseInt(prompt("Enter your Guesse number 1 to 5: "));
    var randomNumber = (Math.floor(Math.random() * 5) + 1);

    if (num == randomNumber) {
        document.write("You are won." + "<br>");
        won_no++;
    }

    else {
        document.write("You are fail. Random number was: " + randomNumber + "<br>");
        lost_no++;
    }
}

document.write("<br>" + "You are won " + won_no + " times" + "<br>");
document.write("You are lost " + lost_no + " times");