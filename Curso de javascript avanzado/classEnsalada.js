////////Patrón Decorador

class Ensalada{
    listaIngredientes = [];

    costoTotal(){
        return 0;
    }

    constructor(){}
}

const Ingredientes = {};

Ingredientes.tomate = (ensalada)=>{
    ensalada.listaIngredientes.push("tomate");
    let costo = ensalada.costoTotal();
    ensalada.costoTotal = ()=> costo + 0.5;
}

Ingredientes.lechuga = (ensalada)=>{
    ensalada.listaIngredientes.push("lechuga");
    let costo = ensalada.costoTotal();
    ensalada.costoTotal = ()=> costo + 0.2;
}

Ingredientes.aguacate = (ensalada)=>{
    ensalada.listaIngredientes.push("aguacate");
    let costo = ensalada.costoTotal();
    ensalada.costoTotal = ()=> costo + 1;
}

Ingredientes.pimiento = (ensalada)=>{
    ensalada.listaIngredientes.push("pimiento");
    let costo = ensalada.costoTotal();
    ensalada.costoTotal = ()=> costo + 0.15;
}


let ensalada = new Ensalada();
Ingredientes.lechuga(ensalada);
Ingredientes.tomate(ensalada);
Ingredientes.aguacate(ensalada);
Ingredientes.pimiento(ensalada);

console.log("Ingredientes: "+ensalada.listaIngredientes.join());
console.log("Costo total: "+ensalada.costoTotal());