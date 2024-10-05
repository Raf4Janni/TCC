<template>
    <div class="fade-in">
    <header>
        <h2>Pets Disponíveis para Adoção</h2>
    </header>
    <section>

      <ul class="pAdocoes">
        <div class="filtro">
          <label>Filtro de Pesquisa</label>
          <select v-model="selectedAnimal" @change="carregarAnimal">
            <option value=""></option>
            <option v-for="animal in animais" :key="animal.id" :value="animal.id">{{ animal.nome }}</option>
          </select>
          <button @click="carregarDados">Mostrar Todos</button>
        </div>
        <li v-if="animalFiltrado" class="div2">
          <div>
            <div class="name">Nome: {{ animalFiltrado.nome }}</div>
            <div class="especie">Espécie: {{ animalFiltrado.especie }}</div>
            <div class="raca">Raça: {{ animalFiltrado.raca }}</div>
          </div>
          <div class="button-container">
            <nuxt-link :to="`/infoanimal/${animalFiltrado.id}`">
              <button class="btnlink">Ver Mais</button>
            </nuxt-link> 
        </div>
        </li>
        <li v-else v-for="animal in animais" :key="animal.id" class="div2">
          <div>
            <div class="name">Nome: {{ animal.nome }}</div>
            <div class="especie">Espécie: {{ animal.especie }}</div>
            <div class="raca">Raça: {{ animal.raca }}</div>
          </div>
          <div class="button-container">
            <nuxt-link :to="`/infoanimal/${animal.id}`">
              <button class="btnlink">Ver Mais</button>
            </nuxt-link>
          </div>
        </li>
    </ul>
</section>
    </div>
</template>

<script>
import { get } from '../src/Api2';

export default {
  data() {
    return {
      animais: [],
      animalFiltrado: null
    };
  },
  methods: {
    async carregarDados() {
      try {
        this.animalFiltrado = null;
        const route = useRoute();
        const id = route.params.id;
        const result = await get('animais', id);
        this.animais = result; // Atualiza o array `animais` com os dados recebidos
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
      }
    },
    async carregarAnimal(){
      try {
        if (!this.selectedAnimal) return;
        console.log(this.selectedAnimal)
        const result = await get(`animais/${this.selectedAnimal}`)
        console.log(result)
        this.animalFiltrado = result; 
      } catch (error) {
        console.error('Erro ao carregar o animal:', error);
      }
    },
  },
  mounted() {
    // Carrega os dados automaticamente quando o componente é montado
    this.carregarDados();
  },
};
</script>
