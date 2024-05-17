import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Veterinario extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare CRMV: string

  @column.dateTime({ autoCreate: true })
  declare criadoEm: DateTime

  @column.dateTime({ autoCreate: true})
  declare deletadoEm: DateTime
}