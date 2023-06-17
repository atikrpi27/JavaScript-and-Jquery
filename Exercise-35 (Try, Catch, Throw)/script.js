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