<template>
    <div class="fade-in">
        <header>
            <h2>LOGIN</h2>
        </header>
        <div class="formcadastro">
            <form @submit.prevent="carregarDados">
                <label for="email">Email</label>
                <input type="email"
                       v-model="email"
                       placeholder="Digite seu e-mail"
                       required>
           
                <label for="senha">Senha</label>
                <input type="password"
                       v-model="senha"
                       placeholder="Digite sua senha"
                       required>
               
                <div class="button-container">
                    <button type="submit" class="button-enviar">Entrar</button>
                    <br><br>
                </div>
            </form>

            <p class="paragrafo">Ainda não possui uma conta?</p>
            <p class="cadastrar">
                <nuxt-link to="/cadastro" class="linkheader">Faça seu Cadastro</nuxt-link>
            </p>

            <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { get } from '../src/Api2';

const email = ref('');
const senha = ref('');
const errorMessage = ref('');

const carregarDados = async () => {
    try {
        const pessoas = await get("pessoas/todasPessoas");
        const usuario = pessoas.find(p => p.email === email.value && p.senha === senha.value);
        
        if (usuario) {
            console.log("Login bem-sucedido", usuario);
        } else {
            errorMessage.value = "Credenciais inválidas. Tente novamente.";
        }
    } catch (error) {
        errorMessage.value = "Ocorreu um erro. Por favor, tente novamente.";
        console.error(error);
    }
};
</script>