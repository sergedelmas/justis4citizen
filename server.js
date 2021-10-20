const port = process.env.PORT || 8443;

const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();

const privateKey  = fs.readFileSync('sslcert/key.pem', 'utf8');
const certificate = fs.readFileSync('sslcert/cert.pem', 'utf8');
const credentials = {key: privateKey, cert: certificate};

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

app.get('/bot2', (req,res)=>{
    res.sendFile('./public/webspeechdemo.html', { root: __dirname });
})

const server = https.createServer(credentials, app);

server.listen(port, ()=>console.log('HTTPS server listening on port '+port));
