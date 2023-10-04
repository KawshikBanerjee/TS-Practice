"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
    }
    getAge(currentYear) {
        return currentYear - this.birthYear;
    }
    greet() {
        console.log('Hello there!');
    }
}
exports.Person = Person;
class Programmer extends Person {
    greet() {
        console.log('Hello world!');
    }
    greetLikeNormal() {
        // 'super' accesses superclass
        super.greet();
    }
}
// let habul = new Person('Habul Mia', 1975);
// let pkp = new Programmer('PKP', 1996);
// console.log(habul.name, habul.getAge(2023));
// habul.greet();
// pkp.greet();
// pkp.greetLikeNormal();
