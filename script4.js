let free = false;
let time = 0;

const validarCliente = ()=>{
    let edad = prompt("Cual es tu edad?");
    edad = parseInt(edad);
    if (edad >= 18) {
        if (time >= 7 && time < 10 && !free) {
            alert(`Puedes pasar gratis porque son las ${time}`);
            free = true;
        } else {
            alert(`Puedes pasar pero tienes que pagar porque son las ${time}`);
        }
    } else {
        alert("No puedes pasar");
    }
}

while (time <= 10 || !free) {
    validarCliente();
    time++;
}