const port = process.env.PORT || 8080;

const http = require('http');
const express = require('express');
const app = express();


app.use(express.static('public'))

app.get('/requester', (req,res)=>{
    res.sendFile('./public/requester.html', { root: __dirname });
})

app.get('/operator', (req,res)=>{
    res.sendFile('./public/operator.html', { root: __dirname });
})

app.get('/bot', (req,res)=>{
    res.sendFile('./public/index.html', { root: __dirname });
})

const server = http.createServer(app);

server.listen(port, ()=>console.log('HTTP server listening on port '+port));