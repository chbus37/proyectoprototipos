function Automovil(marca, modelo, color, anio, titular){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
}

// INSTANCIAS

let automovil1 = new Automovil('ford', 'focus', 'rojo', 2015, 'matias perez');
let automovil2 = new Automovil('chevrolet', 'camaro', 'amarillo', 2020, 'Susana Perez');
let automovil3 = new Automovil('renault', 'clio', 'blanco', 2019, 'Sergio Garcia');
let automoviles = [automovil1, automovil2, automovil3];

Automovil.prototype.venderAutomovil = function(nuevoTitular){
    this.titular = nuevoTitular;
}

Automovil.prototype.encender = function(){
    alert("El automovil fue encendido");
}

Automovil.prototype.verAutomovil = function(){
    return `${this.marca} ${this.modelo} - ${this.anio} - ${this.titular}`
}

function mostrarAutomoviles(){
    let lista = document.getElementById("listaAutomoviles");

    for(let automovil of automoviles){
        let item = document.createElement('li');
        item.innerText = automovil.verAutomovil();
        lista.appendChild(item);
    }
}

