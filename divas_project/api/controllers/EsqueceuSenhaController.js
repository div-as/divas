module.exports = {
  verificarConta: async function (req, res) {
    try {
      const { nome, email } = req.body;
      const usuario = await Usuario.findOne({ nome, email });

      if (!usuario) {
        return res.status(404).json({ error: 'usuario not found' });
      }
      return res.json({ message: 'Verification successful' });

    } catch (error) {
      console.error('Error during verification:', error);
      return res.status(500).json({ error: 'An unexpected error occurred' });
    }
  },

  atualizarSenha:async function (req, res) {
    try {
      const { novaSenha, email } = req.body;

      const usuario = await Usuario.findOne({ email });

      if (!usuario) {
        return res.status(404).json({ error: 'Usuario não encontrado' });
      }

      const saltRounds = 10;
      const hashedSenha = await bcrypt.hash(novaSenha, saltRounds);

      await Usuario.updateOne({ id: usuario.id }).set({ senha: hashedSenha });

      return res.redirect('/');
    } catch (error) {
      console.error('Error during senha reset:', error);
      return res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
};

