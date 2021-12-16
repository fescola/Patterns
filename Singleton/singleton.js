/* Construeix una aplicació que creï diversos Jugadors. 
Els jugadors podran ser afegits a un Joc, que mostrarà un
 marcador amb les puntuacions i el guanyador. L'aplicació ha
  de poder afegir o treure punts a cada jugador perquè el marcador canviï. 
La classe Marcador ha d'implementar un patró Singleton com a requisit indispensable. */

class Marcador {
    constructor(puntuacio){
        this.puntuacio = puntuacio;
    if(typeof Jugador.instance === "object"){
        return Jugador.instance;
    }
    Jugador.instance = this;
    return this;
    }
}

class Jugador{
    constructor(nom,puntuacio){
        this.nom = nom;
        this.puntuacio = puntuacio;
    }
}

const jugador1 = new Jugador("pep",0);
const jugador2 = new Jugador("pop",10);
const marcador = new Marcador();