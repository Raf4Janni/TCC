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
router.resource('/adocoes', AdocoesController).apiOnly()
router.resource('/animais', AnimaisController).apiOnly()
router.resource('/clientes', ClientesController).apiOnly()
router.resource('/clinicas', ClinicasController).apiOnly()
router.resource('/doacoes', DoacoesController).apiOnly()
router.resource('/enderecos', EnderecosController).apiOnly()
router.resource('/funcionario', FuncionariosController).apiOnly()
router.resource('/pessoas', PessoasController).apiOnly()
router.resource('/registro', RegistroController).apiOnly()
router.resource('/telefones', TelefonesController).apiOnly()
router.resource('/veterinario', VeterinarioController).apiOnly()
router.resource('/voluntario', VoluntarioController).apiOnly()

router.post('/telefones/:clinica_id/:pessoa_id/teste', [TelefonesController, 'store'])
router.post('/administradores/:pessoa_id/:clinica_id/teste', [AdministradoresController, 'store'])
router.post('/adocoes/:cliente_id/:registro_id/:animal_id/teste', [AdocoesController, 'store'])
router.post('/clientes/:pessoa_id/:clinica_id/teste', [ClientesController, 'store'])
router.post('/doacoes/:cliente_id/:voluntario_id/teste', [DoacoesController, 'store'])
router.post('/enderecos/:clinica_id/:pessoa_id/teste', [EnderecosController, 'store'])
router.post('funcionarios/:pessoa_id/:clinica_id/:administrador_id', [
  FuncionariosController,
  'store',
])
router.post('registros/:voluntario_id/:veterinario_id', [RegistroController, 'store'])
router.post('/telefones/:clinica_id/:pessoa_id/teste', [TelefonesController, 'store'])
router.post('/veterinarios/:funcionario_id', [VeterinarioController, 'store'])
router.post('/voluntarios/:funcionario_id', [VoluntarioController, 'store'])
