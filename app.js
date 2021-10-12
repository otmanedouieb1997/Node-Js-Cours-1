const http = require('http')
const init = require('./init')


// Create server
http.createServer((req, res) => {
    console.log('Server Starting on port 3000')
}).listen(init.params.port)