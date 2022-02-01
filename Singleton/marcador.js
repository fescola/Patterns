const Jugador = require('./jugador.js');

class Marcador {
   constructor(jugadors){
    this.jugadors = jugadors;
    console.log(this)
    if(typeof Jugador.instance === "object"){
        return Jugador.instance;
    }
    Jugador.instance = this;
    return this;
   }
   veurePunts(){
       for(let i = 0;i<this.jugadors.length; i++){
           console.log(`${this.jugadors[i].nom} te: ${this.jugadors[i].punts} punts`)
       }
   }
}
module.exports = Marcador;