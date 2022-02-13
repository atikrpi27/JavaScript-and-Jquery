//Create a Object
document.write("Create a object"  + "<br>");
var student = {
    name : "Atik",
    age : 24,
    cgpa : 3.89,
    language : ['Bangla','English']
}

document.write("Student Details: " + student.name + ", " + student.age  + ", " + student.cgpa  + ", " + student.language + "<br>");

var student1 = {
    name : "Atik1",
    age : 24,
    cgpa : 3.89,
    language : ['Bangla','English']
}

document.write("Student1 Details: " + student1.name + ", " + student1.age  + ", " + student1.cgpa  + ", " + student1.language  + "<br>"  + " <br> ");


//Constructor

document.write("Create a Constructor"  + "<br>");

function Student(name,age,cgpa,language){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.language = language;
}
var student1 = new Student("Atik", 24, 3.89,  ['Bangla','English']);
var student2 = new Student("Atiksdf", 244, 3.49,  ['Bangla','English']);
document.write("Student1 Details using Constructor: " + student1.name + ", " + student1.age  + ", " + student1.cgpa  + ", " + student1.language  + "<br>");

document.write("Student2 Details using Constructor: " + student2.name + ", " + student2.age  + ", " + student2.cgpa  + ", " + student2.language  + "<br>"  + " <br> ");

