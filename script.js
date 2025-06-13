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

let addCharacter = function(currentNumber, char) {
    if (currentNumber == 0)
        return char;
    return currentNumber + char;
}

let renderDisplay = function(firstNum, secondNum, operand) {
    let inputs = [];
    if (secondNum)
        inputs.push(secondNum);
    if (operand)
        inputs.push(operand);
    if (firstNum)
        inputs.push(firstNum);
    display.value = inputs.join(" ");
}
