let cantidadAlumnos = prompt("Cuantos alumnos son?");
let alumnosTotales = [];

for (i = 0; i < cantidadAlumnos; i++) {
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)), 0];
}

const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P") {
        alumnosTotales[p][1]++;
    }
}

for (i = 0; i < 15; i++) {
    for(alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    }
}

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}: <br>
    Presentes: ${alumnosTotales[alumno][1]} <br>
    Ausencias: ${15 - parseInt(alumnosTotales[alumno][1])}`;

    if (15 - alumnosTotales[alumno][1] >= 5) {
        resultado+= "<b style='color: red'> reprobado por inasistencias</b> <br><br>";
    } else {
        resultado+= "<br>";
    }

    document.write(resultado);
}