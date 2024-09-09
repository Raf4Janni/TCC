
<template>
<div class="fade-in">
        <header>
        <h2>CADASTRO</h2>
        </header>
    <div class="formcadastro">
        <form action="">

                <label for="">Nome</label>
                <input type="text"
                name="" id="nome"
                placeholder="Digite seu nome"
                required>
       
                <label for="">Data de nascimento</label>
                <input type="date"
                name="" id="dataNascimento"
                placeholder="Digite sua data de nascimento"
                required>

                <label for="">CPF</label>
                <input type="text"
                name="" id="cpf"
                placeholder="Digite seu CPF"
                required>

                <label for="">E-mail</label>
                <input type="email"
                name="" id="email"
                placeholder="Digite seu e-mail"
                required>

                <label for="">Senha</label>
                <input type="password"
                name="" id="senha"
                placeholder="Digite sua senha"
                required>
           
           
            <div class="button-container">
                <button type="submit" class="button-enviar" @click="carregarDados" >Cadastrar</button>
            </div>
        </form>
        <p class="paragrafo">Já possui uma conta? </p>
        <p class="cadastrar"><nuxt-link to="/login" class="linkheader">Faça seu Login</nuxt-link></p>
    </div>
</div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "nolayout"
})
</script>
<script>
import {teste} from '../src/Api2';

async function carregarDados() {
    /*
    try {
        const nome = document.getElementById('nome').value;
        const dataNascimento = document.getElementById('dataNascimento').value;
        const cpf = document.getElementById('cpf').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        
        const data = {
            nome: nome,
            dataNascimento: dataNascimento,
            cpf: cpf,
            email: email,
            senha: senha
        }
        await teste('pessoas/', data, 'func');
    } catch (error) {
        console.error('Erro ao carregar os dados:', error);
    }
        */
}

</script>
