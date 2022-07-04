//nivell 1 - exercici 1

const fs = require('fs')
const { ConsoleWriter } = require('istanbul-lib-report')
const content = 'We did it, they called us fools but we did it!!'


fs.writeFile('C:\Users\formacio\Desktop>entrega1-5.txt', content, { flag: 'w+' }, err => {if (err) {console.log(err)}})

