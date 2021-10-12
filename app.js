const http = require('http')
const init = require('./init')


// Create server
http.createServer((req, res) => {
    //Header params
    res.setHeader('Content-Type', 'text/html')
    res.setHeader('auther', init.params.user)
    if(req.url === '/') {
        res.end("Hello")
    }
    // 404 Page Not Found
    else{
        res.write('<html>')
        res.write('<head>')
        res.write('</head>')
        res.write('<body>')
        res.write('<div>')
        res.write('<h1>')
        res.write('Page Not Found!')
        res.write('</h1>')
        res.write('</div>')
        res.write('</body>')
        res.write('</html>')
        res.end()
    }
    console.log('Server Starting on port 3000')
}).listen(init.params.port)