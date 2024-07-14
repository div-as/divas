/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  '/': { view: 'pages/login', locals: { layout: false } },
  '/cadastro': { view: 'pages/cadastro', locals: { layout: false } },
  '/trilhas': { view: 'pages/trilhas', locals: { layout: true } },
  '/inspira': { view: 'pages/inspira', locals: {layout:true}},
  '/apresentacao': { view: 'pages/apresentacao', locals: {layout:true}},
  '/homepage': 'HomepageController.mostrarHomepage',
  '/perfil': 'PerfilController.mostrarPerfil',
  '/dicionario': { view: 'pages/dicionario' },
  '/firewall': { view: 'pages/firewall' },
  '/chat': {view: 'pages/chat'},
  '/verificar': {view: 'pages/esqueceu-senha', locals: { layout: false }},
  '/senhaAtualizada': {view: 'pages/esqueceu-senha', locals: { layout: false }},

  'POST /cadastro': 'UsuarioController.cadastro',
  'POST /login': 'UsuarioController.login',
  'POST /submitForm': 'ContatoController.create',
  'POST/ verificar': 'EsqueceuSenhaController.verificarConta',
  'POST/ senhaAtualizada': 'EsqueceuSenhaController.atualizarSenha',


  // Outras rotas aqui...

};

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/
