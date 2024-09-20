<template>
    <div class="fade-in">
        <header>
            <h2>Cadastro de Animal</h2>
        </header>
        <form action="" class="formcadastro">
            
            <label for="">Nome</label>
                <input type="text"
                name="" id=""
                placeholder="Digite o nome"
                required><br>

                <fieldset>
            <legend>Sexo</legend>
            <label>
                <input type="radio" name="sexo" value="M"> Masculino
            </label><br>
            <label>
                <input type="radio" name="sexo" value="F"> Feminino
            </label><br>
                </fieldset><br>

            <label for="">Data de resgate</label>
                <input type="date"
                name="" id=""
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
                name="" id=""
                placeholder="Digite a data de nascimento"
                required>

                <label for="">Cor</label>
                <input type="text"
                name="" id=""
                placeholder="Digite a cor"
                required>

                <label for="">Local de resgate</label>
                <input type="text"
                name="" id=""
                placeholder="Digite o local de resgate"
                required>

                <label for="">Estado de saúde</label>
                <input type="text"
                name="" id=""
                placeholder="Digite o estado de saúde"
                required>

                

            <div class="button-container">
                <button type="submit" class="button-enviar">Cadastrar</button>
            </div>
            </form>
    </div>
</template>