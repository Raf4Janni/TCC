<template>
    <div>
        <header>
            <h2>Editar Dados do Perfil</h2>
        </header>
    <section>
            <form action="">

                <label for="">Nome</label>
                <input type="text"
                name="" id=""
                placeholder="Digite seu nome"
                required>

                <label for="">Data de nascimento</label>
                <input type="date"
                name="" id=""
                placeholder="Digite sua data de nascimento"
                required>

                <label for="">E-mail</label>
                <input type="email"
                name="" id=""
                placeholder="Digite seu e-mail"
                required>

                <label for="">Senha</label>
                <input type="password"
                name="" id=""
                placeholder="Digite sua senha"
                required>
                
                <label for="">CPF</label>
                <input type="text"
                name="" id=""
                placeholder="Digite seu CPF"
                required>


                    <div class="button-container">
                        <button type="submit" class="button-enviar">Salvar</button>
                    </div>
            </form>
    </section>
</div>
</template>

<style scoped>
@import '/components/assets/sylelogin.css';
</style>