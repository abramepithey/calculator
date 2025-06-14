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

let numbers = document.querySelectorAll(".digit");
numbers.forEach(element => element.addEventListener("click", event => {
    if (operand)
        secondNum = addCharacter(secondNum, element.innerText);
    else
        firstNum = addCharacter(firstNum, element.innerText);
    renderDisplay();
}));