/* ============= Createn Function =============== */














/* =============== Createn Object =============== */

var student = {
    firstName: "Atikur",
    lastName: "Rahman",
    studentName: "Atik",
    studentId: 200015,
    studentAddress: "Dhaka, Bangladesh."
}


document.querySelector(".jsDemo").innerHTML = "Student Name is: " + student.studentName + ", " + "Student Id is: " + student.studentId + ", " + "And student locate at: " + student.studentAddress

document.write(student["firstName"] + " " + student["lastName"])          //Accessing Object Properties


/*================= Accessing Object Methods ==================*/

const person = {
    name: "Atikur Rahman",
    age: 24,
    id: 105,
    details: function () {
        return ("This Person Name is: " + this.name + ". Age is: " + this.age + ", Id is: " + this.id)
    }
}

document.write("<br>")
document.write("<br>" + person.details())
document.write("<br>")



/*================= Array ==================*/

var array = ["apple", "banana", "Orange", "Mango"]
document.write(array)                   //output full array
console.log(array)                      //output full array
console.log("Array Length: " + array.length)               //check array length
console.log(array[0])                   //Accessing the First Array Element
console.log(array[array.length - 1])      //Accessing the Last Array Element
console.log(array[array.length - 2])
document.write("<br>")
document.write("<br>")

//loop in array
document.write("For Loop in Array:" + "<br>")
for (let i = 0; i < array.length; i++) {
    // console.log(array[i])
    document.write(array[i])
    document.write("<br>")
}

//push element in array
array.push("Jackfrut")
console.log(array)

array[array.length] = "apple2"
console.log(array)


var newArray = [5,4,8,9]
for(let i = 0; i < 5; i++){
    var sort = newArray.sort()
}
console.log(sort)

