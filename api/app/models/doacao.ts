import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Doacao extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare categoria: string
<<<<<<< HEAD

  @column.dateTime({ autoCreate: true })
  declare criadoEm: DateTime

  @column.dateTime({ autoCreate: true})
=======
  
  @column.dateTime({ autoCreate: true })
  declare criadoEm: DateTime

  @column.dateTime({ autoCreate: true })
>>>>>>> c7009f53b975e47f54a1fd2feb3a914859c72bbf
  declare deletadoEm: DateTime
}