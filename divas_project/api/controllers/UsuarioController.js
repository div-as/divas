module.exports = {
  cadastro: async function (req, res) {
    try {
      const usuario = await Usuario.create(req.body).fetch();
      return res.redirect('/'); // Redireciona para a página de login após o registro
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  login: async function (req, res) {
    const { email, senha } = req.body;
    if (!email || !senha) {
      return res.status(400).json({ error: 'Email e senha são obrigatórios' });
    }

    try {
      const usuario = await Usuario.findOne({ email });
      //console.log(usuario)
      if (!usuario) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }

      const isMatch = await Usuario.comparePassword(senha, usuario.senha);
      if (!isMatch) {
        return res.status(401).json({ error: 'Senha inválida' });
      }

      req.session.usuarioId = usuario.id;
      return res.redirect('/apresentacao');
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
}
