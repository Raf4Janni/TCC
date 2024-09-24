import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import Especie from './especie.js'
import Raca from './raca.js'

export default class Animal extends BaseModel {
  public static table = 'animais';

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare sexo: string

  @column.dateTime()
  declare dataResgate: DateTime

  @column.dateTime()
  declare dataNascimento: DateTime

  @column()
  declare cor: string

  @column()
  declare localResgate: string

  @column()
  declare estadoSaude: string

  @hasOne(() => Especie)
  declare especie: HasOne<typeof Especie>

  @hasOne(() => Raca)
  declare raca: HasOne<typeof Raca>

  @column.dateTime({ autoCreate: true })
  declare criadoEm: DateTime

  @column.dateTime()
  declare deletadoEm: DateTime
}
