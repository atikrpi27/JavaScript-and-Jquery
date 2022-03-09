const input = document.querySelector("input");
input.addEventListener("change", changeHanderel);

function changeHanderel(event){
    console.log(event);
    document.write(event+"<br>");
    document.write(event.type+"<br>");
    document.write(event.target+"<br>");
    console.log(event.target);
    console.log(event.target.id);
    document.write(event.target.id+"<br>");
    document.write(event.target.name+"<br>");
    console.log(event.target.name);
    document.write(event.target.value+"<br>");
    console.log(event.target.value);
};