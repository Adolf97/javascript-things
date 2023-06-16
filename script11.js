const obtenerInformacion = (materia)=>{
    materias = {
        Fisica: ["Perez","Pedro","Maria","Juan","Alfonso","Luis","Cofla"],
        Programacion: ["Dalto","Pedro","Luisa","Juan","Alfonso","Carlos"],
        Logica: ["Rodriguez","Pedro","Juan","Alfonso","Luis","Cofla","Guadalupe"],
        Quimica: ["Hernandez","Pedro","Maria","Juan","Alfonso","Luis","Cofla"]
    }
    if (materias[materia] !== undefined) {
        return [materias[materia],materia];
    } else {
        return "La materia no existe";
    }
}

let informacion = obtenerInformacion("Fisica");

let profesor = obtenerInformacion("Fisica")[0][0];
alumnos = obtenerInformacion("Fisica")[0];
alumnos.shift();
document.write(`El profesor de ${informacion[1]} es: <b>${profesor}</b><br>
Los alumnos son: <b>${alumnos}</b><br>`);