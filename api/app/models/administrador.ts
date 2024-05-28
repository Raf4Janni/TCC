import { DateTime } from 'luxon'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, hasOne } from '@adonisjs/lucid/orm'
import Pessoa from './pessoa.js'
import Clinica from './clinica.js'

export default class Administrador extends BaseModel {
  @hasOne(() => Pessoa)
  declare pessoa: HasOne<typeof Pessoa>

  @hasOne(() => Clinica)
  declare clinica: HasOne<typeof Clinica>
  
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare pessoa_id: number

  @column()
  declare clinica_id: number


  @column.dateTime({ autoCreate: true })
  declare criadoEm: DateTime

  @column.dateTime({ autoCreate: true })
  declare deletadoEM: DateTime
}
