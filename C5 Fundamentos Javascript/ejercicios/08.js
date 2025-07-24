function esNumeroEntero(numero) {
    if (typeof numero !== 'number' || isNaN(numero)){
      return false;
    }

      return numero === Math.floor(numero);
}

console.log(esNumeroEntero(24));
console.log(esNumeroEntero(-1234));
console.log(esNumeroEntero("24"));
console.log(esNumeroEntero("diez"));
console.log(esNumeroEntero(0.43));
console.log(esNumeroEntero(100000));


module.exports = esNumeroEntero;