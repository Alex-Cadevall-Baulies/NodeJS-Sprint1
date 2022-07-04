//nivell 1 - exercici 1

const fs = require('fs')
const { ConsoleWriter } = require('istanbul-lib-report')
const content = 'We did it, they called us fools but we did it!!'


fs.writeFile('entrega1-5.txt', content, err => {if (err) {console.log(err)}})

//nivell 1 - exercici 2
fs.readFile('entrega1-5.txt', (error, text) => {if (error) {console.log(error)} console.log(text.toString())})

//nivell 1 - exercici 3
const zlib = require("zlib")
const inp = fs.createReadStream('entrega1-5.txt')
const out = fs.createWriteStream('entrega1-5.txt.gz')
const gzip = zlib.createGzip()

inp.pipe(gzip).pipe(out);
console.log("Gzip created!")

// nivell 2 - Exercici 1

setInterval ( () => {console.log('Espero no fer-me pesat')}, 1000)

// nivell 2 - Exercici 2

const { spawn } = require('child_process')
const child = spawn ('dir' + 'echo $env:USERPROFILE', (stdout) => console.log(stdout))

/*
1. determinar sistema
2. determinar comand per revisar carpeta
3. determinar carpeta a revisar */