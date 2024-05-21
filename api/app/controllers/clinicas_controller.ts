import type { HttpContext } from '@adonisjs/core/http'
import Clinica from '#models/clinica'
export default class ClinicasController {
  async index({}: HttpContext) {
    const clinicas = await Clinica.all()

    return clinicas
  }

  async store({ request, response }: HttpContext) {
    const body = request.body()

    const clinica = await Clinica.create(body)

    response.status(201)
    return {
      message: 'Clinica cadastrada com sucesso',
      clinica,
    }
  }

  async show({ params }: HttpContext) {
    const clinica = await Clinica.findOrFail(params.id)

    return clinica
  }

  async update({ params, request }: HttpContext) {
    const body = request.body()
    const clinica = await Clinica.findOrFail(params.id)

    clinica.id = body.id
    clinica.nome = body.nome
    clinica.CNPJ = body.CNPJ

    await clinica.save()
    return {
      message: 'Clinica atualizada com sucesso',
    }
  }

  async destroy({ params }: HttpContext) {
    const clinica = await Clinica.findOrFail(params.id)
    await clinica.delete()

    return {
      message: 'Clinica deletada com sucesso',
    }
  }
}
