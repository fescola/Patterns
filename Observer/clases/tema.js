
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

module.exports =  { Tema }