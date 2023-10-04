export class Person {
    name: string;
    birthYear: number;
    
    constructor(name: string, birthYear: number) {
        this.name = name;
        this.birthYear = birthYear;
    }
    
    getAge(currentYear: number): number {
        return currentYear - this.birthYear;
    }

    greet(): void {
        console.log('Hello there!')
    }
}

class Programmer extends Person {
    greet(): void {
        console.log('Hello world!');
    }

    greetLikeNormal(): void {
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