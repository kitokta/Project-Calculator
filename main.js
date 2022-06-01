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
let op = ''
let numbers = [];
let opCount = 1;
let result = 0;
//função limpar
function reset() {
    display.textContent = "";
    op = '';
    num1 = '';
    num2 = '';
    numbers = [];
    result = '';
}

//função adicionar
function add(num1, num2) {
	return result = num1 + num2;
};

//função dividir
function divide(num1, num2) {
	return result = num1 / num2;
};

//função subtrair
function subtract(num1, num2) {
	return result = num1 - num2;
};

//função multiplicar
function multiply(num1, num2) {
    return result = num1 * num2;
  };

 //função de chamar operação 
function operate(op, num1, num2) {
    if (op === "+") return add(num1, num2);
    else if (op === "/") return divide(num1, num2);
    else if (op === "-") return subtract(num1, num2);
    else return multiply(num1, num2);
};

//guarda os dois numeros da conta
function split() {
    numbers = display.textContent.split(/[+-/*]+/);
    return num1 = parseInt(numbers[0]),
        num2 = parseInt(numbers[1]);
}

//reconhecimento do ponto na tela
dot.addEventListener('click', () => {
    display.textContent = `${display.textContent}.`;
   });

//reconhecimento dos numeros na tela
input.forEach(item => item.addEventListener('click', (event) => {
 display.textContent = `${display.textContent}${event.target.value}`;
}));

//reconhecimento dos operadores na tela
operator.forEach(item => item.addEventListener('click', (event) => {
    if (event.target.id === 'multiply') op = 'x';
    else if (event.target.id === 'add') op = '+';
    else if (event.target.id === 'subtract') op = '-';
    else if (event.target.id === 'divide') op = '/';
    display.textContent = `${display.textContent}${op}`;
    opCount ++;
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
    if (op === '' ) {
        alert("Please insert an operator"); 
        reset();
        equal.removeEventListener('click');
    }
    split();
    operate(op, num1, num2)
    display.textContent = `${result}`;
   });