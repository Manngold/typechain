const sayHi = (name: string, age: number, gender: string): string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}`
};

console.log(sayHi("Mannglod", 25, "Male"));

export {};//this file is module
//tsc => make index.js and index.js.map
//node.js can't understand typescript so we must change javascript using tsc