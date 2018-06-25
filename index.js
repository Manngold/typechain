"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = "Manngold", age = "25", gender = "Male";
const sayHi = (name, age, gender) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};
sayHi(name, age, gender); //in typescript you must use arguments but attach ? to parameter that means you can select
const call = (name, age, gender) => {
    if (gender == undefined) {
        console.log(`Hello ${name}, you are ${age} so what is your gender?`);
    }
    else {
        console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
    }
};
call(name, age);
//tsc => make index.js and index.js.map
//node.js can't understand typescript so we must change javascript using tsc
//# sourceMappingURL=index.js.map