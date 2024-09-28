<template>
<div class="fade-in">
    <header>
        <h1>Seu Perfil</h1>
    </header>
    <section class="perfil" v-if="pessoa">
        <div>
            <img class="imgsection" src="/components/assets/img/perfil.svg" alt="Imagem de Perfil">
            <br>
            <button>Editar Foto</button>   
        </div>
        <div>
            <ul>
                <li>Nome: {{pessoa.nome}}</li>
                <li>Data de Nascimento: {{formatarData(pessoa.dataNascimento)}}</li>
                <li>Email: {{pessoa.email}}</li>
                <li>Senha: {{pessoa.senha}}</li>
                <li>CPF: {{pessoa.cpf}}</li>
            </ul>
            <button><nuxt-link :to="`/editarperfil/${pessoa.id}`">Editar seus Dados</nuxt-link></button>  
            
        </div> 
    </section>
    <p v-else>Carregando informações do perfil...</p>
</div>
</template>

<script>
import { get } from '../../src/Api2';

export default {
    data() {
        return {
            pessoa: null,
        };
    },
    methods: {
        async carregarDados() {
            try {
                const route = useRoute()
                const id = route.params.id

                const result = await get(`pessoas/${id}`)

                this.pessoa = result

                const date = new Date(this.pessoa.dataNascimento)
                this.pessoa.dataNascimento = date.toISOString().split('T')[0]
                
                
            } catch (error) {
                console.error('Erro ao carregar os dados:', error)
            }
        },
        formatarData(dataString) {
            const partes = dataString.split('-');
            return `${partes[2]}/${partes[1]}/${partes[0]}`;
        },
    },
    mounted() {
        this.carregarDados();
    },
}
</script>