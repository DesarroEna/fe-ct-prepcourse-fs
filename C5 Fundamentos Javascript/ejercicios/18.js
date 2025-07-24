function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
  
  if (typeof letra !== 'string' || letra.length !== 1) {
    return "Dato incorrecto";
  } else if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u' ||
             letra === 'A' || letra === 'E' || letra === 'I' || letra === 'O' || letra === 'U') {
    return "Es vocal";
  } else {
    return "Dato incorrecto";
  }
}

// Pruebas correctas
console.log(esVocal("a"));
console.log(esVocal("e"));
console.log(esVocal("i"));
console.log(esVocal("o"));
console.log(esVocal("u"));
console.log(esVocal("A"));
console.log(esVocal("E"));

// Pruebas incorrectas
console.log(esVocal("b"));
console.log(esVocal("z"));
console.log(esVocal("texto"));
console.log(esVocal(""));
console.log(esVocal(123));
console.log(esVocal(null));








module.exports = esVocal;
