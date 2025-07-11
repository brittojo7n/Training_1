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

for (x in {a: 1, b: 2, c: 3}) {
    console.log("x:", x, "Datatype:", typeof(x));
}

x=0
// Conditional Statement to check if x is equal to 10
if (!x){
    console.log("x is not defined"); // This will be true for undefined, null, 0, NaN, and false
    console.log(x)
}
else{
    console.log("x is defined");
    console.log(x)
}

x=2;
if (x=1){
    console.log("x is equal to 1"); // This will always be true because x is assigned the value 1
    console.log(x); 
}

*/

const m1 = document.getElementById("games");
const m2 = document.getElementsByClassName("class1");
const m3 = document.querySelectorAll("p");
const m4 = document.getElementsByTagName("body");
const m5 = document.getElementById("id2");
const m6 = document.getElementById("btn1");
const m7 = document.getElementById("btn2");

console.log("m1:", m1);
console.log("m2:", m2);
console.log("m3:", m3);
console.log("m4:", m4);
console.log("m5:", m5);
console.log("m6:", m6);
console.log("m7:", m7);

m3[0].style.color = "crimson";


document.addEventListener("click", myFunction);

function myFunction() {
  m5.innerHTML = "Welcome to My Page!";
}

function myFunction2() {
  if (m6.innerHTML == "You clicked the button!") {
    m6.innerHTML = "Click Me!";
    if (m5) {
        m5.remove();
    }
}
  else {
    m6.innerHTML = "You clicked the button!";
    if (m5) {
        m5.remove();
    }
  }
}

m6.addEventListener("click", function() {
  myFunction2();
});

const list = document.getElementById("games").classList;

m7.addEventListener("click", function() {
  list.toggle("new-class");
});

const todolist = document.getElementById("todo-list");

async function addTodo() {
    const todoInput = document.getElementById("add-todo-input");
    const todoText = todoInput.value.trim();

    if (todoText === "") {
        alert("Please enter a task.");
        return;
    }

    await new Promise(resolve => setTimeout(resolve, 200)); // 200ms delay

    const newTodo = document.createElement("li");
    newTodo.textContent = todoText;
    todolist.appendChild(newTodo);

    todoInput.value = "";
}
document.getElementById("add-todo-btn").addEventListener("click", addTodo);

async function removeTodo() {
    const todoInput = document.getElementById("add-todo-input");
    const todoText = todoInput.value.trim();
    const todos = todolist.getElementsByTagName("li");
    let found = false;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].textContent === todoText) {
            await new Promise(resolve => setTimeout(resolve, 200)); // 200ms delay
            todolist.removeChild(todos[i]);
            found = true;
            break;
        }
    }
    if (!found) {
        alert("Task not found.");
    }
    todoInput.value = "";
}

document.getElementById("remove-todo-btn").addEventListener("click", removeTodo);

const inputField = document.getElementById("local-storage-input");
const saveButton = document.getElementById("save-local-storage-btn");
const clearButton = document.getElementById("clear-local-storage-btn");
const storedValueDisplay = document.getElementById("stored-value");

var myData = "myData";
var Data = null;
let i = 1;

const storedValue = localStorage.getItem(Data);
if (storedValue) {
    storedValueDisplay.textContent = `Stored Value: ${storedValue}`;
}  else {
    storedValueDisplay.textContent = "No value stored in localStorage.";
    inputField.value = "";
}

clearButton.addEventListener("click", function() {
    localStorage.clear();
    inputField.value = "";
    i = 1;
});

saveButton.addEventListener("click", function() {
    const inputValue = inputField.value.trim();
    if (inputValue) {
        if (myData == myData) {
            Data = myData + i;
            i += 1;
            localStorage.setItem(Data, inputValue);
        }
    } else {
        alert("Please enter a value to save.");
    }
});

