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

//função limpar
function reset() {
    display.textContent = "";
    op = '';
    num1 = '';
    num2 = '';
    numbers = [];
    result = '';
    opFinal = '';
}

//função adicionar
function add(num1, num2) {
	result = num1 + num2;
    return display.textContent = `${result}`;
};

//função dividir
function divide(num1, num2) {
    if (num2 === 0 ) {
        alert("Can't divide by 0"); 
        return reset();
    }
    else {
        result = num1 / num2;
        return display.textContent = `${result}`;
    }
};

//função subtrair
function subtract(num1, num2) {
	result = num1 - num2; 
    return display.textContent = `${result}`;
};

//função multiplicar
function multiply(num1, num2) {
    result = num1 * num2;
    return display.textContent = `${result}`;
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
    display.textContent = `${display.textContent}.`;
   });

//reconhecimento dos numeros na tela
input.forEach(item => item.addEventListener('click', (event) => {
    if (op!= '') num1 = parseInt(display.textContent), op = '', display.textContent = '';
    display.textContent = `${display.textContent}${event.target.value}`;
}));

//reconhecimento dos operadores na tela
operator.forEach(item => item.addEventListener('click', (event) => {
    if (event.target.id === 'multiply') op = 'x', opFinal = 'x';
    else if (event.target.id === 'add') op = '+', opFinal = '+';
    else if (event.target.id === 'subtract') op = '-', opFinal = '-';
    else if (event.target.id === 'divide') op = '/', opFinal = '/';
   }));

//botão de limpar
clear.addEventListener('click', () => {
    reset();
   });

//Botão de igual (chamar operação)
equal.addEventListener('click', () => {
    //if (op === '+') numbers = display.textContent.split('+');
    //else if (op === '-') numbers = display.textContent.split('-');
    //else if (op === '/') numbers = display.textContent.split('/');
    //else if (op === 'x') numbers = display.textContent.split('x');
    if (opFinal === '' ) {
        alert("Please insert an operator"); 
        reset();
        equal.removeEventListener('click');
    }
    else {
        num2 = parseInt(display.textContent);
        operate(opFinal, num1, num2);
    }
   });