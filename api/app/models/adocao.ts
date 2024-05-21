import { DateTime } from 'luxon'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, hasOne } from '@adonisjs/lucid/orm'
import Animal from './animal.js'
import Cliente from './cliente.js'
import Registro from './registro.js'

export default class Adocao extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @hasOne(() => Animal)
  declare animal: HasOne<typeof Animal>

  @hasOne(() => Cliente)
  declare cliente: HasOne<typeof Cliente>

  @hasOne(() => Registro)
  declare registro: HasOne<typeof Registro>

  @column.dateTime({ autoCreate: true })
  declare criadoEm: DateTime

  @column.dateTime({ autoCreate: true })
  declare deletadoEm: DateTime
}
