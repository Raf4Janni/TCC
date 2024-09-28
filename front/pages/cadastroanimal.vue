<template>
    <div class="fade-in">
        <header>
            <h2>Cadastro de Animal</h2>
        </header>
        <form action="" class="formcadastro" @submit.prevent="carregarDados">
            
            <label for="">Nome</label>
                <input type="text"
                name="" id="nome"
                placeholder="Digite o nome"
                required><br>

                <fieldset>
            <legend>Sexo</legend>
            <label>
                <input type="radio" name="sexo" value="M" id="sexo"> Masculino
            </label><br>
            <label>
                <input type="radio" name="sexo" value="F" id="sexo"> Feminino
            </label><br>
                </fieldset><br>

            <label for="">Data de resgate</label>
                <input type="date"
                name="" id="dataResgate"
                placeholder="Digite a data de resgate"
                required>

            <label for="especie">Espécie</label>
                <select id="especies" onchange="carregarRacas">
                <option value="">Selecione uma espécie</option>
                </select>

            <label for="raca">Raça</label>
              <select id="racas" disabled>
                  <option value="">Selecione uma raça</option>
              </select>
       
                <label for="">Data de nascimento</label>
                <input type="date"
                name="" id="dataNascimento"
                placeholder="Digite a data de nascimento"
                required>

                <label for="">Cor</label>
                <input type="text"
                name="" id="cor"
                placeholder="Digite a cor"
                required>

                <label for="">Local de resgate</label>
                <input type="text"
                name="" id="localResgate"
                placeholder="Digite o local de resgate"
                required>

                <label for="">Estado de saúde</label>
                <input type="text"
                name="" id="estadoSaude"
                placeholder="Digite o estado de saúde"
                required>

            <div class="button-container">
                <button type="submit" class="button-enviar">Cadastrar</button>
            </div>
            </form>
    </div>
</template>

<script>
import { teste } from '../src/Api2';
  
  export default {
    name: "cadastroanimalpage",
    methods: {
      carregarEspecies: async function () {
        try {
          const especies = await get('animais/especies');
          especies.forEach(e => {
            const option = document.createElement('option');
            option.value = e.id;
            option.innerText = e.nome;
            document.getElementById('especies').appendChild(option);
          });
        } catch (error) {
          console.error('Erro ao carregar as espécies:', error);
        }
      },

      carregarDados: async function () {
        try {
          const nome = document.getElementById('nome').value;
          const sexo = document.getElementById('dataNascimento').value;
          const dataResgate = document.getElementById('dataResgate').value;
          const especie = document.getElementById('especies').value;
          const dataNascimento = document.getElementById('dataNascimento').value;
          const cor = document.getElementById('cor').value;
          const localResgate = document.getElementById('localResgate').value;
          const estadoSaude = document.getElementById('estadoSaude').value; 
  
          const data = {
            nome: nome,
            sexo: sexo,
            dataResgate: dataResgate,
            especie: especie,
            dataNascimento: dataNascimento,
            cor: cor,
            localResgate: localResgate,
            estadoSaude: estadoSaude
          };
  
          await teste("POST", 'animal', data, '1312');
          console.log("Dados enviados com sucesso:", data);
        } catch (error) {
          console.error('Erro ao carregar os dados:', error);
        }
      },
      carregarRacas: async function () {
        try {
          const especie = document.getElementById('especie').value;
          const raca = document.getElementById('raca');
          raca.innerHTML = '<option value="">Selecione uma raça</option>';
          response.forEach(r => {
            if (r.especie === especie) {
              const option = document.createElement('option');
              option.value = r.id;
              option.innerText = r.nome;
              raca.appendChild(option);
            }
          });
          raca.disabled = false;
        } catch (error) {
          console.error('Erro ao carregar as raças:', error);
        }

      },
    },
    mounted() {
        this.carregarEspecies();
    },
  };
</script>