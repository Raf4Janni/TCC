<template>
    <div class="fade-in">
        <section v-for="pessoa in pessoas" :key="pessoa.id">
            <div class="div2">
                <div>
                    <ul>
                        <li>
                <h2>Nome: {{ pessoa.nome }}</h2>
                <p>Data de nascimento: {{ pessoa.dataNascimento }}</p>
                <p>Cargo: {{ pessoa.cargo }}</p>
                <p>Email: {{ pessoa.email }}</p>
                <p>Sexo: {{ pessoa.sexo }}</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <img src="/components/assets/img/TechPaws.png" class="imgsection"alt="Foto do Usuário">
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { get } from '../src/Api2';

export default {
    data() {
        return {
            pessoas: [],
        };
    },
    methods: {
        async carregarDados() {
            try {
                const result = await get('pessoas/todasPessoas')
                this.pessoas = result
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
