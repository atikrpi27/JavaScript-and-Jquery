const input = document.querySelector("input");
input.addEventListener("change", changeHanderel);

function changeHanderel(event){
    // console.log(event);
    // document.write(event);
    // document.write(event.type);
    // document.write(event.target);
    // console.log(event.target);
    // console.log(event.target.id);
    // document.write(event.target.id);
    // document.write(event.target.name);
    // console.log(event.target.name);
    document.write(event.target.value);
    console.log(event.target.value);
};