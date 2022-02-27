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

//adding element in specific position
var heading0 = document.createElement("h3");
var text0 = document.createTextNode("This is creation H3 Tag by Javascript.");
heading0.appendChild(text0);
myDiv.insertBefore(heading0,heading1);

//Remove Element/Tag
var heading3 = document.getElementsByTagName("h1")[1];
myDiv.removeChild(heading3);