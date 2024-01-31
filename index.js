// Debugging JS

// Error Messages

// SYNTAX ERRORS

// 1.
let x = 10;
if (x > 5) {
    console.log("Hello, World!");
}

// /Users/patrickrogers/Pursuit/Labs/debugging/index.js:8
// if (x > 5 {
//           ^

// SyntaxError: Unexpected token '{'

// /Users/patrickrogers/Pursuit/Labs/debugging/index.js:8
// if (x > 5) {
// ^

// ReferenceError: x is not defined

// Let's check the error message

// 2.
const message = 'Hello, World!';

// /Users/patrickrogers/Pursuit/Labs/debugging/index.js:16
// const message = 'Hello, World!;
                // ^^^^^^^^^^^^^^^
// SyntaxError: Invalid or unexpected token

// 3.
function myFunction() {
  console.log("Hello!");
}


// /Users/patrickrogers/Pursuit/Labs/debugging/index.js:24
//   console.log("Hello!");
//   ^^^^^^^
// SyntaxError: Unexpected identifier 'console'

// 4.
function name() {}

// /Users/patrickrogers/Pursuit/Labs/debugging/index.js:47
// function() {}
// ^^^^^^^^

// SyntaxError: Function statements require a function name

// 5.
function whatsWrong() {}

    // /Users/patrickrogers/Pursuit/Labs/debugging/index.js:126



    // SyntaxError: Unexpected end of input

// 6.

let a = 6;
a = 5;

// /Users/patrickrogers/Pursuit/Labs/debugging/index.js:67
// let a = 5;
//     ^

// SyntaxError: Identifier 'a' has already been declared

// 7.

// TYPE ERRORS - when attempting to modify a value that cannot e changed;

// 1.

const b = 9
const c = 5

// /Users/patrickrogers/Pursuit/Labs/debugging/index.js:82
// b = 5
//   ^

// TypeError: Assignment to constant variable.

// 2.

const obj = { name: {
    first: "Raz",
    last: "Efron"
}}

// obj.naem.first

// /Users/patrickrogers/Pursuit/Labs/debugging/index.js:97
// obj.naem.first
//          ^

// TypeError: Cannot read properties of undefined (reading 'first')

obj.name.first

function popFirstAndReturn(arr) {
    return arr.pop()
}

// 3.

const arr = [1,2,3]
// arr();
// arr.mep();

// /Users/patrickrogers/Pursuit/Labs/debugging/index.js:114
// arr();
// ^

// TypeError: arr is not a function

// /Users/patrickrogers/Pursuit/Labs/debugging/index.js:115
// arr.mep();
//     ^

// TypeError: arr.mep is not a function

// Object.push(arr);

// /Users/patrickrogers/Pursuit/Labs/debugging/index.js:129
// Object.push(arr);
//        ^

// TypeError: Object.push is not a function

// REFERENCE ERRORS

// 1.

// console.log(myVariable)

// /Users/patrickrogers/Pursuit/Labs/debugging/index.js:141
// console.log(myVariable)
            ^

// ReferenceError: myVariable is not defined

function findMax(arr) {
    let max = num;
    for (let num of arr) {
        max = max > num ? max : num
    }
    return max;
}

// /Users/patrickrogers/Pursuit/Labs/debugging/index.js:191



// SyntaxError: Unexpected end of input


// 2.

// console.log(y);
let y = 5

console.log(y);

// /Users/patrickrogers/Pursuit/Labs/debugging/index.js:166
// console.log(y);
//             ^

// ReferenceError: Cannot access 'y' before initialization

// debugger in vscode

function sumOfAllOddElements(arr) {

    let sum = 0;

    for (let i = 0; i < arr.length -1; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum
}

const array = [
  3904, 3929, 1833, 8516, 3399, 3659, 4167, 2177, 1356, 4467, 9948, 7224, 7604,
  5245, 4733, 7314, 8295, 5857, 1190, 5221, 8368, 8352, 8902, 3027, 1494, 7189,
  1468, 3756, 3663, 6750, 8679, 7729, 8647, 6103, 1018, 377, 8518, 5571, 7193,
  3089, 3324, 9112, 3292, 821, 1498, 2723, 2025, 1454, 8402, 4394, 7036, 8958,
  3756, 3215, 3541, 513, 915, 8453, 3883, 4125, 9405, 2157, 959, 268, 2089,
  3294, 1544, 9670, 1170, 7245, 8776, 5301, 1060, 7865, 4202, 9364, 4254, 3014,
  1306, 9212, 46, 6337, 9182, 3685, 3652, 7251, 4591, 1537, 4290, 3425, 7684,
  4875, 6923, 2163, 1376, 8955, 996, 6669, 3093, 9575,
];

console.log(sumOfAllOddElements(array)); // 248563

// debugger in the web
