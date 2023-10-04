"use strict";
let fn = () => 'response';
let m = 56;
let arr = [3, 4];
arr.push(45);
console.log(arr);
function add(a, b = 0, c) {
    return c == undefined ? a + b : a + b + c;
}
let summ = add(1, 2);
console.log(summ);
