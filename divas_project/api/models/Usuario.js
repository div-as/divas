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
    },
    linkedin: {
      type: 'string',
      allowNull: true // Permitir que seja nulo se não for fornecido
    },
    telefone: {
      type: 'string',
      allowNull: true // Permitir que seja nulo se não for fornecido
    },
    idade: {
      type: 'number',
      allowNull: true
    },
    nivel: {
      type: 'string',
      allowNull: true
    },
    foto: {
      type: 'string',
      allowNull: true
    },
    oportunidades: {
      model: 'oportunidades',
      columnName: 'oportunidades_id',
      required: false,
      type: 'number'
    },
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
