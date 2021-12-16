
class Marcador {
    constructor(jugadors){
        this.jugadors = jugadors;
    if(typeof Jugador.instance === "object"){
        return Jugador.instance;
    }
    Jugador.instance = this;
    return this;
    }
    canviPunts(jugador,punts){
        jugador.punts = punts;
    }
}

class Jugador{
    constructor(nom,punts){
        this.nom = nom;
        this.punts = punts;
    }
}

class Joc {
    constructor(jugadors){
        this.jugadors = jugadors;
    }
    crearMarcador(){
        marcador.jugadors = this.jugadors;
    }
}
//creo els jugadors
const jugador1 = new Jugador("pep",0);
const jugador2 = new Jugador("pop",10);
const jugador3 = new Jugador("pop",5);
//faig el marcador vuit
const marcador = new Marcador();
//el joc rep els jugadors
const joc = new Joc([jugador1,jugador2,jugador3]);
//els jugadors son introduits al singleton marcador
joc.crearMarcador();
//canvi de punts per comprovar que funciona
marcador.canviPunts(jugador3,25);
//comprovacio del marcador pler
console.log(marcador);