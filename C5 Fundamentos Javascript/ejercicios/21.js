function multiplica(x, y) {
  // La función recibe dos argumentos llamados "x" e "y" que son números.
  // Retorna el resultado de la multiplicacion de estos argumentos.
  // Por ejemplo: 
  // 10, 5 ---> 50
  // 5, 5 ---> 25
  // Tu código:
  
  return x * y;
}

console.log(multiplica(10, 5));
console.log(multiplica(5, 5));
console.log(multiplica(7, 3));
console.log(multiplica(-4, 6));
console.log(multiplica(-3, -8));
console.log(multiplica(0, 100));
console.log(multiplica(2.5, 4));


module.exports = multiplica;