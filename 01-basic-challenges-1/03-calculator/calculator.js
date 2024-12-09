function calculator(a, b, operation) {

    switch (operation) {

        case '*':
            return a * b;
        case '/': 
            return a / b;
        case '-':
            return a - b;
        case '+':
            return a + b;
        default:
            throw new Error('invalid opertor');

    }
}

module.exports = calculator;
