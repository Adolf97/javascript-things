class celulares {
    constructor(color, peso, size, rdc, ram) {
        this.color = color;
        this.peso = peso;
        this.size = size;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        //Para los metodos
        this.encendido = false;
    }
    presionarBotonEncendido() {
        if (this.encendido == false) {
            alert("Celular encendido");
            this.encendido = true;
        } else {
            alert("El celular esta apagado");
            this.encendido = false;
        }
    }
    reiniciar() {
        if (this.encendido == true) {
            alert("Reiniciando el celular");
        } else {
            alert("El celular esta apagado");
        }
    }
    tomarFoto() {
        alert(`Foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
    }
    grabarVideo() {
        alert(`Grabando video en: ${this.resolucionDeCamara}`);
    }
    mobileInfo() {
        return `Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Tamanio: <b>${this.size}</b><br>
        Resolucion de Camara: <b>${this.resolucionDeCamara}</b><br>
        Memoria RAM: <b>${this.memoriaRam}</b><br>`
    }
}

class celularesAltaGama extends celulares {
    constructor(color, peso, size, rdc, ram, rdce) {
        super(color, peso, size, rdc, ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento() {
        alert("Estas grabando en camara lenta");
    }
    reconocimientoFacial() {
        alert("Vamos a iniciar un reconocimiento facial");
    }
    mobileInfoAltaGama() {
        return this.mobileInfo() + `Resolucion Camara Extra: <b>${this.resolucionDeCamaraExtra}</b><br>`;
    }
}


celular1 = new celulares("Rojo","150g","5`","full HD","4GB");
celular2 = new celulares("Negro","155g","5.5`","full HD","8GB");
celular3 = new celulares("Blanco","144g","4.8`","full HD","4GB");

celularAltaGama1 = new celularesAltaGama("Rojo","140g","5.2`","4K","8GB","Full HD");
celularAltaGama2 = new celularesAltaGama("Negro","158g","6`","4K","8GB","HD");

document.write(`
${celularAltaGama1.mobileInfoAltaGama()} <br>
${celularAltaGama2.mobileInfoAltaGama()} <br>`);