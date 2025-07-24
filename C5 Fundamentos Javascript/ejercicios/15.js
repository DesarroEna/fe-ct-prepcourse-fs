function esPar(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es par.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 14 ---> true
  // 15 ---> false
  // Tu código:
}

function esPar(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}


console.log(esPar(14));
console.log(esPar(15));
console.log(esPar(0));
console.log(esPar(-2));
console.log(esPar(-3));
console.log(esPar(100));





module.exports = esPar;
