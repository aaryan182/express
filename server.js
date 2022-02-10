const express = require('express')

const app = express()

app.get('/', (req,res) => {
    res.send('hello world')
})

function middleware(res,req, next) {
    console.log(req.url);
    res.send('asdkjf')
}

app.listen(3333, () => {
    console.log('server started on http://localhost:3333');
})