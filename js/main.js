const DOM_num1 = document.querySelector('#num1');
const DOM_num2 = document.querySelector('#num2');
const DOM_operation = document.querySelector('#operation');
const DOM_button = document.querySelector('button');
const DOM_answer = document.querySelector('#answer');

const sum = (a, b) => a + b;
const minus = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const calcFactory = (n1, op, n2) => {
    const mathFunction = {
        '+': sum,
        'plus': sum,
        'prideti': sum,
        '-': minus,
        'minus': minus,
        'atimti': minus,
        '*': multiply,
        'multiply': multiply,
        'padauginti': multiply,
        '/': divide,
        'divide': divide,
        'padalinti': divide,
    }

    const func = mathFunction[op];

    return func(n1, n2);
};

function calcExpresion() {
    const num1 = parseInt(DOM_num1.value);
    const num2 = parseInt(DOM_num2.value);
    const operation = DOM_operation.value;

    const rez = calcFactory(num1, operation, num2);

    console.log(num1, operation, num2, '=', rez);
}

DOM_button.addEventListener('click', event => {
    event.preventDefault();
    calcExpresion();
})