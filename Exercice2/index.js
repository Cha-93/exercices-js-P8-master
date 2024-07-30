function calculate(num1, num2, operator) {
    num1 = typeof num1 === 'string' ? parseFloat(num1) : num1;
    num2 = typeof num2 === 'string' ? parseFloat(num2) : num2;

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                return "Division by zero is not allowed";
            }
            result = num1 / num2;
            break;
        default:
            return "Invalid operator";
    }
    return result;
}

// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"

export default calculate
