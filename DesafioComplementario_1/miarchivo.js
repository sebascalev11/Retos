//Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado

// let numero = parseInt(prompt("Ingrese un numero"))

// for(let i = 0; i < numero; i++){
//     console.log(numero + i)
// }

//Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.

// let texto = ''
// do{
//     texto = prompt("Ingrese un texto")
// }while(texto != "ESC")
// console.log("Texto Correcto")

//Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.

let numero = parseInt(prompt("Ingrese un numero"))
for(let i= 0; i< numero; i++){
    console.log((i + 1) + ")" + " Hola")
}