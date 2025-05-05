"use strict";
// Generics
// Without Generics
function getData(value) {
    return value;
}
//   With Generics
function getDataGenerics(value) {
    return value;
}
getDataGenerics('Hello'); // returns 'Hello' as string
getDataGenerics(123); // returns 123 as number
const stringBox = { content: 'Apple' };
const numberBox = { content: 100 };
const fruit = { value: 'Mango' };
const age = { value: 25 };
//   Generics with Function
function printItem(item) {
    console.log(item);
}
printItem('Laptop'); // "Laptop"
printItem(99); // 99
//   Generics with Tuples
// Tuple Example (No Generics)
const person = ['Alice', 25];
// Tuple with Generics
function createPair(first, second) {
    return [first, second];
}
const pair1 = createPair('Age', 30);
const pair2 = createPair(true, 'Yes');
