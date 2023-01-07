let display = document.querySelector(".display");
let btn = Array.from(document.querySelectorAll(".button"));
console.log(btn);

let history = [];
console.log("history array is: ", history);

//display history
let dis = document.querySelector(".history");
dis.addEventListener("click", function () {
    history.map((item) => {
        document.querySelector(".display").innerHTML =
            item.operation + "=" + item.result;
    });

    if (history.length == 0) {
        display.innerHTML = "There is no history!";
        document.querySelector(".history").disabled = true;
    }
});

btn.map((btn) => {
    btn.addEventListener("click", (e) => {
        let result = [];
        console.log("Result array is: ", result);

        switch (e.target.innerText) {
            case "AC":
                display.innerText = "";
                // console.log("After press AC button array is", result)
                result = [];
                console.log("result ac", result)
                history.length = 0;
                console.log("AC:", history);
                break;

            case "DEL":
                display.innerHTML = display.innerHTML.slice(0, -1);
                break;

            case "=":
                if (display.innerHTML != "") {
                    try {
                        var fullOperation = display.innerHTML; //like 9+6
                        // console.log(fullOperation)

                        result.push(eval(display.innerHTML));

                        document.querySelector(".display").innerHTML = result[0];

                        //create obj
                        let obj = {
                            operation: fullOperation,
                            result: display.innerHTML,
                        };


                        history.push(obj);
                        console.log("obj is ", obj);

                        document.querySelector(".history").disabled = false; //enable History button
                    }

                    catch {
                        display.innerHTML = "Error!";
                    }
                    console.log("Array is: ", result);
                }
                break;

            default:
                display.innerText += e.target.innerText;
        }
    });
});