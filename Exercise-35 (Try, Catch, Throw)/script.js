//try, catch and finally
try {
    console.log("try perfectly worked here");
    console.log(x);          //don't declared x, here is error
    console.log('try is end here');
}
catch (error) {
    console.log("End try don't work perfectly above, but catch is perfectly worked here.");
    console.log("try error was: " + error);
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
finally {
    console.log('try is end here using finally.');
}



//try, catch and throw 
document.querySelector('#btn').addEventListener('click', () => {
    let inputValue = document.querySelector('#inputBox');
    let getInputValue = inputValue.value;
    console.log(getInputValue);
    inputValue.value = "";


    try {
        if (getInputValue > 10){
            throw('Your input number is too high. Enter your number between 5-10');
        }
        else if (getInputValue < 5){
            throw('Your input number is too low. Enter your number between 5-10');
        }
    } catch (err) {
        console.log(err);
    }
})