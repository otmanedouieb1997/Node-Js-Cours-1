const http = require('http')
const init = require('./init')
const fs = require('fs')



// Create server
http.createServer((req, res) => {
    //Header params
    res.setHeader('Content-Type', 'text/html')
    res.setHeader('auther', init.params.user)
    // Get url
    const url = req.url
    // Get Method
    const method = req.method
    // Routes
    if(url === '/') {
        res.end("Hello")
    }
    // Contact Page
    else if(url === '/contact'){
        res.end('<html><head> </head><body><form method="POST" action="/message"><input type="text"><input type="submit"></form></body></html>')
    }

    else if (url === '/message' && method === 'POST'){
        console.log(`====[url : ${url}]====[Method : ${method}]====`)
        console.log(`========================`)
        fs.writeFileSync(init.params.messagePath,'Hello')

        res.statusCode = 302
        res.setHeader('Location', '/')
        res.end()

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