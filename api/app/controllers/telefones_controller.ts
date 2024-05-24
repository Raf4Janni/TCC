import Telefone from '#models/telefone'
import Pessoa from '#models/pessoa'
import Clinica from '#models/clinica'
import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class TelefonesController {
  async index({}: HttpContext) {
    const telefone = await db.from('telefones').select('*')

    return telefone
  }

  async store({ request, params, response }: HttpContext) {
    const body = request.body()

    //const pessoa = Pessoa.findOrFail(params.idPessoa)
    //const clinica = Clinica.findOrFail(params.idClinica)

    body.clinica = params.clinicaId
    body.pessoa = params.pessoaId

    const telefone = await Telefone.create(body)

    response.status(201)

    return {
      message: 'Telefone cadastrada com sucesso',
      telefone,
    }
  }

  async show({ params }: HttpContext) {
    const telefone = await Telefone.findOrFail(params.id)

    return telefone
  }
}
