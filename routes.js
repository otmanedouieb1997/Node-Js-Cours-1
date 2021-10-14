const fs = require('fs')
const init = require('./init')




const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method
    if(url === '/') {
        res.end("Hello")
    }
    // Contact Page
    else if(url === '/contact'){
        res.end('<html><head></head><body><form action="/message" method="POST"><input type="text" name="name"><input type="submit"></form></body></html>')
    }
    // Redirecting request
    else if (url === '/message' && method === 'POST'){
    
        const body = []
        // Chunk data
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        // Parse data
        return req.on('end', () => {
            let msg = Buffer.concat(body).toString()
            msg = msg.split('=')[1]
            fs.writeFileSync(init.params.messagePath,msg)
            res.statusCode = 302
            res.setHeader('Location', '/')
            return res.end()
        })
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
        return res.end()
    }
}

module.exports = requestHandler

