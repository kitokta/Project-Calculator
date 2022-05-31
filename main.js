const opMultiply = document.getElementById('multiply');
const opAdd = document.getElementById('add');
const opSubtract = document.getElementById('subtract');
const opDivide = document.getElementById('divide');
const input = document.querySelectorAll('.calculator');



function add(num1, num2) {
	return num1 + num2;
};

function divide(num1, num2) {
	return num1 / num2;
};

function subtract(num1, num2) {
	return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
  };
  
function operate(operator, num1, num2) {
    if (operator === "+") return add(num1, num2);
    else if (operator === "/") return divide(num1, num2);
    else if (operator === "-") return subtract(num1, num2);
    else return multiply(num1, num2);
}




