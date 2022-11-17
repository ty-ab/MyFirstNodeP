const express = require('express')
const {n} = require('./custom_module/cmodule')
const os = require('os')
const path = require('path')
const tapp = express()
const port = 3000

tapp.get('/',(req, res) => {
    res.send(n.name)
})

tapp.get('/info',(req, res) => {
    res.send()
})

console.log(`sys ${os.uptime}`)
console.log(`this is path module ${path.sep}`)
const crt = path.join(__dirname,'/content',"sub",'content.txt')
console.log(`this is ${crt}`)
tapp.listen(port, () => {
    console.log(`tApp listenig on the port ${port}`)
})