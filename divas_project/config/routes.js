module.exports.routes = {

  '/': { view: 'pages/login', locals: { layout: false } },
  '/cadastro': { view: 'pages/cadastro', locals: { layout: false } },
  '/trilhas': { view: 'pages/trilhas', locals: { layout: true } },
  '/apresentacao': { view: 'pages/apresentacao', locals: {layout:true}},
  '/homepage': 'HomepageController.mostrarHomepage',
  '/perfil': 'PerfilController.mostrarPerfil',
  '/admin': { view: 'pages/admin', locals: { layout: false } },
  '/inspira': { view: 'pages/inspira', locals: {layout:true}},
  '/dicionario': { view: 'pages/dicionario' },
  '/firewall': { view: 'pages/firewall' },
  '/chat': {view: 'pages/chat'},
  '/esqueceu-senha': {view: 'pages/esqueceu-senha', locals: { layout: false }},


  'POST /cadastro': 'UsuarioController.cadastro',
  'POST /login': 'UsuarioController.login',
  'POST /submitForm': 'ContatoController.create',
  'POST /esqueceu-senha': 'EsqueceuSenhaController.atualizarSenha',



};
