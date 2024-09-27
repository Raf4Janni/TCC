<template>
    <div class="fade-in">
        <header>
            <h2>CADASTRO DE ADOÇÃO</h2>
        </header>
        <div class="formcadastro">
            <form>

                <label for="">Nome</label>
                <input type="text" name="" id="nome" placeholder="Digite o nome do adotante" required>

                <label for="">Data de nascimento</label>
                <input type="date" name="" id="dataNascimento" placeholder="Digite a data de nascimento" required>

                <label for="">CPF</label>
                <input type="text" name="" id="cpf" placeholder="Digite o CPF" required>

                <label for="">E-mail</label>
                <input type="email" name="" id="email" placeholder="Digite o e-mail" required>

                <label for="">RG</label>
                <input type="text" name="" id="rg" placeholder="Digite o RG" required>

                <fieldset>
            <legend>Sexo</legend>
            <label>
                <input type="radio" name="sexo" value="M"> Masculino
            </label><br>
            <label>
                <input type="radio" name="sexo" value="F"> Feminino
            </label><br>
                </fieldset><br>

                <label for="">Nome</label>
                <input type="text" name="" id="nome" placeholder="Digite o nome do animal" required>

                <label for="">Espécie</label>
                <select disabled>
                    <option value=""></option>
                </select>
        
            <label for="">Raça</label>
                <select disabled>
                    <option value=""></option>
                </select>

                <label for="">Cor</label>
                <input type="text"
                name="" id=""
                placeholder="Digite a cor"
                required>
           
           
            <div class="button-container">
                <button type="submit" class="button-enviar">Cadastrar</button>
            </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
 
  </script>
  