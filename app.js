const express = require('express')



const app = express()


app.use((req, res, next) =>{
    console.log('=> start middleware 1' )
    console.log(req.url)
    console.log('=> end middleware 1' )
    next() // move to next middleware 
})

app.use((req, res, next) =>{
    console.log('=> start middleware 2' )
    res.send('<h1>Welcome To Express</h1>')
    console.log('=> end middleware 2' )
})


// start express server
const server = app.listen(3000, () => {
    console.log('===================================')
    console.log('Express server started on port 3000')
    console.log('===================================')
})