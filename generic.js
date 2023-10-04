"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_1 = require("./class");
function echo(arg) {
    return arg;
}
let n = echo(7);
class Admin extends class_1.Person {
}
class Manager extends class_1.Person {
}
let admin = new Admin('admin', 1980);
let manager = new Manager('manager', 1975);
function personEcho(person) {
    // this essentially checks if the arg passed
    // is of class Person or of a class that
    // extends Person
    return person;
}
let foo = personEcho(admin);
