let usuarioIntroducido = prompt("Escribe tu nombre de usuario");
let passwordIntroducido = prompt("Escribe tu contrasenia");


let usuarioGuardado = "Adolf97";
let passwordGuardado = "tonto";


let usuarioCorrecto = usuarioGuardado == usuarioIntroducido;
let passwordCorrecto = passwordGuardado == passwordIntroducido;

if (usuarioCorrecto && passwordCorrecto) {
    alert("Bienvenido");
} else {
    alert("Largo de aqui vago!");
}