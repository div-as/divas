/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const bcrypt = require('bcrypt');

module.exports = {
  attributes: {
    nome: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true
    },
    senha: {
      type: 'string',
      required: true
    }
  },

  customToJSON: function() {
    return _.omit(this, ['senha']);
  },

  beforeCreate: async function (usuario, proceed) {
    if (usuario.senha) {
      usuario.senha = await bcrypt.hash(usuario.senha, 10);
    }
    return proceed();
  },

  comparePassword: async function (senha, hash) {
    return await bcrypt.compare(senha, hash);
  }
};


