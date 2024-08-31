<template>
  <div class="fade-in">
    <header>
      <h2>Pets Disponíveis para Adoção</h2>
    </header>
    <section>
      <ul class="pAdocoes">
        <li v-for="animal in animais" :key="animal.id" class="div2">
          <div>
            <div class="name">Nome: {{ animal.nome }}</div>
            <div class="especie">Espécie: {{ animal.especie }}</div>
            <div class="raca">Descrição: {{ animal.raca }}</div>
          </div>
          <div class="button-container">
            <nuxt-link :to="`/infoanimal:${animal.id}`">
              <button class="btnlink">Ver Mais</button>
            </nuxt-link>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { get } from '../src/Api2'; // Certifique-se de que o caminho está correto

export default {
  data() {
    return {
      animais: [], // Array para armazenar os dados dos animais
    };
  },
  methods: {
    async carregarDados() {
      try {
        const result = await get('animais');
        this.animais = result; // Atualiza o array `animais` com os dados recebidos
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
