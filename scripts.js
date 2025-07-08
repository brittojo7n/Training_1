/*

let a = 6;
let b = 9;

// Operators
console.log("The sum of a and b is:" + (a + b));

// Conditional Statement
if (a > b) {
    console.log("The difference between a and b is:" + (a - b));
} else {
    console.log("The difference between a and b is:" + (b - a));
}

// Data Types
let c = "light";
let d = "house";

console.log("c is:" + c + " (" + typeof c + ")");
console.log("d is:" + d + " (" + typeof d + ")");

//Concatenation
console.log("Concatenated string (c + d):" + (c + d));

let e = 3.14;

console.log("The value of e is:" + e + " (" + typeof e + ")");
console.log("Concatenated String (e + c):" + (e + c)); 
console.log("9 + 6 + '1' = " + (9 + 6 + '1')); 
console.log("9 + 6 - '1' = " + (9 + 6 - '1'));

// Comparison Operators
console.log("false == 0 :", false == 0);
console.log("false === 0 :", false === 0);
console.log("null == undefined :", null == undefined);
console.log("null === undefined :", null === undefined);

// Data Types of null, NaN and undefined
console.log("typeof null:", typeof null);
console.log("typeof undefined:", typeof undefined);
console.log("typeof NaN:", typeof NaN);

// Data Type of declared but not initialized variable
let u1;
console.log("typeof u1 (declared but not initialized):", typeof u1);

// Ternary Operator
let x = 10;
let y = 20;
let max = (x > y) ? x : y; // If x is greater than y, max will be x, otherwise it will be y
console.log("The maximum of x and y is: " + max);

*/

// Logical Operators
if (10 > 5 | 20 > 30 & 30 > 40)  {
    console.log("10 > 5 | 20 > 30 & 30 > 40 is true");
}
if (10 > 5 || 20 > 30 && 30 > 40) {
    console.log("10 > 5 || 20 > 30 && 30 > 40 is true");
}
if (10 > 5 && 20 > 10 || 30 > 40) {
    console.log("10 > 5 && 20 > 10 || 30 > 40 is true");
}
if (10 > 5 | (20 > 10 && 30 > 40)) {
    console.log("10 > 5 | (20 > 10 && 30 > 40) is true");
}
if (10 > 5 & (20 > 10 || 30 > 40)) {
    console.log("10 > 5 & (20 > 10 || 30 > 40) is true");
}
if (10 > 5 && (20 > 10 || 30 > 40)) {
    console.log("10 > 5 && (20 > 10 || 30 > 40) is true");
}
if (10 > 5 || (20 > 10 && 30 > 40)) {
    console.log("10 > 5 || (20 > 10 && 30 > 40) is true");
}
if (10 > 5 & 5 > 10 || 30 > 40) {
    console.log("10 > 5 & 5 > 10 || 30 > 40 is true");
}

// Switch Statement
let day = 3; // Example day of the week (1-7)
console.log("The day of the week is:");

switch (day) {
    case 1:
        console.log("Monday");
        break; // Break is used to exit the switch case
    case 2:
        console.log("Tuesday");
        break; // If break is not used, it will continue to the next case
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// Loops
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        console.log("Skipping iteration 2");
        continue; // Skip the rest of the loop when i is 2
    }
    console.log("For loop iteration: " + i);
}

let j = 0;
while (j < 5) {
    console.log("While loop iteration: " + j);
    j++;
    if (j === 3) {
        console.log("Breaking out of the while loop at iteration 3");
        break; // Exit the loop when j is 3
    }
}

let k = 0;
do {
    console.log("Do-while loop iteration: " + k);
    k++;
} while (k < 1); // The do-while loop will execute at least once even if the condition is false

for (let l = 0; l < 10; l++) {
    console.log(l++);
    if (l === 5) {
        console.log("Breaking out of the for loop at iteration 4");
        break; // Exit the loop when l is 4
    }
}

// For-of loop with array
for (const i of ["apple", "banana", "cherry"]) {
    console.log("For-of loop iteration: " + i);
}

// For-of loop with string
for (const char of "hello") {
    console.log("For-of loop character: " + char);
}

// For-of loop with object
var person = { name: "John", age: 30, city: "New York" };
for (const key of Object.keys(person)) {
    console.log("For-of loop key: " + key);
}
for (const value of Object.values(person)) {
    console.log("For-of loop value: " + value);
}

// For-in loop with object
var person = { name: "John", age: 30, city: "New York" };
for (const key in person) {
    console.log("For-in loop key: " + key + ", value: " + person[key]);
}

// For-in loop with array
const fruits = ["apple", "banana", "cherry"];
for (const index in fruits) {
    console.log("For-in loop index: " + index + ", value: " + fruits[index]);
}

// For-in loop with string
const str = "hello";
for (const index in str) {
    console.log("For-in loop index: " + index + ", character: " + str[index]);
}

// Loop with break at a specific condition
i=0;
while (true) {
    i++;
    console.log(i)
    if (i++ === 5) break; // Exit the loop when i is 5
}

i = 0;
while (true) {
    ++i;
    console.log(i)
    if (i++ === 5) break; // Exit the loop when i is 5
}

i=0;
while (true) {
    ++i;
    console.log(i)
    if (i === 5) break; // Exit the loop when i is 5
}

for (i = -1; i > -10; i--) {    
    console.log(--i);
}

j=0;
for (i in [1,5,10,15,20]){
    console.log("i:", i, "Datatype:", typeof(i), " j:", j, "Datatype:", typeof(j))
    j += i; // Index value returned by for-in loop is of string data type
}