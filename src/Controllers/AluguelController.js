import Connection from '../data/connection';


export default {
  async handleNovoAluguel(aluguel){
    await Connection('Aluguel')
    .insert(aluguel.dataRetirada,aluguel.dataEntrega,aluguel.usuarioId,aluguel.carroId)
    .into('DataRetirada','DataEntrega','UsuarioId','CarroId')
    .then((response) => {
      console.log(response);
    }); 
  }
}