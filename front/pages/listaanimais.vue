<template>
    <div class="fade-in" v-if="isCliente">
      <section>
        <div class="filtro">
          <label>Filtro de Pesquisa</label>
          <select v-model="selectedAnimal" @change="carregarAnimal">
            <option value=""></option>
            <option v-for="animal in animais" :key="animal.id" :value="animal.id">{{ animal.nome }}</option>
          </select>
          <button @click="carregarDados">Mostrar Todos</button>
        </div>
        <div class="div2" v-for="animal in animais" :key="animal.id">
          <div>
            <ul>
              <li>
                <h2>Nome do Animal: {{ animal.nome }}</h2>
                <p>Data de nascimento: {{ animal.dataNascimento }}</p>
                <p>Espécie: {{ animal.especie }}</p>
                <p>Raça: {{ animal.raca }}</p>
                <p>Sexo: {{ animal.sexo }}</p>
                <p>Cor: {{ animal.cor }}</p>
              </li>
            </ul>
          </div>
          <div>
            <!-- Verifica se há uma imagem específica para o animal -->
            <img :src="animal.imagemUrl || '/components/assets/img/TechPaws.png'" class="imgsection" alt="Foto do Animal">
          </div>
        </div>
      </section>
    </div>
    <p v-else>Não possui acesso</p>
  </template>
  
  <script>
  import { get } from '../src/Api2';
  import { useRoute } from 'vue-router';
  import session from '~/mixin/session';
  
  export default {
    data() {
      return {
        animais: [], // Array para armazenar os dados dos animais
      };
    },
    mixins: [session],
    methods: {
      async carregarDados() {
        try {
          const route = useRoute();
          const id = route.params.id; // Obtenha o id da rota, se necessário
          const result = await get('animais', id); // Chamada à API para buscar os animais
          this.animais = result; // Atualiza o array `animais` com os dados recebidos
          this.isCliente = this.get_session('cargo') === 'cliente' ? false : true;
        } catch (error) {
          console.error('Erro ao carregar os dados:', error);
        }
      },
    },
    mounted() {
      // Carrega os dados automaticamente quando o componente é montado
      this.carregarDados();
    },
  };
  </script>
  