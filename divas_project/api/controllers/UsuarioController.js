/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    register: async function (req, res) {
      try {
        const usuario = await Usuario.create(req.body).fetch();
        return res.status(201).json(usuario);
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
        if (!usuario) {
          return res.status(404).json({ error: 'Usuário não encontrado' });
        }
  
        const isMatch = await Usuario.comparePassword(senha, usuario.senha);
        if (!isMatch) {
          return res.status(401).json({ error: 'Senha inválida' });
        }
  
        // Aqui você pode adicionar lógica para gerar um token JWT, se necessário
        return res.json(usuario);
      } catch (err) {
        return res.status(500).json({ error: err.message });
      }
    }
  };
  
