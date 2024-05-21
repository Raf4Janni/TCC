import Adocao from '#models/adocao'
import type { HttpContext } from '@adonisjs/core/http'

export default class AdocoesController {
    public async store({request, response}:HttpContext){
       
        const body = request.body()
       
        const adocao = await Adocao.create(body)
       
        response.status(201)
    
    
        return{
            message:"Adoção adicionado com sucesso!",
            data: adocao
        }
    
    
    }
       
    public async index(){
    
        const adocoes = await Adocao.all()
    
        return{
            data:adocoes
        }
    }
       
    public async show({ params }:HttpContext){
    
        const adocao = await Adocao.findOrFail(params.id)
           
        return{
            data: adocao
        }
    }
    
    
    public async destroy({params}:HttpContext){
    
        const adocao = await Adocao.findOrFail(params.id)
           
        await adocao.delete()

        return{
            message: "Adoção removida com Sucesso",
            data: adocao
        }
    }
    
    
    public async update({params,request}:HttpContext){
    
    
        const body = request.body()
    
    
        const adocao = await Adocao.findOrFail(params.id)
    
    
        adocao.title = body.title
        moment.description = body.description
    
    
        await moment.save()
           
        return{
            message: "Substituído com sucesso",
            data: moment
        }
    }
}
