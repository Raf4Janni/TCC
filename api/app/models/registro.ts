import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Registro extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime()
  declare dataRegistro: DateTime

  @column()
  declare autor: string

  @column()
  declare informacoes: string

  @column()
  declare tipoRegistro: string

  @column.dateTime({ autoCreate: true })
  declare criadoEm: DateTime

  @column.dateTime({ autoCreate: true})
  declare deletadoEm: DateTime
}