import { DateTime } from 'luxon'
import { column, BaseModel, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Voluntario from './voluntario.js'
import Veterinario from './veterinario.js'

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

  @hasMany(() => Voluntario)
  declare voluntario: HasMany<typeof Voluntario>

  @hasMany(() => Veterinario)
  declare veterinario: HasMany<typeof Veterinario>

  @column.dateTime({ autoCreate: true })
  declare criadoEm: DateTime

  @column.dateTime({ autoCreate: true })
  declare deletadoEm: DateTime
}
