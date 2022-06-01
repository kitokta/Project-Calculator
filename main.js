const opMultiply = document.getElementById('multiply');
const opAdd = document.getElementById('add');
const opSubtract = document.getElementById('subtract');
const opDivide = document.getElementById('divide');
const input = document.querySelectorAll('.calculator');
const display = document.getElementById('display');
const operator = document.querySelectorAll('.operator');
const clear = document.getElementById('clear');
const equal = document.getElementById('equal');
const dot = document.getElementById('dot');
let num1 = 0;
let num2 = 0;
let op = '';
let opFinal = '';
let numbers = [];
let result = 0;
let dotCount = 0;

//Evento reconhecimento de teclado
document.addEventListener('keypress', (event) => {
    if (display.textContent.length >= 15) document.removeEventListener('keypress');
    if (event.keyCode === 48 || event.keyCode === 49 || event.keyCode === 50 || event.keyCode === 51 || event.keyCode === 52 || event.keyCode === 53 || event.keyCode === 54 || event.keyCode === 55 || event.keyCode === 56 || event.keyCode === 57 || event.keyCode === 46) {
        if (op!= '') num1 = parseFloat(display.textContent), op = '', display.textContent = '';
        if (event.keyCode === 46) dotCount++;
        display.textContent = `${display.textContent}${event.key}`;
    } 

    if (event.keyCode === 42) op = 'x', opFinal = 'x', dotCount--;
    if (event.keyCode === 43) op = '+', opFinal = '+', dotCount--;
    if (event.keyCode === 45) op = '-', opFinal = '-', dotCount--;
    if (event.keyCode === 47) op = '/', opFinal = '/', dotCount--;
   });


//função checar se tem mais de um ponto
function checkDot() {
    if (dotCount > 1) {
        alert("Can't work with floating point numbers"); 
        return reset();
    }
    else return;
}

//função limpar
function reset() {
    display.textContent = "";
    op = '';
    num1 = '';
    num2 = '';
    numbers = [];
    result = '';
    opFinal = '';
    dotCount = '0';
}

//função adicionar
function add(num1, num2) {
	result = num1 + num2;
    return display.textContent = `${result.toFixed(2)}`;
};

//função dividir
function divide(num1, num2) {
    if (num2 === 0 ) {
        alert("Can't divide by 0"); 
        return reset();
    }
    else {
        result = num1 / num2;
        return display.textContent = `${result.toFixed(2)}`;
    }
};

//função subtrair
function subtract(num1, num2) {
	result = num1 - num2; 
    return display.textContent = `${result.toFixed(2)}`;
};

//função multiplicar
function multiply(num1, num2) {
    result = num1 * num2;
    return display.textContent = `${result.toFixed(2)}`;
  };

 //função de chamar operação 
function operate(op, num1, num2) {
    if (opFinal === "+") return add(num1, num2);
    else if (opFinal === "/") return divide(num1, num2);
    else if (opFinal === "-") return subtract(num1, num2);
    else return multiply(num1, num2);
};


//reconhecimento do ponto na tela
dot.addEventListener('click', () => {
    dotCount ++;
    display.textContent = `${display.textContent}.`;
   });

//reconhecimento dos numeros na tela
input.forEach(item => item.addEventListener('click', (event) => {
    if (display.textContent.length >= 15) item.removeEventListener('click');
    else if (op!= '') num1 = parseFloat(display.textContent), op = '', display.textContent = '';
    display.textContent = `${display.textContent}${event.target.value}`;
}));

//reconhecimento dos operadores na tela
operator.forEach(item => item.addEventListener('click', (event) => {
    checkDot();
    if (event.target.id === 'multiply') op = 'x', opFinal = 'x', dotCount--;
    else if (event.target.id === 'add') op = '43', opFinal = '+', dotCount--;
    else if (event.target.id === 'subtract') op = '-', opFinal = '-', dotCount--;
    else if (event.target.id === 'divide') op = '/', opFinal = '/', dotCount--;
   }));

//botão de limpar
clear.addEventListener('click', () => {
    reset();
   });

//Botão de igual (chamar operação)
equal.addEventListener('click', () => {
    checkDot();
    if (opFinal === '' ) {
        alert("Please insert an operator"); 
        reset();
        equal.removeEventListener('click');
    }
    else {
        num2 = parseFloat(display.textContent);
        operate(opFinal, num1, num2);
    }
   });