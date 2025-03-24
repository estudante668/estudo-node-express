const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Camisas = require('./modelo/camisa.modelo.js');
 
app.use(express.json());

app.get('/', (req, res)=>{
  res.send('Ola sou servidor');
});

app.post('/camisa', async (req, res)=>{
   try {
    const camisa = await Camisas.create(req.body);
    res.status(201).json(camisa);
   } catch (error) {
  res.status(500).json({message:error.message});
   }
});

mongoose.connect("mongodb+srv://desenhista668:K2tdF0AslntCF66J@cluster0.c1zkf.mongodb.net/Banco-Teste?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
  console.log("Banco conectado");
  app.listen(3000, ()=>{
    console.log('porta 3000');
  })
}).catch(()=>{
  console.log('Erro de conecção');
});


