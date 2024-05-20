import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Voluntario extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  //@hasOne(() => Funcionario)
  //declare funcionario: hasOne<typeof Funcionario>

  @column.dateTime({ autoCreate: true })
  declare criadoEm: DateTime

  @column.dateTime({ autoCreate: true })
  declare deletadoEm: DateTime
}