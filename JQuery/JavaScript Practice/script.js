/* ============= Createn Function =============== */
document.write("<h1>Js Function: </h1>");

function avg(a, b) {
  return parseInt(a + b) / 2;
}

document.write("Average is: " + avg(4, 6));
document.write("<br>");

//user input
let c = parseInt(prompt("Enter Your value of A: "));
let d = parseInt(prompt("Enter Your value of B: "));
document.write("Input from user average is: " + parseInt(avg(c, d)));

/* =============== Create Object =============== */

document.write("<h1>Js Object: </h1>");

var student = {
  firstName: "Atikur",
  lastName: "Rahman",
  studentName: "Atik",
  studentId: 200015,
  studentAddress: "Dhaka, Bangladesh.",
};

document.write(
  "Student Name is: " +
    student.studentName +
    ", " +
    "Student Id is: " +
    student.studentId +
    ", " +
    "And student locate at: " +
    student.studentAddress
);

// document.querySelector(".jsDemo").innerHTML = "Student Name is: " + student.studentName + ", " + "Student Id is: " + student.studentId + ", " + "And student locate at: " + student.studentAddress

document.write(student["firstName"] + " " + student["lastName"]); //Accessing Object Properties

/*================= Accessing Object Methods ==================*/

const person = {
  name: "Atikur Rahman",
  age: 24,
  id: 105,
  details: function () {
    return (
      "This Person Name is: " +
      this.name +
      ". Age is: " +
      this.age +
      ", Id is: " +
      this.id
    );
  },
};

document.write("<br>");
document.write("<br>" + person.details());
document.write("<br>");

/*================= Array ==================*/
document.write("<h1>Array: </h1>");

var array = ["apple", "banana", "Orange", "Mango"];
document.write(array); //output full array
console.log(array); //output full array
console.log("Array Length: " + array.length); //check array length
console.log(array[0]); //Accessing the First Array Element
console.log(array[array.length - 1]); //Accessing the Last Array Element
console.log(array[array.length - 2]);
document.write("<br>");

//loop in array
document.write("<h3>For Loop in Array: </h3>");
for (let i = 0; i < array.length; i++) {
  document.write(array[i]);
  document.write("<br>");
}

//Sort elements of newArray
var newArray = [5, 4, 8, 9];
for (let i = 0; i < 5; i++) {
  var sort = newArray.sort();
}
document.write("<br>");
// console.log(sort)
document.write("Sorted array is: " + sort);
document.write("<br>");
document.write("<br>");

//push element in array
array.push("Jackfruit");
document.write("After push array is: " + array);
document.write("<br>");

//Append new element using length property
array[array.length] = "apple2";
document.write("After using length property array is: " + array);
document.write("<br>");

//pop element in array
array.pop();
document.write("After pop array is: " + array);
document.write("<br>");

//Delete element using delete property
delete array[2];
document.write("After using delete property array is: " + array);
document.write("<br>");
document.write("<br>");

//Shifting element in array
array.shift();
document.write("After shifting array is: " + array);
document.write("<br>");

//Unshifting element in array
array.unshift("Guava");
document.write("After Unshifting array is: " + array);
document.write("<br>");
document.write("<br>");

document.write("Now Array is: " + array);
document.write("<br>");
//Slice element in array
let narr = array.slice(1, 4); //selects from the start argument, and up to (but not including) the end.
document.write("After slice, Array is: " + narr);
document.write("<br>");
document.write("<br>");

//Splice element in array
let narray = ["Banana", "Orange", "Lemon", "Apple", "Mango", "Guava"];
document.write("Now Array is: " + narray);
document.write("<br>");
narray.splice(2, 3); //(2) means where new elements should be added (spliced in). And (3) defines how many elements should be removed.
document.write("After splice, Array is: " + narray);
document.write("<br>");
document.write("<br>");

//forEach and Callback Function
document.write("<h3>forEach and Callback Function </h3>");

let numbers = [45, 4, 9, 16, 25];
numbers.sort(function (a, b) {
  return a - b;
});
let txt = "";

numbers.forEach(function myFunction(value) {
  txt += value + "<br>";
});
document.write(txt);

/*================= Js Class ==================*/
document.write("<h1>JS Class: </h1>");
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
var stuName = new Student("Atik", 24);
document.write(
  "Your name is: " + stuName.name + ". " + "And age is: " + stuName.age
);
document.write("<br>");

class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}
var myCar = new Car("Ford", 2010);
document.write(
  "Your car name is: " +
    myCar.model +
    ", This car is " +
    myCar.age() +
    " years old "
);
document.write("<br>");