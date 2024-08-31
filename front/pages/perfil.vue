<template>
<div class="fade-in">
    <header>
        <h1>Seu Perfil</h1>
    </header>
    <section class="perfil">
        <div>
            <img class="imgsection" src="/components/assets/img/perfil.svg" alt="Imagem de Perfil">
            <br>
            <button>Editar Foto</button>   
        </div>
        <div>
            <ul>
                <li>Nome: aaaa</li>
                <li>Data de Nascimento: aaaa</li>
                <li>Email: aaaa</li>
                <li>Senha: aaaa</li>
                <li>CPF: aaaa</li>
            </ul>
            <button><nuxt-link to="/editarperfil">Editar seus Dados</nuxt-link></button>  
        </div> 
    </section>
</div>
</template>

<style scoped>
@import '/components/assets/sylelogin.css';
</style>