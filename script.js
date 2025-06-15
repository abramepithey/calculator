const add = function(num1, num2) {
    return num1 + num2;
};

const subtract = function(num1, num2) {
    return num1 - num2;
};

const multiply = function(num1, num2) {
    return num1 * num2;
};

const divide = function(num1, num2) {
    return Number((num1 / num2).toFixed(5));
};

let display = document.getElementById("display");

let firstNum = display.value;
let secondNum;
let operand;
let justCalculated = false;
let defaultDisplay = true;

let calculate = function() {
    if (!firstNum || !secondNum || !operand)
        return;

    let tempNum;
    if (operand === "+")
        tempNum = add(firstNum, secondNum);
    else if (operand === "-")
        tempNum = subtract(firstNum, secondNum);
    else if (operand === "*")
        tempNum = multiply(firstNum, secondNum);
    else {
        if (Number(secondNum) === 0) {
            tempNum = "DON'T DO THAT";
            defaultDisplay = true;
        }
        else
            tempNum = divide(firstNum, secondNum);
    }
    if (!defaultDisplay)
        firstNum = String(Number(tempNum.toFixed(5)));
    else
        firstNum = tempNum;

    secondNum = "";
    operand = "";
    renderDisplay();
    justCalculated = true;
}

let addCharacter = function(currentNumber, char) {
    if (!currentNumber)
        return char;
    if (currentNumber.length === 9)
        return currentNumber;
    if (Number(currentNumber) === 0)
        return char;
    return currentNumber + char;
}

let renderDisplay = function() {
    let inputs = [];
    if (firstNum)
        inputs.push(firstNum);
    if (operand)
        inputs.push(operand);
    if (secondNum)
        inputs.push(secondNum);
    display.value = inputs.join(" ");
}

let clear = function() {
    firstNum = "0";
    secondNum = "";
    operand = "";
    renderDisplay();
    defaultDisplay = true;
}

let backspace = function() {
    if (defaultDisplay || justCalculated)
        clear();
    else if (secondNum)
        secondNum = secondNum.substring(0, secondNum.length -1);
    else if (operand)
        operand = "";
    else if (firstNum)
        firstNum = firstNum.substring(0, firstNum.length -1);
    if (!firstNum)
        clear();
    else
        renderDisplay();
}

let numbers = document.querySelectorAll(".digit");
numbers.forEach(element => element.addEventListener("click", event => {
    if (operand)
        secondNum = addCharacter(secondNum, element.innerText);
    else {
        if (justCalculated) {
            clear();
            justCalculated = false;
        }
        firstNum = addCharacter(firstNum, element.innerText);
    }
    defaultDisplay = false;
    renderDisplay();
}));

let operators = document.querySelectorAll(".operator");
operators.forEach(element => element.addEventListener("click", event => {
    operand = element.innerText;
    secondNum = "0";
    renderDisplay();
}));

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", event => {
    clear();
});

let backspaceButton = document.getElementById("backspace");
backspaceButton.addEventListener("click", event => {
    backspace();
});