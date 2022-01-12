/* Escriu una aplicació que creï diferents objectes Usuari. L'aplicació podrà crear diferents
 Temes i subscriure els usuaris a ells. Quan un Usuari afegeixi un missatge a un Tema s'enviarà 
 una alerta per la consola des del Tema. També ho mostraran per consola cadascun dels Usuaris 
 que estiguin subscrits al Tema (rebran el missatge). Crea un Tema amb un Usuari 
i un altre amb dos i mostra la recepció dels missatges pels usuaris. Utilitza el mòdul events.
*/

const events = require('events');
var eventEmitter = new events.EventEmitter();

class Usuari {
    constructor(nom){
        this.nom = nom;
    }
}
class Tema {
    constructor(nom,usuaris,missatge){
        this.nom = nom;
        this.usuaris = usuaris;
        this.missatge = missatge;
    }
    nouUser(usuari){
        this.usuaris.push(usuari)
    }
    nouMsg(msg){
        this.missatge.push(msg)
        this.usuaris.forEach(user => {
            eventEmitter.emit('msg',user,msg)
        });
    }
}
//emitter
var newMsg = (user,msg)=>{
    console.log(`${user.nom} has new msg: ${msg}`)
}

eventEmitter.on('msg',newMsg);


const user1 = new Usuari("Pep")
const user2 = new Usuari("Toni")
const user3 = new Usuari("Ferran")
const tema1 = new Tema("Chill",[user1,user2],[])
const tema2 = new Tema("Gym",[user3],[])
console.log(tema1)
tema1.nouUser(user3)
//msgs enviats a temes 1,1 y 2
tema1.nouMsg('hola')
tema2.nouMsg('hey')
tema2.nouMsg('bye')
//console.log(tema1)



