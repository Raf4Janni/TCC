import { DateTime } from 'luxon'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, hasOne } from '@adonisjs/lucid/orm'
import Funcionario from './funcionario.js'

export default class Voluntario extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @hasOne(() => Funcionario)
  declare funcionario: HasOne<typeof Funcionario>

  @column.dateTime({ autoCreate: true })
  declare criadoEm: DateTime

  @column.dateTime({ autoCreate: true })
  declare deletadoEm: DateTime
}