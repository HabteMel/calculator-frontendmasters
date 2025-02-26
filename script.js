// some way of handling the numbers
// some way of handling the symbols
// handling the clear,backspace,equal sign

// Events: 
// 
//  => button clicked, converts the number(innerText) to integer
// => checks if it is symbol or number, 
// => if it is a number run handleNumber()
// => else run handleSymbol()

const display = document.querySelector("#h1");
let buffer = '0';
let previousOperator = null;
let total = 0;

function buttonClicked(value) {
    if(isNaN(parseInt(value)))
    {
        handleSymbols(value)    
    }else {
        handleNumbers(value)
    }
    displayNum()
}

function handleNumbers(num){
    if(buffer === '0'){
        buffer = num;
    }else {
        buffer += num;
    }
}

function handleSymbols(symbol){
    switch(symbol){
        case '+':
        case '-':
        case '÷':
        case '×':
            handleMath(symbol);
            break;
        case '=':
            if(previousOperator === null){
                return;
            }
            operation(parseInt(buffer))
            previousOperator = null;
            buffer = "" + total;
            total = 0;
            break;
        case 'C':
            buffer = '0';
            break;
        case '←':
            if(buffer.length === 1){
                    buffer = 0
            }else {
                buffer = buffer.substring(0, buffer.length - 1)
            }
            break;
    }
}

function handleMath(value){
    if(buffer === 0){
        return;
    }
    const intBuffer = parseInt(buffer);
    if(total === 0){
        total = intBuffer;
    }else {
        operation(intBuffer)
    }

    previousOperator = value;
    buffer = '0';
    console.log(total)
}

function operation(intBuffer) {
    if(previousOperator === '+'){
        total = intBuffer + total
    }else if (previousOperator === '-'){
        total = total - intBuffer
    }else if (previousOperator === '×'){
        total = total * intBuffer
    }else if(previousOperator === '÷'){
        total =  total / intBuffer
    }
}

function init() {
    document
    .querySelector(".buttons")
    .addEventListener("click", function(event) {
        buttonClicked(event.target.innerText)
    })
}

function displayNum(){
    display.innerText = buffer;
}

init()
