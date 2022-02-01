const Jugador = require('./jugador.js');
const Joc = require('./joc.js');
//const Marcador = require('./marcador.js');


//creo els jugadors
const jugador1 = new Jugador("pep",5);
const jugador2 = new Jugador("pop",10);
const jugador3 = new Jugador("pip",3);
const joc = new Joc([jugador1,jugador2]);
console.log(joc)
//afegim un jugador
joc.afegirJugador(jugador3)
//ensenyo els punts del marcador
joc.marcador.veurePunts();
