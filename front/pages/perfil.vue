<template>
<div class="fade-in">
    <header>
        <h1>Seu Perfil</h1>
    </header>
    <section class="perfil">
        <div>
            <img class="imgsection" src="/components/assets/img/perfil.svg" alt="Imagem de Perfil">
            <br>
            <button>Editar Foto</button>   
        </div>
        <div>
            <ul>
                <li>Nome: {{ pessoa.nome }}</li>
                <li>Data de Nascimento: {{ pessoa.dataNascimento }}</li>
                <li>Email: {{ pessoa.email }}</li>
                <li>Senha: {{ pessoa.senha }}</li>
                <li>CPF: {{ pessoa.cpf }}</li>
            </ul>
            <button><nuxt-link to="/editarperfil">Editar seus Dados</nuxt-link></button>  
        </div> 
    </section>
</div>
</template>

<style scoped>
@import '/components/assets/sylelogin.css';
</style>

<script>
import { get } from '../src/Api2';

export default {
  data() {
    return {
      pessoa: [], 
    };
  },
  methods: {
    async carregarDados() {
      try {
        const result = await get('pessoas/1')
        this.pessoa = result
      } catch (error) {
        console.error('Erro ao carregar os dados:', error)
      }
    },
  },
}
</script>
