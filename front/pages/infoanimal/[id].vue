<template>
  <div class="fade-in">
    <header>
      <h1>Informações do Animal</h1>
    </header>
    <!-- Verifica se o objeto `animal` foi carregado antes de renderizar o conteúdo -->
    <section class="sectionficha" v-if="animal">
      <div class="divficha">
        <h2>Dados do Animal</h2>
        <ul>
          <li>
            <p>Nome: {{ animal.nome }}</p>
            <p>Raça: {{ animal.raca }}</p>
            <p>Espécie: {{ animal.especie }}</p>
            <p>Sexo: {{ animal.sexo }}</p>
          </li>
        </ul>
      </div>

      <div class="divficha">
        <h2>Ficha de Anamnese - Histórico Clínico</h2>
        <ul>
          <li>
            <p>Peso: </p>
            <p>Doença: </p>
            <p>Informações: </p>
          </li>
        </ul>
      </div>
    </section>

    <!-- Exibe uma mensagem enquanto os dados estão sendo carregados -->
    <p v-else>Carregando informações do animal...</p>
  </div>
</template>

<script>
import { get } from '../../src/Api2';

export default {
  data() {
    return {
      animal: null, // Objeto para armazenar os dados do animal
    };
  },
  methods: {
    async carregarDados() {
      try {
        const route = useRoute();
        const id = route.params.id;

        const result = await get(`animais/${id}`); 

        this.animal = result; 
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
      }
    },
  },
  mounted() {
    this.carregarDados(); 
  },
};
</script>
