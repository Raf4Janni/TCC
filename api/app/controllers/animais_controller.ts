import Animal from '#models/animal'
import type { HttpContext } from '@adonisjs/core/http'

export default class AnimaisController {
    public async store({request, response}:HttpContext){
       
        const body = request.body()
       
        const animal = await Animal.create(body)
       
        response.status(201)
    
    
        return{
            message:"Animal adicionado com sucesso!",
            data: animal
        }
    
    
    }
       
    public async index(){
    
        const animais = await Animal.all()
    
        return{
            data:animais
        }
    }
       
    public async show({ params }:HttpContext){
    
        const animal = await Animal.findOrFail(params.id)
           
        return{
            data: animal
        }
    }
    
    
    public async destroy({params}:HttpContext){
    
        const animal = await Animal.findOrFail(params.id)
           
        await animal.delete()

        return{
            message: "Animal removido com sucesso!",
            data: animal
        }
    }
    
    
    public async update({params,request}:HttpContext){
    
    
        const body = request.body()
    
    
        const animal = await Animal.findOrFail(params.id)
    
    
        animal.nome = body.nome
        animal.sexo = body.sexo
        animal.dataResgate = body.dataResgate
        animal.especie = body.especie
        animal.dataNascimento = body.dataNascimento
        animal.cor = body.cor
        animal.localResgate = body.localResgate
        animal.estadoSaude = body.estadoSaude
        animal.raca = body.raca
    
    
        await animal.save()
           
        return{
            message: "Animal atualizado com sucesso!",
            data: animal
        }
    }
}
