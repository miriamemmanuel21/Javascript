function calculateOperation(left_operand, right_operand, operator) {
    if (operator === '+') {
        return left_operand + right_operand;
    } else if (operator === '-') {
        return left_operand - right_operand;
    } else if (operator === '*') {
        return left_operand * right_operand;
    } else if (operator === '/') {
        if (right_operand !== 0) {
            return left_operand / right_operand;
        } else {
            return 'Cannot divide by zero';
        }
    } else {
        return 'Invalid operator';
    }
}



 letnumbers = [1, 2, 3, 4];
let lastNumber = numbers.pop();
console.log(lastNumber); 
console.log(numbers); 
