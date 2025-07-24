function esTipoDato(valor) {
    if (valor === null) {
        return "null";
    } else if (Array.isArray(valor)) {
        return "array";
    } else if (typeof valor === "object") {
        return "object";
    } else {
        return typeof valor;
    }
}

module.exports = esTipoDato;

let dato1 = "Hola";
let dato2 = 42;
let dato3 = true;
let dato4 = { nombre: "Carlos" };
let dato5 = [1, 2, 3];
let dato6 = null;
let dato7 = undefined;

console.log("El tipo de dato1 es:", esTipoDato(dato1)); // "string"
console.log("El tipo de dato2 es:", esTipoDato(dato2)); // "number"
console.log("El tipo de dato3 es:", esTipoDato(dato3)); // "boolean"
console.log("El tipo de dato4 es:", esTipoDato(dato4)); // "object"
console.log("El tipo de dato5 es:", esTipoDato(dato5)); // "array"
console.log("El tipo de dato6 es:", esTipoDato(dato6)); // "null"
console.log("El tipo de dato7 es:", esTipoDato(dato7)); // "undefined"