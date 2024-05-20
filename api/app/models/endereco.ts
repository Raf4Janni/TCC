import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Endereco extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare CEP: number

  @column()
  declare estado: string

  @column()
  declare cidade: string

  @column()
  declare bairro: string

  @column()
  declare rua: string

  @column()
  declare numero: number

  //@hasMany(()=> Pessoa)
  //declare pessoa: HasMany<typeof Pessoa>

  //@hasMany(()=>Clinica)
  //declare clinica: HasMany<typeof Clinica>
  
  @column.dateTime({ autoCreate: true })
  declare criadoEm: DateTime

  @column.dateTime({ autoCreate: true })
  declare deletadoEm: DateTime
}