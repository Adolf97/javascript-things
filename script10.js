class calculadoras {
    constructor() {

    }
    sumar() {
        return num1 + num2;
    }
    restar() {
        resultado = num1 - num2;
        return resultado;
    }
    multiplicar() {
        resultado = num1 * num2;
        return resultado;
    }
    dividir() {
        resultado = num1 / num2;
        return resultado;
    }
    potenciar() {
        resultado = num1**num2;
        return resultado;
    }
    raizCuadrada(num1) {
        return Math.sqrt(num1);
    }
    raizCubica(num1) {
        return Math.cbrt(num1);
    }
}

let calculadora = new calculadoras();

alert('Que operacion deseas realizar?');
let operacion = prompt("1 = Suma; 2 = Resta; 3 = Multiplicacion; 4 = Division; 5 = Potencia; 6 = Raiz Cuadrada; 7 = Raiz Cubica");
let num1;
let num2;
let resultado;

if (operacion == 1) {
    num1 = parseInt(prompt("Escribe un numero"));
    num2 = parseInt(prompt("Escribe otro numero"));
    resultado = calculadora.sumar(num1, num2);
    document.write(`el resultado es: ${resultado}`);
} else if (operacion == 2) {
    num1 = parseInt(prompt("Escribe un numero"));
    num2 = parseInt(prompt("Escribe otro numero"));
    resultado = calculadora.restar(num1, num2);
    document.write(`el resultado es: ${resultado}`);
} else if (operacion == 3) {
    num1 = parseInt(prompt("Escribe un numero"));
    num2 = parseInt(prompt("Escribe otro numero"));
    resultado = calculadora.multiplicar(num1, num2);
    document.write(`el resultado es: ${resultado}`);
} else if (operacion == 4) {
    num1 = parseInt(prompt("Escribe un numero"));
    num2 = parseInt(prompt("Escribe otro numero"));
    resultado = calculadora.dividir(num1, num2);
    document.write(`el resultado es: ${resultado}`);
} else if (operacion == 5) {
    num1 = parseInt(prompt("Escribe un numero a potenciar"));
    num2 = parseInt(prompt("Escribe la potencia"));
    resultado = calculadora.potenciar(num1, num2);
    document.write(`el resultado es: ${resultado}`);
} else if (operacion == 6) {
    num1 = parseInt(prompt("Escribe un numero"));
    resultado = calculadora.raizCuadrada(num1);
    document.write(`el resultado es: ${resultado}`);
} else if (operacion == 7) {
    num1 = parseInt(prompt("Escribe un numero"));
    resultado = calculadora.raizCubica(num1);
    document.write(`el resultado es: ${resultado}`);
} else {
    alert("Operacion no valida");
}