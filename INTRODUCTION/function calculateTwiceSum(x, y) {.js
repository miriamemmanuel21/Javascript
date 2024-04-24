let person = {
    firstName: "mimi",
   lastName: "emmanuel",
    age: 21,
    gender: "female"

}

console.log(person);

let array = [];
let arr = new Array(1,2,3,4,6,7,8,9);



function calculateOperation(left_operand, right_operand, operator) {
    switch(operator) {
        case '+':
            return left_operand + right_operand;
        case '-':
            return left_operand - right_operand;
        case '*':
            return left_operand * right_operand;
        case '/':
            if(right_operand !== 0) {
                return left_operand / right_operand;
            } else {
                return 'Cannot divide by zero';
            }
        default:
            return 'Invalid operator';
    }
}

// Example usage:
var left_operand = 10;
var right_operand = 5;
var operator = '+';
var result = calculateOperation(left_operand, right_operand, operator);
console.log("The result is: " + result);
