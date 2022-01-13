// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
    return String(n);
}

// - Write a Function Expression
let convertToString = function(n) {
    return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
    return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration

function addOne(number) {
    number += 1;
    return number;
}

// - Write a Function Expression

let addOne = function(number) {
    number += 1;
    return number;
};

// - Write an Arrow Function without curly brackets(if possible)

let addOne = (number) => {
    number += 1;
    return number;
}


// - Write an Arrow Function with curly brackets


let addOne = (number) => number += 1;
number;

// - Execute the function

addOne(2);

// - Execute the function and store the return value in a variable.

let addedOne = addOne(2);

// - What is the typeof returnValue
// typeof  addedOne = number

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration

function substractOne(number) {
    number -= 1;
    return number;
}

// - Write a Function Expression

let substractOne = function(number) { number -= 1; return number; }

// - Write an Arrow Function without curly brackets(if possible)

let substractOne = (number) => number -= 1;

// - Write an Arrow Function with curly brackets

const substractOne = (number) => { return number -= 1 };

// - Execute the function

substractOne(2);

// - Execute the function and store the return value in a variable.

let returnValue = substractOne(2);

// - What is the typeof returnValue
//number

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration

function sum(a, b) {
    return a + b;
}

// - Write a Function Expression

let sum = function(a, b) {
    return a + b;
}

// - Write an Arrow Function without curly brackets(if possible)

let sum = (a, b) => a + b;

// - Write an Arrow Function with curly brackets

let sum = (a, b) => { return a + b; }

// - Execute the function

sum(12, 12);

// - Execute the function and store the return value in a variable

let returnValue = sum(12, 12);

// - What is the typeof returnValue

// number
/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration

function square(a, b) {
    return a * b;
}
// - Write a Function Expression
let square = function(a, b) {
        return a * b;
    }
    // - Write an Arrow Function without curly brackets(if possible)

// - Write an Arrow Function with curly brackets

// - Execute the function

// - Execute the function and store the return value in a variable


/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

// - What is the typeof returnValue
Do the following with above problem.
*/

// - Write a Function Declaration

// - Write a Function Expression

// - Write an Arrow Function without curly brackets(if possible)
// - Write an Arrow Function with curly brackets

// - Execute the function


// - Execute the function and store the return value in a variable

// - What is the typeof returnValue

/* 6.
Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.


Do the following with above problem.
*/
// - Write a Function Declaration

// - Write an anonymous Function Expression

// - Write an named Function Expression

// - Write an Arrow Function without curly brackets (hint: use ternary operator)


// - Write an Arrow Function with curly brackets

// - Execute the function

// - Execute the function and store the return value in a variable

// - What is the typeof returnValue