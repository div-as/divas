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

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/login', locals: { layout: false } },
  '/cadastro': { view: 'pages/cadastro', locals: { layout: false } },
  '/login': { view: 'pages/login', locals: { layout: false } },
  '/trilhas': { view: 'pages/trilhas', locals: { layout: true } },
  '/perfil': { view: 'pages/perfil', locals: { layout: true } },
  '/homepage': {view: 'pages/homepage', locals: { layout: true }},
  '/apresentacao': { view: 'pages/apresentacao', locals: {layout:true}},

  'POST /cadastro': 'UsuarioController.cadastro',
  'POST /login': 'UsuarioController.login',


  // Outras rotas aqui...
  '/homepage': {view: 'pages/homepage'},
  '/dicionario': {view:'pages/dicionario'},
  '/firewall': {view: 'pages/firewall'},

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

