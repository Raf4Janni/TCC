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
            <li>Nome: {{ pessoa.nome }}</li>
            <li>Data de Nascimento: {{ formatarData(pessoa.dataNascimento) }}</li>
            <li>Email: {{ pessoa.email }}</li>
            <li>Senha: {{ pessoa.senha }}</li>
            <li>CPF: {{ pessoa.cpf }}</li>
          </ul>
          <nuxt-link :to="`/editarperfil/${pessoa.id}`"><button>Editar seus Dados</button></nuxt-link>
        </div>
      </section>
      <p v-else>Carregando informações do perfil...</p>
    </div>
  </template>

<script>
import { get } from '../../src/Api2';
import { useRoute } from 'vue-router'; // Para acessar a rota

export default {
  data() {
    return {
      pessoa: null, // Inicializamos como nulo
    };
  },
  methods: {
    async carregarDados() {
      try {
        const route = useRoute(); // Acessa a rota atual
        const id = route.params.id; // Pega o ID da rota
        
        // Requisição à API para obter os dados da pessoa pelo ID
        const result = await get(`pessoas/${id}`);

        if (result) {
          this.pessoa = result; // Definindo os dados da pessoa
          
          // Convertendo a data de nascimento para o formato adequado
          this.pessoa.dataNascimento = new Date(this.pessoa.dataNascimento)
            .toISOString()
            .split('T')[0];
        } else {
          console.log("Nenhuma pessoa encontrada com o ID fornecido.");
        }
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
      }
    },
    formatarData(dataString) {
      const partes = dataString.split('-');
      return `${partes[2]}/${partes[1]}/${partes[0]}`;
    },
  },
  mounted() {
    this.carregarDados(); // Carrega os dados quando o componente é montado
  },
};
</script>
