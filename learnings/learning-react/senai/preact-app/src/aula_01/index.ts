// arrow functions

function fun1(numero: number) {
    return numero * numero
}

const fun2 = function(numero: number) {
    return numero * numero
}

const fun3 = (numero: number) => numero * numero

// spread operators

const arr1 = [1,2,3]
const arr2 = [4,5,6]
const bar = [...arr1, ...arr2] // [1,2,3,4,5,6]

const foo1 = { name: "abe" }
const foo2 = { age: 19 }
const obj = { ...foo1, ...foo2 }

// ternary if

const isOk: boolean = true
const string: string = isOk ? "eba" : "anao"
console.log(string)

export {}