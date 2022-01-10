let displayValue = '';
let input = [];
let operator = null;
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
            } else if (button.contains('operator')) {
                if (!operator) {
                    if (!result) {
                        input.push(buttons[i].value);
                        updateDisplay();
                        getOperator();
                    } else {
                        calculate();
                        input.push(result);
                        input.push(buttons[i].value);
                        updateDisplay();
                        getOperator();
                        result = null;
                    }     
                }  
            } else if (button.contains('delete')) {
                input.pop();
                updateDisplay();
            } else if (button.contains('clear')) {
                clear();
            } else if (button.contains('equals')) {
                calculate();
            }
        })
    }
}

inputPress();

function getOperator() {
    const operators = [' + ', ' - ', ' x ', ' ÷ ']
    operator = input.filter(operator => operators.includes(operator)).toString();
}

function calculate() {
    let operatorIndex = input.indexOf(operator);
    let firstValue = input.slice(0, operatorIndex).join('');
    let secondValue = input.slice((operatorIndex + 1), (input.length)).join('');
    if (operator === ' + ') {
        result = Number(firstValue) + Number(secondValue);
        displayResult()
        input = [];
        operator = null;
    } else if (operator === ' - ') {
        result = Number(firstValue) - Number(secondValue);
        displayResult()
        input = [];
        operator = null;
    } else if (operator === ' x ') {
        result = Number(firstValue) * Number(secondValue);
        displayResult()
        input = [];
        operator = null;
    } else if (operator === ' ÷ ') {
        result = Number(firstValue) / Number(secondValue);
        displayResult()
        input = [];
        operator = null;
    }
}

function displayResult() {
    display.textContent = result;
}

function clear() {
    displayValue = '';
    input = [];
    result = null;
    operator = null;
    updateDisplay();
}