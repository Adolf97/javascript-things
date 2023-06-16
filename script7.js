/*let a = 10;
let b = 15;
let minimo = 0;

while (a && b) {
    --a;
    --b;
    ++minimo;
}

document.write(minimo);*/

/*let num1 = parseInt(prompt("Escribe un numero"));

let num2 = parseInt(prompt("Escribe un numero"));

let num3 = parseInt(prompt("Escribe un numero"));

let numeros = [num1, num2, num3];

let sum = num1 + num2 + num3;

numeros = numeros.length;

document.write(sum / numeros);*/

/*function primo(numero) {
    for (var i = 2; i < numero; i++) {

        if (numero % i === 0) {
            return `El numero ${numero} no es primo`;
        }
    }
    return `El numero ${numero} es primo`;
}

let num = parseInt(prompt('Escribe un numero'));

numero = num;

document.write(primo(numero));*/

/*let phrase = prompt("Escribe una frase");

let firstLetter = phrase[0];

alert(`La primera letra de la frase es: ${firstLetter}`);

let numeroMaxIndex = phrase.length;

let numeroIndex = parseInt(prompt(`Escribe un numero entre 1 y ${numeroMaxIndex}`));

if (numeroIndex <= numeroMaxIndex) {
    let letraEnIndex = phrase[numeroIndex-1];
    alert(`La letra que esta en esa posicion es: ${letraEnIndex}`);
} else {
    alert(`Ese numero no esta dentro del rango de busqueda`);
}*/

/*let phrase = prompt("Escribe una frase");

if (phrase.length % 2 == 0) {
    alert(`Tu frase es de numeros pares`);
} else {
    alert(`Tu frase es de numeros impares`);
}*/

/*let word1 = prompt("Escribe una palabra");
let word2 = prompt("Escribe una segunda palabra");

if (word1.length < word2.length) {
    alert(`La palabra ${word1} es mas corta que ${word2}`);
} else {
    alert(`La palabra ${word1} es mas larga que ${word2}`);
}*/

/*let name1 = prompt("Escribe un nombre");
let name2 = prompt("Escribe otro nombre");

if (name1[0] == name2[0] || name1[name1.length-1] == name2[name2.length-1]) {
    alert(true);
} else {
    alert(false);
}*/

/*let numero = parseInt(prompt("Escribe un numero"));

if (numero < 0) {
    valorAbsoluto = numero * -1;
    alert(`El valor absoluto de ${numero} es: ${valorAbsoluto}`);
}*/

/*function reverse(string) {
    return string.split("").reverse().join("-");
}

let reverseString = reverse("adolfo");
document.write(reverseString);*/

/*let nombre = "eres muy feo";

for (i = nombre.length; i > 0; i--) {
    document.write(nombre[i-1]);
}*/

/*let array = [];

for (i = 0; i < 3; i++) {
    array[i] = prompt("Escribe un nombre");
    document.write(array[i]+"<br>");
}*/

/*let num1 = parseInt(prompt("Escribe un numero"));
let num2 = parseInt(prompt("Escribe otro numero"));

if (num1 > num2) {
    document.write(`${num1} es mayor que ${num2}`);
} else {
    document.write(`${num2} es mayor que ${num1}`);
}*/

/*let letra = prompt("Escribe una letra");

if (letra.length == 1) {
    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        document.write(`La letra ${letra} es una vocal`);
    } else {
        document.write(`La letra ${letra} es una consonante`);
    }
} else {
    document.write("Solo escribe una letra imbecil");
}*/

/*let num1 = parseInt(prompt("Escribe un numero"));
let num2 = parseInt(prompt("Escribe un segundo numero"));
let num3 = parseInt(prompt("Escribe un tercer numero"));

if (num1 < num2) {
    if (num1 < num3) {
        document.write(`El numero ${num1} es el menor de los tres numeros`);
    } else {
        document.write(`El numero ${num3} es el menor de los tres numeros`);
    }
} else if ( num2 < num3) {
    document.write(`El numero ${num2} es el menor de los tres numeros`);
} else {
    document.write(`El numero ${num3} es el menor de los tres numeros`);
}*/

/*let year = parseInt(prompt("Escribe un anio"));

if (year % 4 == 0 && year % 100 != 0) {
    document.write(`Es un anio bisiesto`);
} else if (year % 100 == 0 && year % 400 == 0) {
    document.write(`Es un anio bisiesto`);
} else {
    document.write(`no es un anio bisiesto`);
}*/

/*let num = parseInt(prompt("Escribe un numero"));

for (i = 0; i < num; i++) {
    document.write((i+1)+"<br>");
}*/

/*let sum = 0;

for (i = 0; i <= 100; i++) {
    sum += i;
}

document.write(sum);*/

/*let num = parseInt(prompt("Escribe un numero"));

for (i = 1; i <= num; i++) {
    if (num % i == 0) {
        document.write(i+"<br>");
    }
}*/

/*let frase = prompt("Escribe una frase");
let sum = 0;

for (i = 0; i < frase.length; i++) {
    if (frase[i] == "a" || frase[i] == "e" || frase[i] == "i" || frase[i] == "o" || frase[i] == "u") {
        sum++;
    }
}
document.write(sum);*/