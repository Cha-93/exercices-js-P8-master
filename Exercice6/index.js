function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const expression = display.value;

        if (expression.includes('/0')) {
            display.value = 'Division by zero is not allowed';
        } else {
            const result = eval(expression);
            display.value = result;
        }
    } catch (error) {
        display.value = 'Erreur';
    }
}
