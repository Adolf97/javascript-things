class Usuario{
    constructor(nombre){
        this.nombre = nombre;
    }
    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
}

let usuario2 = new Usuario("Jane Doe");
usuario2.direccion = "5a Av Sur y 6a Ote";
usuario2.saludar = function(){
    console.log(`Hola mi nombre es ${this.nombre}, y vivo en ${this.direccion}`);
}
usuario2.saludar();