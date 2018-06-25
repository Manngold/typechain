"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = "Manngold", age = "25", gender = "Male";
const sayHi = (name, age, gender) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};
sayHi(name, age); //in typescript you must use arguments
//tsc => make index.js and index.js.map
//node.js can't understand typescript so we must change javascript using tsc
//# sourceMappingURL=index.js.map