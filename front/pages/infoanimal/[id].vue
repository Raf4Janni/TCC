<template>
  <div class="fade-in">
    <header>
      <h1>Informações do Animal</h1>
    </header>
    <!-- Verifica se o objeto `animal` foi carregado antes de renderizar o conteúdo -->
    <section class="sectionficha" >
      <div class="divficha" v-if="animal">
        <h2>Dados do Animal</h2>
        <ul>
          <li>
            <p>Nome: {{ animal.nome }}</p>
            <p>Raça: {{ animal.raca }}</p>
            <p>Espécie: {{ especie.nome }}</p>
            <p>Sexo: {{ animal.sexo }}</p>
          </li>
        </ul>
      </div>
      <p v-else>Carregando informações do animal...</p>

      <div class="divficha"  v-for="registro in registros" :key="registro.id" >
        <h2>Ficha de Anamnese - Histórico Clínico</h2>
        <ul>
          <li>
            <p>Autor: {{registro.autor}}</p>
            <p>Tipo Registro: {{registro.tipo_registro}}</p>
            <p>informacoes: {{registro.informacoes}}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- Exibe uma mensagem enquanto os dados estão sendo carregados -->
    
  </div>
</template>

<script>
import { get } from '../../src/Api2';

export default {
  data() {
    return {
      animal: null,
      especie: null,
      raca: null,
      registros: [], // Objeto para armazenar os dados do animal
    };
  },
  methods: {
    async carregarDados() {
      try {
        const route = useRoute();
        const id = route.params.id;

        const result = await get(`animais/${id}`); 
        const animal = result;

        const especies = await get(`especies`);
        this.especie = especies.find((especie) => especie.id === animal.especie_id);


        this.animal = result; 

        const result2 = await get(`registros/animal/${id}`);
        
        this.registros = result2;
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
