function esNuloOIndefinido(valor) {
  // La función recibe un argumento llamado valor.
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // null ---> true 
  // undefined ---> true 
  // 22 ---> false
  // "texto" ---> false
  // Tu código:
}

function esNuloOIndefinido(valor) {
    if (valor === null || valor === undefined)
      return true;
      return false;
}

console.log(esNuloOIndefinido(null));
console.log(esNuloOIndefinido(undefined));
console.log(esNuloOIndefinido(34));
console.log(esNuloOIndefinido(0.32));
console.log(esNuloOIndefinido("Null"));
console.log(esNuloOIndefinido("Undefined"));


module.exports = esNuloOIndefinido;