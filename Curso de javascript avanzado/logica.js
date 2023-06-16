//Estructura de una clase en Javascript ECMA Script 5

function PersonaP(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

PersonaP.prototype.decirNombre = function(){
    return `Mi nombre es ${this.nombre} ${this.apellido}`;
}

function TrabajadorP(nombre, apellido, profesion){
    //llamar al constructor padre
    PersonaP.call(this, nombre, apellido);
    this.profesion = profesion;
}

TrabajadorP.prototype = Object.create(PersonaP.prototype);

TrabajadorP.prototype.constructor = TrabajadorP;

TrabajadorP.prototype.decirProfesion = function(){
    return `Yo trabajo en ${this.profesion}`;
}

//Estructura de una clase en Javascript ECMA Script 6
class PersonaC {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    decirNombre(){
        return `Mi nombre es ${this.nombre} ${this.apellido}`;
    }
}

class TrabajadorC extends PersonaC {
    constructor(nombre, apellido, profesion){
        super(nombre, apellido);
        this.profesion = profesion;
    }
    decirProfesion(){
        return `Yo trabajo en ${this.profesion}`;
    }
}