const display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = '';

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        
        if (value === 'AC') {
            currentInput = '';
            previousInput = '';
            operator = '';
            display.textContent = '';
        } else if (value === '=') {
            if (currentInput && previousInput && operator) {
                currentInput = operate(previousInput, currentInput, operator);
                display.textContent = currentInput;
                previousInput = '';
                operator = '';
            }
        } else if (['+', '-', '*', '/', '^'].includes(value)) {
            if (currentInput) {
                if (previousInput && operator) {
                    currentInput = operate(previousInput, currentInput, operator);
                }
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            }
        } else if (value === '←') {
            currentInput = currentInput.slice(0, -1);
            display.textContent = currentInput;
        } else if (value === '√') {
            currentInput = Math.sqrt(parseFloat(currentInput)).toString();
            display.textContent = currentInput;
        } else if (value === 'π') {
            currentInput = Math.PI.toString();
            display.textContent = currentInput;
        } else if (value === '!') {
            currentInput = factorial(parseInt(currentInput)).toString();
            display.textContent = currentInput;
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});

function operate(a, b, operator) {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    
    switch (operator) {
        case '+':
            return (numA + numB).toString();
        case '-':
            return (numA - numB).toString();
        case '*':
            return (numA * numB).toString();
        case '/':
            return (numA / numB).toString();
        case '^':
            return (Math.pow(numA, numB)).toString();
        default:
            return '';
    }
}

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = n; i > 1; i--) {
        result *= i;
    }
    return result;
}
