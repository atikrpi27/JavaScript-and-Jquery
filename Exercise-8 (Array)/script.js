//create a  Array

var Array = ["Atik", "Asif", "Amin", 49, "Dhaka"];
document.write("Values of Array: " + Array + "<br>");
document.write("Length of Array: " + Array.length + "<br>");
document.write("No of 4th value of Array: " + Array[3] + "<br>" + "<br>");


//Array Push

Array.push("Amina");
Array.push("Amina1");
Array.push("Amina2");
document.write("Values of New Array using push function: " + Array + "<br>");
document.write("Length of New Array using push function: " + Array.length + "<br>");
document.write("No of 5th value of Array: " + Array[4] + "<br>" + "<br>");


//Array Pop

Array.pop()
document.write("Values of New Array using pop function: " + Array + "<br>");
document.write("Length of New Array using pop function: " + Array.length + "<br>");
document.write("No of 6th value of Array: " + Array[5] + "<br>" + "<br>");


//Array Concatenation

var country1 = ["Bangladesh" , "India", "Pakistan"];
var country2 = ["Australia" , "South Africa"];
document.write("Values of country1: " + country1 + "<br>");
document.write("Length of country1: " + country1.length + "<br>");
var country2 = ["Australia" , "South Africa"];
document.write("Values of country2: " + country2 + "<br>");
document.write("Length of country2: " + country2.length + "<br>");
document.write("Concatenate of 2Arrays: " + country1.concat(country2))