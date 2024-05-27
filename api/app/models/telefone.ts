import { DateTime } from 'luxon'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, hasMany } from '@adonisjs/lucid/orm'
import Pessoa from './pessoa.js'
import Clinica from './clinica.js'

export default class Telefone extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare numeroTelefone: number

  @column()
  declare pessoa_id : number

  @column()
  declare clinica_id : number

  @hasMany(() => Pessoa)
  declare pessoa: HasMany<typeof Pessoa>

  @hasMany(() => Clinica)
  declare clinica: HasMany<typeof Clinica>

  @column.dateTime({ autoCreate: true })
  declare criadoEm: DateTime

  @column.dateTime({ autoCreate: true })
  declare deletadoEm: DateTime
}
