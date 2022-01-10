let displayValue = '';
let input = [];
let result = null;
const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');

function inputToDisplay() {
    displayValue = input.join('');
}

function updateDisplay() {
    inputToDisplay();
    display.textContent = displayValue;
}

updateDisplay();

function inputPress() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            let button = buttons[i].classList;
            if (button.contains('input')) {
                input.push(buttons[i].value);
                updateDisplay();
            } else if (button.contains('delete')) {
                input.pop();
                updateDisplay();
            } else if (button.contains('clear')) {
                clear();
                updateDisplay();
            } else if (button.contains('equals')) {
                calculate();
            }
        })
    }
}

inputPress();

function getOperator(input) {
    switch (input) {
        case ' + ':
            return '+'
            break;
        case ' - ':
            return '-'
            break;
        case ' x ':
            return '*'
            break;
        case ' ÷ ':
            return '/'
            break;
    }
}

function calculate() {
    const operators = [' + ', ' - ', ' x ', ' ÷ ']
    let operator = input.filter(operator => operators.includes(operator)).toString();
    // console.log(operator);
    let operatorIndex = input.indexOf(operator);
    // console.log(operatorIndex);
    let firstValue = input.slice(0, operatorIndex).join('');
    // console.log(firstValue);
    let secondValue = input.slice((operatorIndex + 1), (input.length)).join('');
    // console.log(secondValue);
    if (operator === ' + ') {
        result = Number(firstValue) + Number(secondValue);
        // console.log(result);
        displayResult()
        input = [];
    } else if (operator === ' - ') {
        result = firstValue - secondValue;
        // console.log(result);
        displayResult()
        input = [];
    } else if (operator === ' x ') {
        result = firstValue * secondValue;
        // console.log(result);
        displayResult()
        input = [];
    } else if (operator === ' ÷ ') {
        result = firstValue / secondValue;
        // console.log(result);
        displayResult()
        input = [];
    }
}

function displayResult() {
    display.textContent = result;
}

function clear() {
    displayValue = '';
    input = [];
    result = null;
}