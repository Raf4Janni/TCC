import Registro from '#models/registro'
import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import { DateTime } from 'luxon'
import Animal from '#models/animal'
import Pessoa from '#models/pessoa'

export default class VeterinariosController {
  async index({}: HttpContext) {
    const veterinario = db.from('veterinarios').select('*')
    return veterinario
  }

  async adicionaAnimal({ request, params }: HttpContext) {
    const pessoa = await Pessoa.findOrFail(params.id)
    if(pessoa.cargo != "adm" && pessoa.cargo != "vet" && pessoa.cargo != "vol"){
      return "Você não possui acesso para realizar essa tarefa."
    }
    const body = request.body()

    let animal = new Animal()

    animal.nome = body.nome
    animal.sexo = body.sexo
    animal.dataResgate = body.dataResgate
    animal.especie = body.especie
    animal.dataNascimento = body.dataNascimento
    animal.cor = body.cor
    animal.localResgate = body.localResgate
    animal.estadoSaude = body.estadoSaude
    animal.raca = body.raca

    await animal.save()
  }

  async adicionaRegistro({ request, params }: HttpContext) {
    const pessoa = await Pessoa.findOrFail(params.id)
    if(pessoa.cargo != "adm" && pessoa.cargo != "vet" && pessoa.cargo != "vol"){
      return "Você não possui acesso para realizar essa tarefa."
    }
    const body = request.body()

    let registro = new Registro()

    registro.autor = body.autor
    registro.informacoes = body.informacoes
    registro.tipoRegistro = body.tipoRegistro
    registro.dataRegistro = DateTime.now()
    registro.voluntario_id = params.voluntario_id
    registro.veterinario_id = params.veterinario_id
    registro.animal_id = body.animal_id
    registro.criadoEm = DateTime.now()

    await registro.save()
  }

  async alteraAnimal({ request, params }: HttpContext) {
    const pessoa = await Pessoa.findOrFail(params.id)
    if(pessoa.cargo != "adm" && pessoa.cargo != "vet" && pessoa.cargo != "vol"){
      return "Você não possui acesso para realizar essa tarefa."
    }
    const body = request.body()

    let animal = await Animal.findOrFail(params.animal_id)

    animal.nome = body.nome
    animal.sexo = body.sexo
    animal.dataResgate = body.dataResgate
    animal.especie = body.especie
    animal.dataNascimento = body.dataNascimento
    animal.cor = body.cor
    animal.localResgate = body.localResgate
    animal.estadoSaude = body.estadoSaude
    animal.raca = body.raca

    await animal.save()
  }

  async deletaAnimal({ params }: HttpContext) {
    const pessoa = await Pessoa.findOrFail(params.id)
    if(pessoa.cargo != "adm" && pessoa.cargo != "vet" && pessoa.cargo != "vol"){
      return "Você não possui acesso para realizar essa tarefa."
    }
    const animal = await Animal.findOrFail(params.id)

    animal.deletadoEm = DateTime.now()
    await animal.save()

    return animal
  }

  async modificaRegistro({ request, params }: HttpContext) {
    const pessoa = await Pessoa.findOrFail(params.id)
    if(pessoa.cargo != "adm" && pessoa.cargo != "vet"){
      return "Você não possui acesso para realizar essa tarefa."
    }
    const body = request.body()

    let registro = await Registro.findOrFail(params.id)

    registro.autor = body.autor
    registro.informacoes = body.informacoes
    registro.tipoRegistro = body.tipoRegistro
    registro.dataRegistro = DateTime.now()

    await registro.save()
  }

  async mostraRegistros({ params }: HttpContext) {
    const pessoa = await Pessoa.findOrFail(params.id)
    if(pessoa.cargo != "adm" && pessoa.cargo != "vet"){
      return "Você não possui acesso para realizar essa tarefa."
    }
    const registro = db.from('registros').select('*')
    return registro
  }

  /*
  async store({ request, params }: HttpContext) {
    const body = request.body()

    let veterinario = new Veterinario()

    veterinario.crmv = body.crmv
    veterinario.funcionario_id = params.funcionario_id
    veterinario.criadoEm = DateTime.now()

    await veterinario.save()
  }

  async show({ params }: HttpContext) {
    const veterinario = await Veterinario.findOrFail(params.id)
    return veterinario
  }

  async update({ request, params }: HttpContext) {
    const body = request.body()
    let veterinario = await Veterinario.findOrFail(params.id)

    veterinario.crmv = body.crmv

    await veterinario.save()
  }

  async destroy({ params }: HttpContext) {
    const veterinario = await Veterinario.findOrFail(params.id)

    veterinario.deletadoEm = DateTime.now()
    await veterinario.save()

    return veterinario
  }
  */
}
