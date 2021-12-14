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

const reverseText = str =>
  str
  .split("")
  .reverse()
  .join("");

//Read and reverse contents of text files in a directory
// readdir(inbox, (error, files) => {
//   if (error) return console.log("Error: Folder inaccessible");
//   files.forEach(file => {
//     readFile(join(inbox, file), "utf8", (error, data) => {
//       if (error) return console.log("Error: File error");
//       writeFile(join(outbox, file), reverseText(data), error => {
//         if (error) return console.log("Error: File could not be saved!");
//         console.log(`${file} was successfully saved in the outbox!`);
//       });
//     });
//   });
// });

const directory = () =>{
  return new Promise(function(resolve,reject){
    readdir(inbox, (error,files) =>{
      if(error) reject (new Error("Folder inaccesible"))
      else resolve (files);
    })
  })
}
const readFiles = (files) =>{
  return new Promise(function(resolve,reject){
    files.forEach(file =>{
      readFile(join(inbox,file), "utf8",(error,data) =>{
        if(error) reject (new Error("File error"))
        else {
            resolve (data);
         }
        })
      })
    })
  }
const writeFiles = (data) =>{
  return new Promise(function(resolve,reject){
    writeFile(join(outbox,file), reverseText(data), error =>{
      if(error) reject (new Error("File could not be saved!"))
      else resolve (file);
    })
  })
}


directory()
  .then(files =>{
    readFiles(files)
  })
  .then(data =>{
    writeFiles(data)
  })
  .then(file=>{
    console.log(`${file} was successfully saved in the outbox!`)
  })
  .catch(err => {
    console.log(err)
  })

  
