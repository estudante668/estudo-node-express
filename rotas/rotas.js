
const express = require('express')
const rota = express.Router()
const {buscarCamisas} = require('../controle/controle.js')


rota.get('/', buscarCamisas);

module.exports = rota;