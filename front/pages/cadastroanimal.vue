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

                <label for="">Espécie</label>
                <select disabled>
                    <option value=""></option>
                </select>
        
            <label for="">Raça</label>
                <select disabled>
                    <option value=""></option>
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
      carregarDados: async function () {
        try {
          const nome = document.getElementById('nome').value;
          const sexo = document.getElementById('dataNascimento').value;
          const dataResgate = document.getElementById('dataResgate').value;
          const especie = document.getElementById('especie').value;
          const raca = document.getElementById('raca').value;
          const dataNascimento = document.getElementById('dataNascimento').value;
          const cor = document.getElementById('cor').value;
          const localResgate = document.getElementById('localResgate').value;
          const estadoSaude = document.getElementById('estadoSaude').value; 
  
          const data = {
            nome: nome,
            sexo: sexo,
            dataResgate: dataResgate,
            especie: especie,
            raca: raca,
            dataNascimento: dataNascimento,
            cor: cor,
            localResgate: localResgate,
            estadoSaude: estadoSaude
          };
  
          await teste('teste', 'animal', data, '1312');
          console.log("Dados enviados com sucesso:", data);
        } catch (error) {
          console.error('Erro ao carregar os dados:', error);
        }
      }
    }
  };
</script>