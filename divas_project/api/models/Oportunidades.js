/**
 * Oportunidades.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    attributes: {
      titulo: {
        type: 'string',
        required: true
      },
      descricao: {
        type: 'string',
        required: true,
      },
      link: {
        type: 'string',
        required: true
      },

    }
  },

};

