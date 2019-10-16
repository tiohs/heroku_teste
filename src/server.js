const express = require('express');
const cors = require('cors');
const server = express();

server.use(express.json());
server.use(cors());



let porta = process.env.PORT || '8080';



server.get('/', (req, res ) => res.json({'nome' : 'Hamilton Silva'}));

server.listen(porta, () => console.log('O servidor está on-line !'));
console.log(porta);