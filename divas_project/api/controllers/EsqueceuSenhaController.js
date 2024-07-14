const bcrypt = require('bcrypt');

module.exports = {
  atualizarSenha: async function (req, res) {
    try {
      const novaSenha = req.body.novaSenha;
      const email = req.body.email;

      const usuario = await Usuario.findOne({ email: email });

      if (!usuario) {
        console.log('Usuario não encontrado');
        return res.status(404).json({ error: 'Usuario não encontrado' });
      }

      const saltRounds = 10;
      const hashedSenha = await bcrypt.hash(novaSenha, saltRounds);

      await Usuario.updateOne({ email: email }).set({ senha: hashedSenha });

      return res.json({ message: 'Password reset successful' });
    } catch (error) {
      console.error('Error during senha reset:', error);
      return res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
};
