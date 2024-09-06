<template>
    <div>
        <header>
            <h2>Editar Dados do Perfil</h2>
        </header>
            <form action="" class=formcadastro v-if="pessoa">

                <label for="">Nome</label>
                <input type="text"
                name="" id="nomeInput" value=""
                placeholder="Digite seu nome"
                required>

                <label for="">Data de nascimento</label>
                <input type="date"
                name="" id="dataNascimentoInput" value=""
                placeholder="Digite sua data de nascimento"
                required>

                <label for="">E-mail</label>
                <input type="email"
                name="" id="emailInput" value=""
                placeholder="Digite seu e-mail"
                required>

                <label for="">Senha</label>
                <input type="password"
                name="" id="senhaInput" value=""
                placeholder="Digite sua senha"
                required>
                
                <label for="">CPF</label>
                <input type="text"
                name="" id="cpfInput" value=""
                placeholder="Digite seu CPF"
                required>

                    <div class="button-container">
                        <button type="submit" class="button-enviar" @click="editarDados()"><nuxt-link :to="`/perfil/${pessoa.id}`">Salvar</nuxt-link></button>
                    </div>
            </form>
            <p v-else>Carregando informações do perfil...</p>
</div>
</template>

<script>
import { teste } from '../../src/Api2';
import { get } from '../../src/Api2';

export default {
    data() {
        return {
            pessoa: null,
        };
    },
    methods: {
        async carregarDados() {
            try {
                const route = useRoute()
                const id = route.params.id

                const result = await get(`pessoas/${id}`)
                this.pessoa = result

                this.pessoa.nome = document.getElementById('nomeInput').value
                this.pessoa.dataNascimento = document.getElementById('dataNascimentoInput').value
                this.pessoa.email = document.getElementById('emailInput').value
                this.pessoa.senha = document.getElementById('senhaInput').value
                this.pessoa.cpf = document.getElementById('cpfInput').value

            } catch (error) {
                console.error('Erro ao carregar os dados:', error)
            }
        },
        async editarDados() {
            try {
                const route = useRoute()
                const id = route.params.id

                await teste(POST,`pessoas/${id}`, this.pessoa)
            } catch (error) {
                console.error('Erro ao carregar os dados:', error)
            }
        },
    },
    mounted() {
        this.carregarDados();
    },
}
</script>
