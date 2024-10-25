import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import { DateTime } from 'luxon'
import Funcionario from '#models/funcionario'
import Pessoa from '#models/pessoa'

export default class FuncinariosController {
  async index({}: HttpContext) {
    const funcionarios = await db.from('funcionarios').select('*')

    return funcionarios
  }

  async store({ request }: HttpContext) {
    const body = request.body()

    const funcionario = new Funcionario()
    funcionario.pessoa_id = body.pessoa_id
    funcionario.clinica_id = body.clinica_id
    funcionario.administrador_id = body.administrador_id
    funcionario.salario = body.salario
    funcionario.criadoEm = DateTime.now()

    funcionario.save()
    const pessoa = await Pessoa.findOrFail(body.pessoa_id)
    pessoa.cargo = 'funcionario'
    pessoa.save()

    await funcionario.save()
  }

  async show({ params }: HttpContext) {
    const funcionario = await Funcionario.findOrFail(params.id)

    return {
      funcionario: funcionario,
    }
  }

  async update({ request, params }: HttpContext) {
    const body = request.body()
    let funcionario = await Funcionario.findOrFail(params.id)

    funcionario.salario = body.salario

    funcionario.save()

    return funcionario
  }

  async destroy({ params }: HttpContext) {
    const funcionario = await Funcionario.findOrFail(params.id)

    funcionario.deletadoEm = DateTime.now()
    funcionario.save()

    return funcionario
  }
}
