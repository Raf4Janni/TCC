import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import Pessoa from './pessoa.js'
import Clinica from './clinica.js'
import { HasOne } from '@adonisjs/lucid/types/relations'

export default class Administrador extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  //@hasOne(() => Pessoa)
  //declare pessoa: hasOne<typeof Pessoa>

  //@hasOne(() => Clinica)
  //declare clinica: HasOne<typeof Clinica>

  @column.dateTime({ autoCreate: true })
  declare criadoEm: DateTime

  @column.dateTime({ autoCreate: true })
  declare deletadoEM: DateTime
}