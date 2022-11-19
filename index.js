const express = require('express')
const {n} = require('./custom_module/cmodule')
const os = require('os')
const path = require('path')
const fileSystem = require('fs')
const tapp = express()
const port = 3000

tapp.get('/',(req, res) => {
    res.send(n.name)
})
//const msg = fileSystem.readFileSync('./content/content.txt','utf-8')
//const rmesg = fileSystem.writeFileSync('./content/content-1.txt',`newly written file, added: ${msg}`)
//console.log(`reading file :- ${msg}`,{flag : 'a'})
fileSystem.readFile('./content/content.tt','utf-8', (err, result) => {
    if (err) {
        console.log(err.message)
        return
    }
    console.log(result)
})


//console.log(`sys ${os.uptime}`)
//console.log(`this is path module ${path.sep}`)
//const crt = path.join(__dirname,'/content',"sub",'content.txt')
//console.log(`this is ${crt}`)
//console.log(`this is ${crt}`)
tapp.listen(port, () => {
    console.log(`tApp listenig on the port ${port}`)
})