const functionOne = () => {
    console.log("This is First function");
}
async function functionTwo() {          //asynchronous function
    setTimeout(function() {
        console.log("This is Second function");
    }, 2000);

}
const functionThree = () => {
    console.log("This is Third function");
}
const functionFour = () => {
    console.log("This is Fourth function");
}
const functionFive = () => {
    console.log("This is Five function");
}

functionOne();
functionTwo();
functionThree();
functionFour();
functionFive();