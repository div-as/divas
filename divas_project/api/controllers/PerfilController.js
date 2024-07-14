module.exports = {
  mostrarPerfil: async function (req, res) {
    try {
      const usuario = await Usuario.findOne({ id: req.session.usuarioId });
      sails.log(usuario)
      if (!usuario) {
        return res.redirect('/');
      }
      return res.view('pages/perfil', { usuario });

    } catch (error) {
      sails.log.error(error);
      return res.status(500).json({ error: 'An unexpected error occurred' });
    }
  },
};
