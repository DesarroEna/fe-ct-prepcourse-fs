function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
      const visto = new Set();
    
    for (const numero of numeros) {
        if (visto.has(numero)) {
            return numero;
        }
        visto.add(numero);
    }
    
    return null;
}

module.exports = encontrarElementoRepetido;