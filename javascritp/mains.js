import prompt from 'prompt';


/* Ejercicio Nº1
Escribe una función que sume que calcule la suma de dígitos de un número entero es decir la suma de todos sus dígitos.
Ejemplo: suma de dígitos (192) debería devolver 12 (1+9+2)
*/

function sumaDigitos(num){
sumatoria = 0;
while (num) {
    sumatoria += num % 10;
    num = Math.floor(num / 10);
}
console.log(sumatoria);
}

sumaDigitos(3476);

/* Ejercicio Nº2
Escriba una función que tome un string con una suma y devuelva su resultado como un número.
Deben sumarse dos números naturales(numeros enteros). La tarea de suma es una cadena de la forma '102 + 17'.
*/
const log=console.log;
function sumaCadena(string){
    let str = string;
let arr = str.split('+');
let cont = 0;
let i=0;
let len=arr.length;
 for(;i<len;i++){
    cont += parseInt(arr[i]);
}
return cont;
}


sumaCadena("102 + 17");

/* Ejercicio Nº3
Escribir una función que genere un numero random y pregunte por prompt "Adivina un numero del 1 al 10"
hasta que acierte y muestre "Adivinaste el numero"*/

let acierto=false;
while(!acierto){   
let numero = prompt('Adivia el numero del 1 al 10');
let aleatorio = Math.round(Math.random()*10);
if(numero == aleatorio){
    acierto=true;
    console.log("Felicitaciones adivinaste")
}
}