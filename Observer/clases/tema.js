const EventEmitter = require('events');
var eventEmitter = new EventEmitter();
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
var newMsg = (user,msg)=>{
    console.log(`${user.nom} has new msg: ${msg}`)
}

eventEmitter.on('msg',newMsg);
module.exports = Tema