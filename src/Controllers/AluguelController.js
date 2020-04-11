const connection = require('../data/connection');
// const UsuarioId = 8; // temporario
// const Usuario = require('../Controllers/UsuarioController');


module.exports = {
  async handleNovoAluguel(model, response){

    const {dataRetirada, dataEntrega, carroId} = model.body; // trocar carroid e usuarioid para ser pegos através de uma const no usuarioController
    let userId = Usuario.usuarioId
    await connection('Aluguel')
    .insert({
      dataRetirada,
      dataEntrega,
      userId,
      carroId
    });

    return response.json("ok")
  }
}