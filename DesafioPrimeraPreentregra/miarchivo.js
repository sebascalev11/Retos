class Jugador{
    constructor(nombre, numerocamiseta,poscicion){
        this.nombre = nombre;
        this.numerocamiseta = numerocamiseta;
        this.poscicion = poscicion;
    }

    modificarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }

    modificarNumeroCamiseta(nuevoNumeroCamiseta){
        this.numerocamiseta = nuevoNumeroCamiseta;
    }
    
    modificarPoscicion(nuevaPoscicion){
        this.poscicion = nuevaPoscicion;
    }

    retornarNombre(){
        return this.nombre
    }

    retornarNumeroCamiseta(){
        return this.numerocamiseta;
    }

    retornarPoscicion(){
        return this.poscicion;
    }
}

function ValidarTamanioEquipo(){
    
    let tamanio

    let opcion = prompt("Ingrese el tamanio de su equipo\nA) 6 jugadores\nB) 7 jugadores\nC) 11 jugadores\n para salir escriba ESC")
    
    while(opcion != "ESC"){
        switch(opcion){
            case "A":
                tamanio = 6;
                console.log("El tamanio del equipo es de " + tamanio)
                return tamanio;
                break;
            case "B":
                tamanio = 7;
                console.log("El tamanio del equipo es de " + tamanio)
                return tamanio;
                break;
            case "C":
                tamanio = 11;
                console.log("El tamanio del equipo es de " + tamanio)
                return tamanio;
                break;
        }
    }
    
}

const CreacionJugadores = (tamanio, jugadores) => {

    for(let i = 0; i<tamanio; i++){
        let jugador = new Jugador()
        jugador.nombre = prompt("Ingrese el nombre del jugador " + (i+1))
        jugador.numerocamiseta = prompt("Ingrese el numero de camiseta del jugador " + (i+1))
        jugador.poscicion = prompt("Ingrese la poscicion del jugador " + (i+1))

        jugadores.push(jugador)
    }
}

const jugadores = [];
let tamanioEquipo = ValidarTamanioEquipo();
CreacionJugadores(tamanioEquipo, jugadores);
console.log(jugadores.retornarNombre);
