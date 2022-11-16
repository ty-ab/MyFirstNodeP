const express = require('express')
const tapp = express()
const port = 3000

tapp.get('/',(req, res) => {
    res.send('Hi i\'m Tayei')
})

tapp.listen(port, () => {
    console.log(`tApp listenig on the port ${port}`)
})