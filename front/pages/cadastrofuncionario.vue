<template>
    <div class="fade-in">
        <header>
            <h2>Cadastro de Funcionário</h2>
        </header>
        <form action="" class="formcadastro">
            <label for="">Nome</label>
            
                <input type="text"
                name="" id=""
                placeholder="Digite o nome"
                required>
       
                <label for="">Data de nascimento</label>
                <input type="date"
                name="" id=""
                placeholder="Digite a data de nascimento"
                required>

                <label for="">CPF</label>
                <input type="text"
                name="" id=""
                placeholder="Digite o CPF"
                required>

                <label for="">E-mail</label>
                <input type="email"
                name="" id=""
                placeholder="Digite o e-mail"
                required>

                <label for="">Senha</label>
                <input type="password"
                name="" id=""
                placeholder="Digite a senha"
                required>

                <label for="">Salário</label>
                <input type="number"
                name="" id=""
                placeholder="Digite o salário"
                required>
           
            <div class="button-container">
                <button type="submit" class="button-enviar">Cadastrar</button>
            </div>
            </form>
    </div>
</template>