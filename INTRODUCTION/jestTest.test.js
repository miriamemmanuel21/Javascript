let addnumbers = require("./add.js")

test("Add two numbers", () => {
    let a = 3;
    let b = 5;
    let answer = addnumbers(a, b);

expect(answer).toBe(8);

})