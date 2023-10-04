"use strict";
class People {
    constructor() {
        this.name = 'old name';
        this.birthYear = 1900;
    }
    getAge(currentYear) {
        return currentYear - this.birthYear;
    }
    greet() {
        console.log('Hello there!');
    }
}
let babul = new People();
// duck type 
let someObj = {
    name: 'new name',
    birthYear: 0,
    getAge: () => 0,
    greet: () => 'new greet',
    // adding extra stuff
    foo: 'test'
};
babul = someObj;
let babulAgain = someObj;
console.log(babul.name);
console.log(babulAgain.foo);
