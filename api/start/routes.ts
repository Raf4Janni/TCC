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
/*import { middleware } from '#start/kernel'
import Administrador from '#models/administrador'
import { administrador, veterinario, voluntario } from '#abilities/main'
import db from '@adonisjs/lucid/services/db'
import Pessoa from '#models/pessoa'*/

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

//ROTAS DO ADMINISTRADOR
router.resource('/administradores', AdministradoresController).apiOnly()
router.post('/administradores/alteraSalario/:pessoa_id', [AdministradoresController, 'alteraSalario'])
router.post('administradores/demite/:pessoa_id', [AdministradoresController, 'demite'])
//router.post('/administradores/:pessoa_id/:clinica_id/teste', [AdministradoresController, 'store'])

//ROTAS DA ADOÇÂO
router.resource('/adocoes', AdocoesController).apiOnly()
router.post('/adocoes/:cliente_id/:registro_id/:animal_id/teste', [AdocoesController, 'store'])

//ROTA DO ANIMAL
router.resource('/animais', AnimaisController).apiOnly()

//ROTAS DO CLIENTE
router.resource('/clientes', ClientesController).apiOnly()
router.post('/clientes/:pessoa_id/:clinica_id/teste', [ClientesController, 'store'])

//ROTA DA CLINICA
router.resource('/clinicas', ClinicasController).apiOnly()

//ROTAs DA DOAÇÂO
router.resource('/doacoes', DoacoesController).apiOnly()
router.post('/doacoes/:cliente_id/:voluntario_id/teste', [DoacoesController, 'store'])

//ROTAs DO ENDEREÇOS
router.resource('/enderecos', EnderecosController).apiOnly()
router.post('/enderecos/:clinica_id/:pessoa_id/teste', [EnderecosController, 'store'])

//ROTAS DO FUNCIONARIO
router.resource('/funcionarios', FuncionariosController).apiOnly()
router.post('funcionarios/:pessoa_id/:clinica_id/:administrador_id', [FuncionariosController, 'store',])

//ROTA DA PESSOA
router.resource('/pessoas', PessoasController).apiOnly()
router.post('/pessoas/:perfil/:pessoa_id', [PessoasController, 'criar'])
router.post('/login', [PessoasController, 'login'])
router.put('/pessoas/atualizar/:pessoa_id', [PessoasController, 'atualizar'])

//ROTAS DO REGISTRO
router.resource('/registros', RegistroController).apiOnly()
router.post('registros/:voluntario_id/:veterinario_id', [RegistroController, 'store'])

//ROTAS DO TELEFONE
router.resource('/telefones', TelefonesController).apiOnly()
router.post('/telefones/:clinica_id/:pessoa_id/teste', [TelefonesController, 'store'])

//ROTA DO VETERINARIO
router.resource('/veterinarios', VeterinarioController).apiOnly()
router.post('/veterinarios/adicionaAnimail', [VeterinarioController, 'adicionaAnimal'])
router.post('/veterinarios/alteraAnimal/:animal_id/:pessoa_id', [VeterinarioController, 'alteraAnimal'])
router.post('/veterinarios/adicionaRegistro/:veterinario_id/:pessoa_id', [VeterinarioController, 'adicionaRegistro'])
router.delete('/veterinarios/deletaAnimal/:animal_id/:pessoa_id', [VeterinarioController,'deletaAnimal'])
router.post('/veterinarios/modificaRegistro/:registro_id/:pessoa_id', [VeterinarioController,'modificaRegistro'])
router.get('/veterinarios/mostraRegistros/:pessoa_id',[VeterinarioController, 'mostraRegistros'])

//ROTA DO VOLUNTARIO
router.resource('/voluntarios', VoluntarioController).apiOnly()
router.post('/voluntarios/adicionaAnimail', [VoluntarioController, 'adicionaAnimal'])
router.post('/voluntarios/alteraAnimal/:animal_id/:pessoa_id', [VoluntarioController, 'alteraAnimal'])
router.post('/voluntarios/adicionaRegistro/:voluntario_id/:pessoa_id', [VoluntarioController, 'adicionaRegistro'])
router.delete('/voluntarios/deletaAnimal/:animal_id/:pessoa_id', [VoluntarioController,'deletaAnimal'])

/**
 * TODO
 * utilizar os middleware para verificação de rotas
 */

router.post('/teste', [PessoasController, 'create'])
