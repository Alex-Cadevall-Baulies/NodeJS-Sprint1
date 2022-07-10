//nivell 1 - exercici 1
const documentWiriting = message => {
const fs = require('fs')
const content = message
fs.writeFile('entrega1-5.txt', content, err => {if (err) {console.log(err)}})
}

documentWiriting('We did it, they called us fools but we did it!!')

//nivell 1 - exercici 2
const readFile = document => {
const fs = require('fs')
const docToRead = document
fs.readFile(docToRead, (error, text) => {if (error) {console.log(error)} console.log(text.toString())})
}

readFile('entrega1-5.txt')


//nivell 1 - exercici 3
const compressDoc = document => {
const fs = require('fs')
const docToCompress = document
const zlib = require("zlib")
const inp = fs.createReadStream(docToCompress)
const out = fs.createWriteStream(docToCompress)
const gzip = zlib.createGzip()

inp.pipe(gzip).pipe(out);
console.log("Gzip created!")
}

compressDoc('entrega1-5.txt')

// nivell 2 - Exercici 1

const theWorstMessage = message => {setInterval ( () => {console.log(message)}, 1000)}
theWorstMessage(`Espero no fer-me pesat`)

// nivell 2 - Exercici 2

const homeDirectoryFiles = () => {
const os = require('os')
const userHomeDirectory = os.homedir()

const fs = require('fs')
fs.readdir(userHomeDirectory, (err, files) => {
    files.forEach(file => {
      console.log(file);
    });
  });}
  homeDirectoryFiles ()
