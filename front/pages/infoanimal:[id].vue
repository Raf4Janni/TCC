<template>
    <div class="fade-in">
    <header>
 <h1>Informações do Animal</h1>
    </header>
    <section class="sectionficha">
        
            <div class="divficha">
                <h2>Dados do Animal</h2>
                <ul>
                    <li>
                    <p>Nome: </p>
                    <p> Raça: </p>
                    <p>Espécie: aaaa</p>
                    <p>Sexo: aaaa</p>
                    </li>
                </ul>
            </div>
           
            <div class="divficha">
                <h2>Ficha de Anamnese - Histórico Clinico</h2>
                <ul>
                    <li>
                    <p>Peso: aaaa</p>
                    <p>Doença: aaaa</p>
                    <p>Informações: aaaa</p>
                    </li>
                </ul>
            </div>

    </section>
</div>
</template>
<script>
import { get } from '../src/Api2'; // Certifique-se de que o caminho está correto

export default {
  data() {
    return {
      animais: [],
      registro: [], // Array para armazenar os dados dos animais
    };
  },
  methods: {
    async carregarDados() {
      try {
        const route = useRoute();
        const id = route.params.id;
        const result = await get('animais', `/${{id}}`);
        this.animais = result[0]; // Atualiza o array `animais` com os dados recebidos
        console.log(this.animais);  
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