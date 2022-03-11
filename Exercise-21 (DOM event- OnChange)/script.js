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


const program = document.querySelectorAll("input[name=programming]");
// console.log(program);

Array.from(program).map((program) => {
    program.addEventListener("change", programHandeler);
});

function programHandeler(e){
    if(e.target.checked){
        console.log(e.target.value);
        // document.write(e.target.value);
    };
};


const department = document.querySelector("#department");
department.addEventListener("change", departmentHandeler);

function departmentHandeler(e){
    console.log(e.target.value);
     // document.write(e.target.value);
}