
const express = require('express')
const rota = express.Router()
const {buscarCamisas, postar, buscarCamisasId } = require('../controle/controle.js')

rota.get('/', buscarCamisas);
rota.get('/:id', buscarCamisasId);
rota.post('/postar', postar);
rota.put('/:id', atualizaPorId);
rota.delete('/:id', deletar);

module.exports = rota;