let displayValue = '';
let input = [];
let result = null;
const buttons = document.querySelectorAll('button');

function inputToDisplay() {
    displayValue = input.join('');
}

function updateDisplay() {
    const display = document.getElementById('display');
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
                console.log(input);
                updateDisplay();
            } else if (button.contains('delete')) {
                input.pop();
                console.log(input);
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

function clear() {
    displayValue = '';
    input = [];
    result = null;
}