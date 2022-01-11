let displayValue = '';
let input = [];
let operator = null;
let result = null;
const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');

window.addEventListener('keydown', function(e){
    if (e.key === "1") {document.querySelector(".one").click();} 
    if (e.key === "2") {document.querySelector(".two").click();} 
    if (e.key === "3") {document.querySelector(".three").click();} 
    if (e.key === "4") {document.querySelector(".four").click();} 
    if (e.key === "5") {document.querySelector(".five").click();} 
    if (e.key === "6") {document.querySelector(".six").click();} 
    if (e.key === "7") {document.querySelector(".seven").click();} 
    if (e.key === "8") {document.querySelector(".eight").click();} 
    if (e.key === "9") {document.querySelector(".nine").click();} 
    if (e.key === "0") {document.querySelector(".zero").click();} 
    if (e.key === ".") {document.querySelector(".point").click();} 
    if (e.key === "+") {document.querySelector(".plus").click();} 
    if (e.key === "-") {document.querySelector(".minus").click();} 
    if (e.key === "/") {document.querySelector(".divide").click();} 
    if (e.key === "*") {document.querySelector(".times").click();} 
    if (e.key === "Backspace") {document.querySelector(".delete").click();} 
    if (e.key === "Enter") {document.querySelector(".equals").click();} 
    if (e.key === "=") {document.querySelector(".equals").click();} 
    if (e.key === "Escape") {document.querySelector(".clear").click();} 
});

function inputToDisplay() {
    displayValue = input.join('');
}

function updateDisplay() {
    inputToDisplay();
    display.textContent = displayValue;
}

updateDisplay();

function clickInput() {
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
                        input.push(result);
                        input.push(buttons[i].value);
                        updateDisplay();
                        getOperator();
                        result = null;
                    }     
                } else {
                    calculate();
                    input.push(result);
                    input.push(buttons[i].value);
                    updateDisplay();
                    getOperator();
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

clickInput();

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
    if(result.toString().length > 4) {
        result = result.toFixed(2);
    }
    display.innerText = result;
}

function clear() {
    displayValue = '';
    input = [];
    result = null;
    operator = null;
    updateDisplay();
}