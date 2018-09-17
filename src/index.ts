interface Human {
    name: String!,
    age: number!,
    gender: String!,
}

const person {
    name: "Manngold",
    age: 25, 
    gender: "male",
}

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`
};

console.log(sayHi("Mannglod", 25, "Male"));

export {};//this file is module
//tsc => make index.js and index.js.map
//node.js can't understand typescript so we must change javascript using tsc