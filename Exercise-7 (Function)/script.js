//create function
function atik() {
    var num = 5;
    var result = num * num;
    document.write("Square of 5 is: " + result + "<br>")
}

atik();

//passing peramitter
function add(num1, num2) {
    var num1, num2;
    add = num1 + num2;
    document.write("Addition of " + num1 + " and " + num2 + " is: " + add + "<br>")
}
add(10, 12);

//input from user
function userInput(number1, number2) {
    var number1, number2;
    number1 = parseInt(prompt("Enter Your First Number: "))
    number2 = parseInt(prompt("Enter Your Second Number: "))
    res = parseInt(number1 + number2);
    // document.write("Addition of " + number1 + " and " + number2 + " is: " + res + "<br>")
    return res
}

document.write("Addition of  number1  and  number2 is: " + userInput());

//positive or negative
//using userInput function number1 variable
function test() {
    number1 = parseInt(prompt("Enter Your Test Number: "))
    test = number1 > 0 ? 'Your number is positive.' : 'Your number is negative.'
    document.write("<br>" + test)
}
test()