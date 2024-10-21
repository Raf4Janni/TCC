<template>
    <div class="fade-in">
        <header>
            <h1>Seu Perfil</h1>
        </header>
        <section class="perfil" v-if="pessoa">
            <div>
                <img class="imgsection" src="/components/assets/img/perfil.svg" alt="Imagem de Perfil">
                <br>
                <button>Editar Foto</button>
            </div>
            <div>
                <ul>
                    <li>Nome: {{ pessoa.nome }}</li>
                    <li>Data de Nascimento: {{ formatarData(pessoa.dataNascimento) }}</li>
                    <li>Email: {{ pessoa.email }}</li>
                    <li>Senha: {{ pessoa.senha }}</li>
                    <li>CPF: {{ pessoa.cpf }}</li>
                </ul>
                <nuxt-link :to="`/editarperfil/${pessoa.id}`"><button>Editar seus Dados</button></nuxt-link>
            </div>
            
            <div style="display: flex; gap: 10px; margin-top: 20px; align-items: center; margin-left: 30%;">
                <nuxt-link to="/loginadmin"><button>Acesso rápido</button></nuxt-link>
                <button @click="logout">Logout</button>
            </div>
        </section>
        <p v-else>Carregando informações do perfil...</p>
        <p v-if="mensagem" class="mensagem">{{ mensagem }}</p>
    </div>
</template>

<script>
import session from '~/mixin/session';
import { get } from '../../src/Api2';
import { useRoute } from 'vue-router';

export default {
    data() {
        return {
            pessoa: null,
            mensagem: '',
        };
    },
    mixins: [session],
    methods: {
        async carregarDados() {
            try {
                const route = useRoute();
                const id = this.get_session('id');
                const result = await get(`pessoas/${id}`);

                if (result) {
                    this.pessoa = result;
                    this.pessoa.dataNascimento = new Date(this.pessoa.dataNascimento)
                        .toISOString()
                        .split('T')[0];
                } else {
                    console.log("Nenhuma pessoa encontrada com o ID fornecido.");
                }
            } catch (error) {
                console.error('Erro ao carregar os dados:', error);
            }
        },
        formatarData(dataString) {
            const partes = dataString.split('-');
            return `${partes[2]}/${partes[1]}/${partes[0]}`;
        },
        mostrarMensagem() {
            this.mensagem = 'Histórico de Adoções está em desenvolvimento.';
            setTimeout(() => {
                this.mensagem = '';
            }, 3000);
        },
        logout() {
            this.clear_storage();
            this.$router.push('/');
        },
    },
    mounted() {
        this.carregarDados();
    },
};
</script>

<style>
.mensagem {
    color: orange;
    margin-top: 20px;
    font-weight: bold;
}
</style>
