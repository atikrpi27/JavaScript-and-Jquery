const functionOne = (callback) => {
    console.log("This is First function");
    callback();
}
async function functionTwo(callback) {              //asynchronous function
    setTimeout(function() {
        console.log("This is Second function");
        callback();
    }, 2000);

}
const functionThree = (callback) => {
    console.log("This is Third function");
    callback();
}
const functionFour = (callback) => {
    console.log("This is Fourth function");
    callback();
}
const functionFive = () => {
    console.log("This is Five function");
}

console.log('Hi this is callback function start here.')

functionOne(() => {
    functionTwo(() => {
        functionThree(() => {
            functionFour(() => {
                functionFive()
                console.log('Hi this is callback function end here.')
            })
        })
    })
});