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

            <div v-if="allSessions">
                <h3>Sessions Salvas:</h3>
                <ul>
                    <li v-for="(value, key) in allSessions" :key="key">
                        {{ key }}: {{ value }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { get, teste } from '../src/Api2';
import session from '../mixin/session.js'; // Importando o mixin

const email = ref('');
const senha = ref('');
const errorMessage = ref('');
const allSessions = ref({}); // Armazenar todas as sessões

// Acessando o mixin
const carregarDados = async () => {
    try {
        const pessoas = await get("pessoas/todasPessoas");
        const usuario = pessoas.find((p: { email: string; senha: string; }) => p.email === email.value && p.senha === senha.value);
        
        if (usuario) {
            session.methods.set_session('id', usuario.id); 
            
            const data = {

                cpf,
                rg,
                email,
                sexo,
                senha
            };
            const token =  teste()
            
        } else {
            errorMessage.value = "Credenciais inválidas. Tente novamente.";
        }

        // Verificar todas as sessões
        //allSessions.value = session.methods.get_all_sessions();

    } catch (error) {
        errorMessage.value = "Ocorreu um erro. Por favor, tente novamente.";
        console.error(error);
    }
};
</script>
