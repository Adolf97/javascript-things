let array1 = ["Maria", "Josefa", "Roberta"];
let array2 = ["Pedro", "Marcelo", array1, "Josefina"];

forRancio:
for (let array in array2) {
    if (array == 2) {
        for (let array of array1) {
            document.write(array + "<br>");
            break;
        }
    } else {
        document.write(array2[array] + "<br>");
    }
}