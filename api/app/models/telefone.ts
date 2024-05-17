import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Telefone extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare numeroTelefone: number

  @column.dateTime({ autoCreate: true })
  declare criadoEm: DateTime

  @column.dateTime({ autoCreate: true })
  declare deletadoEm: DateTime
}
