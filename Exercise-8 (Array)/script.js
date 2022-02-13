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


//Array shift (oposite of pop)
document.write("Values of Array: " + Array + "<br>");
Array.shift();
document.write("Values of Array after using Shift function: " + Array + "<br>" + "<br>");


//Array unshift (oposite of push)

var number = [11,12,13]
document.write("Values of Array: " + number + "<br>");
number.unshift("10");
document.write("Values of Array after using unshift function: " + number + "<br>" + "<br>");


//Array splice

number.splice(1,0,"Atik",10.5,"Noyon");
document.write("Adding Values in position of 2 of Array using Splice function: " + number + "<br>");
number.splice(2,1);
document.write("Removing Values in position of 2 of Array using Splice function: " + number + "<br>" + "<br>");

//Array Concatenation

var country1 = ["Bangladesh" , "India", "Pakistan"];
var country2 = ["Australia" , "South Africa"];
document.write("Values of country1: " + country1 + "<br>");
document.write("Length of country1: " + country1.length + "<br>");
var country2 = ["Australia" , "South Africa"];
document.write("Values of country2: " + country2 + "<br>");
document.write("Length of country2: " + country2.length + "<br>");
document.write("Concatenate of 2Arrays: " + country1.concat(country2) + "<br>" + "<br>")


//Loop in Array

var num = [1,2,3,4,5,6,7,8,9];
var sum = 0;

document.write("Values of Array: " + num + "<br>");
var lengths = parseInt( num.length + "<br>");
document.write("Length of Array: " + num.length + "<br>");
document.write("Output of Array using Loop: " + "<br>");

for(i=0; i<lengths; i++){
    // console.log(num[i]);
    document.write(num[i] + "<br>");
    sum += num[i];
    
}
//sum of Array
document.write("Sum of Array's values: " + sum + "<br>")


//Array sortting and reversing

var bag = ['a','d','b','c','e']
document.write("Values of Array: " + bag + "<br>");
bag.sort();
document.write("Values of Array after sort: " + bag + "<br>");
bag.reverse();
document.write("Values of Array after reverse: " + bag + "<br>" + "<br>");

//Identify the heighest Score Program

document.write("Heighest Score Program:" + "<br>");
var score = [10,23,45,64,28,33,44]
document.write("All Scores are: " + score + "<br>")

function highestScore(score){
    var max = score[0];
    for(x = 1; x < score.length; x++){
        if(max < score[x]){
            max = score[x];
        }
    }
    return max;
}

var maxScore = highestScore(score);
document.write("Highest score is: " + maxScore + "<br>" + "<br>")