const Camisas = require('../modelo/camisa.modelo.js')


buscarCamisas = async (req, res) =>{
  try {
     const camisa = await Camisa.find({})
     res.status(200).json(camisa);
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}

buscarCamisasId = async (req, res) => {
  try {
       const {id} = req.params;
       const camisa = await Camisa.findById(id);
       res.status(200).json(camisa);
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}

postar = async (req, res) => {
  try {
      const camisa = await Camisa.create(req.body);
      res.status(201).json(camisa);
  } catch (error) {
    res.status(500).json({message:error.message});
  }
}

atualizaPorId = async (req, res) => {
    try {
       const {id} = req.params;
       const camisaNaoAtualizado = await Camisa.findByIdAndUpdate(id);
       if(!camisaNaoAtualizado){
        res.status(404).json("Produto não encontrado")
       }
       const camisa = await Camisa.findById(id);
       res.status(200).json(camisa);
    } catch (error) {
      res.status(500).json({message:error.message});
    }
}

deletar = async (req, res) => {
       try {
        const {id} = req.params;
       await Camisa.findByIdAndDelete(id);
         res.status(204).json("Produto deletado");
       } catch (error) {
        res.status(500).json({message:error.message});
       }
}



module.exports = {buscarCamisas, buscarCamisasId, postar, atualizaPorId, deletar  }

