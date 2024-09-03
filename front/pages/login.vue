<template>
    <div class="fade-in">
            <header>
            <h2>LOGIN</h2>
            </header>
        <div class="formcadastro">
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

<script setup lang="ts">
definePageMeta({
  layout: 'nolayout'
})
</script>