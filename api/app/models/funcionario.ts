import { DateTime } from 'luxon'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, hasOne } from '@adonisjs/lucid/orm'
import Clinica from './clinica.js'
import Pessoa from './pessoa.js'

export default class Funcionario extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare salario: number

  @hasOne(() => Pessoa)
  declare pessoa: HasOne<typeof Pessoa>

  @hasOne(() => Clinica)
  declare clinica: HasOne<typeof Clinica>

  @column.dateTime({ autoCreate: true })
  declare criadoEm: DateTime

  @column.dateTime({ autoCreate: true })
  declare deletadoEm: DateTime
}
