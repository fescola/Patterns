const {
  readdir,
  readFile,
  writeFile,
  write
} = require("fs");
const {
  join
} = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");
let temp = [];
const reverseText = str =>
  str
  .split("")
  .reverse()
  .join("");


function directory(){
  return new Promise(function(resolve,reject){
    readdir(inbox, (error,files) =>{
      if (error) reject(error)
      else resolve(files)
  })
})
}

function readFiles (files) {
  files.forEach(file =>{
      readFile(join(inbox,file), "utf8",(error,data) =>{
        if(error) reject (new Error("File error"))
        else {
           writeFiles(file, data)
         }
        })
     }
  )}

function writeFiles (file,data) {
  writeFile(join(outbox, file), reverseText(data), error => {
  if (error) return console.log("Error: File could not be saved!");
  console.log(`${file} was successfully saved in the outbox!`);
  })
}

directory()
.then(files =>{
  readFiles(files)
})
