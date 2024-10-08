<template>
    <header>    
        <h2>HISTÓRICO DE ADOÇÕES</h2>
    </header>
    <table class="tabelaadocoes">
        <thead>
            <tr class="tabela-historico">
                <th>Nome do animal</th>
                <th>Nome do adotante</th>
                <th>Data de saída</th>
            </tr>
        </thead>
        
        <!--dados da tabela-->
        <tbody>
            <tr v-for="adocao in adocoes" :key="adocao.id" class="tabela-historico">
                <td>{{ adocao.animal.nome }}</td>
                <td>{{ adocao.adotante.nome }}</td>
                <td>{{ adocao.dataSaida }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { get } from '../src/Api2';

export default {
  data() {
    return {
      adocoes: [], // Array para armazenar os dados dos animais
      nomePessoa: [],
      nomeAnimal: [],
    };
  },
  methods: {
    async carregarDados() {
      try {
        const result = await get('adocoes'); 
        
        this.adocoes = result; 
        console.log(adocoes)
        for(let i =0; i<=this.adocoes; i++){
            const result2 = await get(`pessoas/${this.adocoes[i].pessoa_id}`)
            this.nomePessoa = result2.nome

            const result3 = await get(`pessoas/${this.adocoes[i].animal_id}`)
            this.nomeAnimal = result3.nome
        }
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

<style>
.tabelaadocoes {
  width: 100%;
  border-collapse: collapse;
}
.tabela-historico {
  border: 1px solid #ddd;
}
</style>
