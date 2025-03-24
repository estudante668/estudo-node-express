const mongoose = require('mongoose');

const CamisaSchema = mongoose.Schema(
{
   modelo: {
    type: String,
    required: [true, 'Entre com modelo']
   },
   marca: {
    type: String,
    required:[true, 'Entre com modelo' ]
   },
   preco: {
    type: Number,
    required: true,
    default: 0
   },
   imagem: {
      type: String,
      required: false
   }
},
{
  timeStamp: true
}
);

const Camisas = mongoose.model('Camisas', CamisaSchema);
module.exports = Camisas;
