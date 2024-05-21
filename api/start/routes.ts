/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const VeterinarioController = () => import('#controllers/veterinarios_controller')
const VoluntarioController = () => import('#controllers/voluntarios_controller')
const TelefonesController = () => import('#controllers/telefones_controller')
const RegistroController = () => import('#controllers/registros_controller')
const PessoasController = () => import('#controllers/pessoas_controller')
const EnderecosController = () => import('#controllers/enderecos_controller')
const DoacoesController = () => import('#controllers/doacoes_controller')
const ClinicasController = () => import('#controllers/clinicas_controller')
const ClientesController = () => import('#controllers/clientes_controller')
const AnimaisController = () => import('#controllers/animais_controller')
const AdocoesController = () => import('#controllers/adocoes_controller')
const FuncionariosController = () => import('#controllers/funcionarios_controller')
const AdministradoresController = () => import('#controllers/administradores_controller')

import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/administradores', AdministradoresController).apiOnly()
router.resource('/funcionarios', FuncionariosController).apiOnly()
router.resource('/adocoes', AdocoesController).apiOnly()
router.resource('/animais', AnimaisController).apiOnly()
router.resource('/clientes', ClientesController).apiOnly()
router.resource('/clinicas', ClinicasController).apiOnly()
router.resource('/doacoes', DoacoesController).apiOnly()
router.resource('/enderecos', EnderecosController).apiOnly()
router.resource('/pessoas', PessoasController).apiOnly()
router.resource('/registro', RegistroController).apiOnly()
router.resource('telefones', TelefonesController).apiOnly()
router.resource('veterinario', VeterinarioController).apiOnly()
router.resource('voluntario', VoluntarioController).apiOnly()
