
let numero = 0

do{
    numero = parseInt(prompt("Ingrese el tamanio de su arreglo"))
} while(numero <=0)


let arraynumero=[];

for(let i=1;i<=numero;i++){

    arraynumero.push(i);
}
    alert(arraynumero)