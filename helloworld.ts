let fn = () => 'response';

let m: number = 56;
let arr: number[] = [3, 4];
arr.push(45);

console.log(arr);

function add(a: number, b: number = 0, c?: any) {
    return c==undefined ? a+b: a+b+c;
}

let summ = add(1, 2);
console.log(summ);