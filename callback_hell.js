const {
  readdir,
  readFile,
  writeFile,
  fs,
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

// Read and reverse contents of text files in a directory
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



const something = () =>{
  return new Promise(function(resolve,reject){
    readdir(inbox, (error,files) =>{
      resolve (files);
    })
    reject(new Error("Folder inaccesible"))
  })
}

something()
  .then(files=>{
    files.forEach(file =>{
      readFile(join(inbox,file), "utf8",(error,data))
    })
  })
  .then(data=>{
    writeFile(join(outbox,file), reverseText(data), error =>{
      console.log(`${file} was successfully saved in the outbox!`)
    })
  })
  .catch(console.log('theres an error'))