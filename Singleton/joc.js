
const Marcador = require('./marcador.js');

class Joc {
    constructor(jugadors){
        this.jugadors = jugadors;
        this.marcador = new Marcador(jugadors);
    }
    canviPunts(jugador,punts){
        jugador.punts = punts;
    }
    afegirJugador(jugador){
        this.jugadors.push(jugador)
    }
}

module.exports = Joc;