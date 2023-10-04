interface Person {
    name: string;
    birthYear: number;
    getAge(currentYear: number): number;
    greet(): void; 
}

class People implements Person {
    name: string = 'old name';
    birthYear: number = 1900;
    
    getAge(currentYear: number): number {
        return currentYear - this.birthYear;
    }

    greet(): void {
        console.log('Hello there!')
    }
}

let babul: Person = new People();

// duck type 

let someObj = {
    name: 'new name',
    birthYear: 0,
    getAge: () => 0,
    greet: () => 'new greet',

    // adding extra stuff
    foo: 'test'
}

babul = someObj;
let babulAgain = someObj;

console.log(babul.name);
console.log(babulAgain.foo);
