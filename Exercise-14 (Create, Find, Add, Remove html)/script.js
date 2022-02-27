//Create HTML tag

var heading1 = document.getElementsByTagName("h1")[0];
heading1.innerHTML = "Hey! My nick name is Atik."
document.getElementById("my-div").style.backgroundColor = "Gray";

//create new tag h2 in my-div
var heading2 = document.createElement("h2");
var text = document.createTextNode("This is creation H2 Tag by Javascript.");
heading2.appendChild(text);

var myDiv = document.getElementById("my-div");
myDiv.appendChild(heading2);