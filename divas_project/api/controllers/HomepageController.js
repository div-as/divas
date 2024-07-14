/**
 * HomepageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  mostrarHomepage: async function(req, res) {
    try {
      const usuarioId = req.params.usuarioId || req.session.usuarioId;
      const usuario = await Usuario.findOne({ id: usuarioId });
      if (!usuario) {
        return res.redirect('/');
      }
      return res.view('pages/homepage', { usuario });
    } catch (error) {
      sails.log.error('Error in overview action:', error);
      return res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }

  
};

