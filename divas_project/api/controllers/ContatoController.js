/**
 * ContatoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// api/controllers/ContatoController.js

module.exports = {
    create: async function (req, res) {
      try {
        const { nome, email, mensagem } = req.body;
        const novoContato = await Contato.create({ nome, email, mensagem }).fetch();
        return res.json(novoContato);
      } catch (error) {
        return res.status(500).json({ error: 'Erro ao salvar os dados' });
      }
    }
  };
  

