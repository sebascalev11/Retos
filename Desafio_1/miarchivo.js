//Enunciado: Calcular el monto a pagar por ciertos articulos comprados

let codigoingresado = prompt("Ingrese el numero del producto a comprar: 1.Pilas, 2.Chicles, 3.Coca Cola, 4.Gatorade, 5.Corona, 6.Oreo, 7.Lapicero, 8.Chupetin, 9.Helado, 10.Banana , 11.Finalizar comprar ")


function calcularsihaydescuento(montototal){

    let apagar = 0
    if(montototal>=15){
        apagar= montototal - (montototal*(20/100))
        alert("El monto a pagar es: " + montototal + " soles, pero como su compra supera los 20 soles, se le hara un descuento del 20%, por ende el monto final a pagar es: " + apagar + " soles")
    }else{
        alert("El monto a pagar es: " + montototal + " soles")
    }
}

function calcularpreciototal(codigo){
    let precio = 0

    while(codigo != "11"){
        switch(codigo){
            case "1":
                alert("Pilas agregadas al carrito")
                precio += 2;
                break;
            case "2":
                alert("Chicles agregados al carrito")
                precio += 1;
                break;
            case "3":
                alert("Coca Cola agregada al carrito")
                precio += 4;
                break;
            case "4":
                alert("Gatorade agregada al carrito")
                precio += 3;
                break;
            case "5":
                alert("Corona agregadas al carrito")
                precio += 8;
                break;
            case "6":
                alert("Oreo agregada al carrito")
                precio += 2;
                break;
            case "7":
                alert("Lapicero agregado al carrito")
                precio += 2;
                break;
            case "8":
                alert("Chupetin agregado al carrito")
                precio += 1;
                break;
            case "9":
                alert("Helado agregado al carrito")
                precio += 3;
                break;
            case "10":
                alert("Banana agregada al carrito")
                break;
        }
        codigo = prompt("Ingrese el nombre de su personaje famoso");
    }
    
    return precio;
}

calcularsihaydescuento(calcularpreciototal(codigoingresado));
