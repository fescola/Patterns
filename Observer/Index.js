const events = require('events');
const { Tema } = require('./clases/tema.js')
const { Usuari } = require('./clases/user.js')
var eventEmitter = new events.EventEmitter();


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
console.log(tema1)



