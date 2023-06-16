class anime {
    constructor(temporadas, opening, ending) {
        this.temporadas = temporadas;
        this.opening = opening;
        this.ending = ending;
        this.info = `Este anime tiene ${temporadas} temporadas. Su opening es ${opening} y su ending es ${ending}`;
    }
    verInfo() {
        document.write(this.info + "<br>");
    }
}

class animeShonen extends anime {
    constructor(temporadas, opening, ending, genero) {
        super(temporadas, opening, ending);
        this.genero = genero;
        this.infoShonen = `Este anime es ${genero}, tiene ${temporadas} temporadas. Su opening es ${opening} y su ending es ${ending}`;
    }
    verInfoShonen() {
        document.write(this.infoShonen + "<br>");
    }
}

const jujutsu = new animeShonen(2, "Kaikai Kitan", "Lost in paradise", "Shonen");

jujutsu.verInfoShonen();