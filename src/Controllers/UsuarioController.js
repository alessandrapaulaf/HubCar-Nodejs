const connection = require('../data/connection');
const usuarioLogado = false;

const UserDevices = {
  
  async validarCadastro(usuario){
    let dados = await connection('Users').select('*').where('email',usuario.email);
    
    if (dados != null)
    this.CadastrarUsuario(usuario, res);
    else
    return json("Já existe usuário cadastrado com esse email"); 
  },
  
  async CadastrarUsuario(usuario, res){
    const {nome, cpf, email, senha, uf, cidade} = usuario.body;

    await connection('Users').insert({
      nome,
      cpf,
      email,
      senha,
      uf,
      cidade
    });

    return res.json("Cadastrado com sucesso");
  },

  async Authentication(usuario){
    let dados = await connection('Users').select('*').where('email',usuario.email);

    if (dados != null){
      if (dados.senha != usuario.senha){
        return json("Usuario ou senha incorretos");
      }
      else{
        usuarioLogado = true;
        window.location.href = "http://locahost:5000/home";
      }
    }else{
      return json("Não existe usuário cadastro com esse email");
    }
  }
  
};

const UsuarioId = (async function getUsuario() {
  const id = await connection('Users').select('id');

  return id;
});

module.exports = {
  login : UserDevices,
  usuarioId : UsuarioId
}


