import { Person } from "./class";

function echo<T>(arg: T): T {
    return arg;
}

let n = echo(7);
 
class Admin extends Person {}

class Manager extends Person {}

let admin = new Admin('admin', 1980);
let manager = new Manager('manager', 1975);

function personEcho<T extends Person>(person: T): T {
    // this essentially checks if the arg passed
    // is of class Person or of a class that
    // extends Person
    return person;
}

let foo = personEcho(admin);