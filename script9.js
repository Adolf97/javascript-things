class apps {
    constructor(descargas, puntuacion, peso) {
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    instalar() {
        if(this.instalada == false) {
            this.instalada = true;
            alert("Instalando aplicacion");
        } else {
            alert("Aplicacion ya instalada");
        }
    }
    desinstalar() {
        if(this.instalada == true) {
            this.instalada = false;
            alert("Desinstalando aplicacion");
        }
    }
    abrir() {
        if(this.iniciada == false && this.instalada == true) {
            this.iniciada = true;
            alert("Abriendo aplicacion");
        }
    }
    cerrar() {
        if(this.iniciada == true && this.instalada == true) {
            this.iniciada = false;
            alert("Cerrando aplicacion");
        }
    }
}

app1 = new apps("5 millones","4.8 estrellas","1GB");

app1.instalar();
app1.desinstalar();
app1.abrir();
app1.cerrar();