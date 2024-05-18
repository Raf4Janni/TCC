import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Adocao extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  //@hasOne(() => Animal)
  //declare animal: hasOne<typeof Animal>

  //@hasOne(() => Cliente)
  //declare cliente: HasOne<typeof Cliente>

  //@hasOne(() => Registro)
  //declare registro: HasOne<typeof Registro>

  @column.dateTime({ autoCreate: true })
  declare criadoEm: DateTime

  @column.dateTime({ autoCreate: true })
  declare deletadoEm: DateTime
}