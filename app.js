const http = require('http')
const fs = require('fs')
const init = require('./init')
const routes = require('./routes')



// Create server
http.createServer(routes).listen(init.params.port)