//alert a message
// alert("Hi i'm Atikur Rahman");


//variable
var name = "Atik";
var age = 24;

//output
document.write(name + "<br>");
console.log(age);

//check data type
document.write(typeof(name));
document.write(typeof(age));
console.log(typeof(name));
console.log(typeof(age));

//Parse
var num = 10.25;
var num1 = 101.255566;

num = parseInt(num);
document.write("</br>" + num);
num1 = parseFloat(num1);
document.write("</br>" + num1);

var num2 = num1.toFixed(1);
var num3 = num1.toFixed(3);

document.write('</br>' + num2);
document.write('</br>' + num3);

var num4 = num1.toPrecision(5);

document.write('</br>' + num4 + '</br>');


//Output Result of addition

add = parseInt(num + num1);
document.write("Number 1 =" + num + '</br>' + "Number 2 =" + parseInt(num1) + '</br>' + " Then the Result of addition = " + add);