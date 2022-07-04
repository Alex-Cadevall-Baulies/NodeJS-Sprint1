//nivell 1 - exercici 1

const fs = require('fs')
const { ConsoleWriter } = require('istanbul-lib-report')
const content = 'We did it, they called us fools but we did it!!'


fs.writeFile('entrega1-5.txt', content, err => {if (err) {console.log(err)}})

//nivell 1 - exercici 2
fs.readFile('entrega1-5.txt', err => {if (err) {console.log(err)}})