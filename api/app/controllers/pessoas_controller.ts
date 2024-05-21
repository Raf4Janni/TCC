import type { HttpContext } from '@adonisjs/core/http'
import Pessoa from '#models/pessoa'

export default class PessoasController {
  async index({}: HttpContext) {
    const pessoas = await Pessoa.all()

    return pessoas
  }

  async store({ request, response }: HttpContext) {
    const body = request.body()

    const pessoa = await Pessoa.create(body)

    response.status(201)
    return {
      message: 'Pessoa cadastrada com sucesso',
      pessoa,
    }
  }

  async show({ params }: HttpContext) {
    const pessoa = await Pessoa.findOrFail(params.id)

    return pessoa
  }

  async update({ params, request }: HttpContext) {
    const body = request.body()
    const pessoa = await Pessoa.findOrFail(params.id)

    pessoa.id = body.id
    pessoa.nome = body.nome
    pessoa.cpf = body.cpf
    pessoa.rg = body.rg
    pessoa.email = body.email
    pessoa.senha = body.senha
    pessoa.dataDeNascimento = body.dataDeNascimento
    pessoa.sexo = body.sexo

    await pessoa.save()
    return {
      message: 'Pessoa atualizada com sucesso',
    }
  }

  async destroy({ params }: HttpContext) {
    const pessoa = await Pessoa.findOrFail(params.id)
    await pessoa.delete()

    return {
      message: 'Pessoa deletada com sucesso',
    }
  }
}
