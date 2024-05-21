import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  //@hasOne(() => Pessoa)
  //declare pessoa: hasOne<typeof Pessoa>

  //@hasOne(() => Clinica)
  //declare clinica: HasOne<typeof Clinica>

  @column.dateTime({ autoCreate: true })
  declare criadoEm: DateTime

  @column.dateTime({ autoCreate: true })
  declare deletadoEm: DateTime
}
