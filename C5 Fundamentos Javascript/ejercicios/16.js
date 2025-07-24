function esImpar(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es impar.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 15 ---> true
  // 14 ---> false
  // Tu código:
}

function esImpar(num) {
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log(esImpar(14));
console.log(esImpar(15));
console.log(esImpar(0));
console.log(esImpar(-2));
console.log(esImpar(-3));
console.log(esImpar(100));

module.exports = esImpar;


