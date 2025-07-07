let a = 6;
let b = 9;

console.log("The sum of a and b is:" + (a + b));

if (a > b) {
    console.log("The difference between a and b is:" + (a - b));
} else {
    console.log("The difference between a and b is:" + (b - a));
}

let c = "light";
let d = "house";

console.log("c is:" + c + " (" + typeof c + ")");
console.log("d is:" + d + " (" + typeof d + ")");
console.log("Concatenated string (c + d):" + (c + d));

let e = 3.14;

console.log("The value of e is:" + e + " (" + typeof e + ")");
console.log("Concatenated String (e + c):" + (e + c));
console.log("9 + 6 + '1' = " + (9 + 6 + '1'));
console.log("9 + 6 - '1' = " + (9 + 6 - '1'));
console.log("false == 0 :", false == 0);
console.log("false === 0 :", false === 0);
console.log("null == undefined :", null == undefined);
console.log("null === undefined :", null === undefined);
console.log("typeof null:", typeof null);
console.log("typeof undefined:", typeof undefined);
console.log("typeof NaN:", typeof NaN);

let u1;
console.log("typeof u1 (declared but not initialized):", typeof u1);