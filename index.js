const express = require('express');
const mongoose = require('mongoose');
const app = express();

const CamisasRotas = require('./rotas/rotas.js')
 
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/loja', CamisasRotas);

app.get('/', (req, res)=>{
  res.send('Ola sou servidor');
});


//CONECÇÃO MONGODB COM MONGOOSE
mongoose.connect("mongodb+srv://desenhista668:K2tdF0AslntCF66J@cluster0.c1zkf.mongodb.net/Banco-Teste?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
  console.log("Banco conectado");
  app.listen(3000, ()=>{
    console.log('porta 3000');
  })
}).catch(()=>{
  console.log('Erro de conecção');
});

/**
 * 
 */
