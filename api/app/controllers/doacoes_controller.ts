 import type { HttpContext } from '@adonisjs/core/http'

import Doacao from "#models/doacao"

export default class DoacoesController {
  async index({}: HttpContext) {
    const doacoes = await Doacao.all()

    return doacoes
  }

  async store({ request, response }: HttpContext) {
    const body = request.body()

    const doacao = await Doacao.create(body)

    response.status(201)
    return {
      message: 'Doacao cadastrada com sucesso',
      doacao,
    }
  }

  async show({ params }: HttpContext) {
    const doacao = await Doacao.findOrFail(params.id)

    return doacao
  }

  async update({ params, request }: HttpContext) {
    const body = request.body()
    const doacao = await Doacao.findOrFail(params.id)

    doacao.id = body.id
    doacao.descricao = body.descricao
    doacao.quantidade = body.quantidade
    doacao.data = body.data
    doacao.tipo = body.tipo

    await doacao.save()
    return {
      message: 'Doacao atualizada com sucesso',
    }
  }

  async destroy({ params }: HttpContext) {
    const doacao = await Doacao.findOrFail(params.id)
    await doacao.delete()

    return {
      message: 'Doacao deletada com sucesso',
    }
  }
}
