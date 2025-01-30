const divideBtn = document.querySelector("#divideButton");
const multiplyBtn = document.querySelector("#multiplyButton");
const sustractionBtn = document.querySelector("#substractionButton");
const additionBtn = document.querySelector("#additionButton");
const clearBtn = document.querySelector("#cleanAnswer");
const backspaceBtn = document.querySelector("#deleteAnswer");

const numButtons = document.querySelectorAll('.numBtn');
const display = document.querySelector("#h1");


let currentInput = '0';
let previousValue = null;
let operator = null;


function updateDisplay(){
    display.textContent = currentInput;
}

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(currentInput == '0'){
            currentInput = button.innerText;
        }else {
            currentInput +=button.innerText;
        }
        updateDisplay()
    })
})


function clear() 
{
        currentInput = '0';
        previousValue = null;
        operator = null;
        updateDisplay();
}

function backspace() {
    if(currentInput.length === 1 ){
        currentInput = '0';
    }else {
        currentInput = currentInput.slice(0,-1);
    }
    updateDisplay();
};

function handleOperator(op){
    if(previousValue === null){
        previousValue = parseFloat(currentInput);
        currentInput = '0';
        operator = op;
    }else {
        calculate();
        operator = op;
    }
}

function calculate(){
    const currentInputNum = parseFloat(currentInput);

    if(operator === '+') {
        currentInput = (previousValue + currentInputNum).toString();
    } else if (operator === '-') {
        currentInput = (previousValue - currentInputNum).toString();
    } else if(operator === 'x') {
        currentInput = (previousValue * currentInputNum).toString();
    } else if(operator === '/') {
        currentInput = (previousValue / currentInputNum).toString();
    }
    updateDisplay();
}

clearBtn.addEventListener('click', clear);
backspaceBtn.addEventListener('click', backspace);
