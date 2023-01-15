let currentNum = "";
let prevNum = "";
let operator = "";
let nextCal = false;
const numberButtons = document.querySelectorAll(".num-btns");
const operatorButtons = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const dot = document.querySelector(".dot");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const history = document.querySelector(".history");
const currentDisplay = document.querySelector(".current-number");
const prevDisplay = document.querySelector(".previous-number");

//add, subtract, multiply, and divide functions
function addFn(num1, num2) {
  return num1 + num2;
}

function subFn(num1, num2) {
  return num1 - num2;
}

function multiFn(num1, num2) {
  return num1 * num2;
}

function divFn(num1, num2) {
  return num1 / num2;
}

//operator function
function operate(number1, number2, selectOperator) {
  const num1 = parseFloat(number1);
  const num2 = parseFloat(number2);
  let output = 0;
  try {
    switch (selectOperator) {
      case "+":
        output = addFn(num1, num2);
        break;

      case "*":
        output = multiFn(num1, num2);
        break;

      case "-":
        output = subFn(num1, num2);
        break;

      case "/":
        if (num2 == 0) {
          output = "Infinity";
        } else {
          output = divFn(num1, num2);
        }
        break;
    }
  }
  catch (e) {
    currentDisplay.textContent = ("There's an error: ", e);
  }

  res.push(currentDisplay.textContent = Math.round(output * 100000) / 100000);
  prevDisplay.innerHTML = " ";
  currentNum = output;
  // console.log(currentNum);
  nextCal = true;
  history.disabled = false;
}

equal.addEventListener("click", (e) => {
  if (currentNum != "" && prevNum != "") {
    operate(prevNum, currentNum, operator);
  }
  prevNum = " ";
});

//result array
let res = [];
// console.log(res);

//history button
history.addEventListener("click", function () {
  // alert("adfasd")
  currentDisplay.innerHTML = "All results are: <br/>" + res;

  if (res.length == 0) {
    currentDisplay.innerHTML = "There is no history!";
    // document.querySelector(".history").disabled = true;
    history.disabled = true;
  }
})

//button inputs for numbers and operators
numberButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleNumber(e.target.textContent);
  });
});

function handleNumber(number) {
  if (nextCal) {
    nextCal = false;
    currentNum = " ";
  }
  currentNum += number;
  // console.log(currentNum);
  currentDisplay.textContent = currentNum;
}

operatorButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleOperator(e.target.textContent);
  });
});

function handleOperator(op) {
  nextCal = false;
  if (currentNum != "") {
    operator = op;
    prevNum = currentNum;
    prevDisplay.textContent = prevNum + "" + operator;
    currentNum = " ";
    currentDisplay.textContent = " ";
  }
}

//dot button
dot.addEventListener("click", function () {
  nextCal = false;
  if (!currentNum.includes(".")) {
    currentNum += ".";
    currentDisplay.textContent = currentNum;
  }
});

//clear button
clearBtn.addEventListener("click", function () {
  currentDisplay.textContent = "";
  prevDisplay.textContent = "";
  currentNum = "";
  prevNum = "";
  res.length = 0;
});

//delete button
deleteBtn.addEventListener("click", function () {
  currentDisplay.textContent = currentDisplay.textContent.slice(0, -1);
  currentNum = currentDisplay.textContent;
});