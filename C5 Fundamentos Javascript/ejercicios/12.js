function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos llamados "str1" y "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // "SoyHenry", "HenrySoy" ---> true 
  // "hi", "there" ---> false 
  // Tu código:
}

function tienenMismaLongitud(str1, str2) {
  return str1.length === str2.length;
}


console.log(tienenMismaLongitud("SoyHenry", "HenrySoy"));
console.log(tienenMismaLongitud("hi", "there"));
console.log(tienenMismaLongitud("abc", "def"));
console.log(tienenMismaLongitud("", "a"));
console.log(tienenMismaLongitud("", ""));



module.exports = tienenMismaLongitud;