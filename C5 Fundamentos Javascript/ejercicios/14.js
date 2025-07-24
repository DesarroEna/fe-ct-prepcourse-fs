function mayorQueCincuenta(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es mayor que cincuenta.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 51 ---> true
  // 15 ---> false
  // Tu código:
}

function mayorQueCincuenta (num) {

  if (num > 50) {
    return true;
  } else {
    return false;
  }
}

console.log(mayorQueCincuenta(50));
console.log(mayorQueCincuenta(91));
console.log(mayorQueCincuenta(90));
console.log(mayorQueCincuenta(0));
console.log(mayorQueCincuenta(-10));
console.log(mayorQueCincuenta("cien"));







module.exports = mayorQueCincuenta;
