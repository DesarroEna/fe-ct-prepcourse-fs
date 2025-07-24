// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function redondearNumero(num) {
   // La función recibe un argumento llamado num el cual es un numero.
   // Debes redondear "num" al entero más próximo y retornarlo.
   // Por ejemplo: 
   // 1.5 ---> 2
   // 0.1 ---> 0
   // Tu código:

   return Math.round(num);

}

console.log(redondearNumero(1.5));
console.log(redondearNumero(0.1));
console.log(redondearNumero(3.7));
console.log(redondearNumero(2.3));
console.log(redondearNumero(0.5));
console.log(redondearNumero(-1.5));
console.log(redondearNumero(-2.7));

module.exports = redondearNumero;
