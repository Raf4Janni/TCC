import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Clinica extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({ isPrimary: true })
  declare nome: string

  @column({ isPrimary: true })
  declare cnpj: string

  @column.dateTime({ autoCreate: true })
  declare criadoEm: DateTime

  @column.dateTime({ autoCreate: true})
  declare deletadoEm: DateTime
}