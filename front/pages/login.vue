<template>
    <div class="fade-in">
        <div class="container-titulo">
            <header>
            <h2>LOGIN</h2>
            </header>
        </div>
        <div class="container-form formcadastro">
            <form action="">


                    <label for="">Email</label>
                    <input type="email"
                    name="" id=""
                    placeholder="Digite seu e-mail"
                    required>
           
                    <label for="">Senha</label>
                    <input type="password"
                    name="" id=""
                    placeholder="Digite sua senha"
                    required>
               
               
                <div class="button-container">
                    <button type="submit" class="button-enviar">Entrar</button>
                    <br><br>
                </div>
            </form>
            <p class="paragrafo">Ainda não possui uma conta?</p>
                        <p class="cadastrar"><nuxt-link to="/cadastro" class="linkheader">Faça seu Cadastro</nuxt-link></p>

        </div>
    </div>
</template>

<style scoped>
@import '/components/assets/sylelogin.css';
</style>

<script setup lang="ts">
definePageMeta({
  layout: 'nolayout'
})
</script>