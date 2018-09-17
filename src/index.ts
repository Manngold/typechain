class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender?: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const manngold = new Human("manngold", 25, "male");

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${
        person.gender}`
};

console.log(sayHi(manngold));

export {};//this file is module
//tsc => make index.js and index.js.map
//node.js can't understand typescript so we must change javascript using tsc