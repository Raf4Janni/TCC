import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Doacao extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare categoria: string

  @column.dateTime({ autoCreate: true })
  declare criadoEm: DateTime

  @column.dateTime({ autoCreate: true})
  declare deletadoEm: DateTime
}