<template>
    <div class="fade-in">
        <section>
            <div class="div2">
                <div>
                    <ul>
                        <li>
                <h2>Nome da Pessoa</h2>
                <p>Data de nascimento: dd/mm/yyyy</p>
                <p>Cargo: Cargo da Pessoa</p>
                <p>Email: email@exemplo.com</p>
                <p>Sexo: Masculino/Feminino</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <img src="/components/assets/img/TechPaws.png" class="imgsection"alt="Foto do Usuário">
                </div>
            </div>
        </section>
        
        <section>
            <div class="div2">
                <div>
                    <ul>
                        <li>
                <h2>Nome da Pessoa</h2>
                <p>Data de nascimento: dd/mm/yyyy</p>
                <p>Cargo: Cargo da Pessoa</p>
                <p>Email: email@exemplo.com</p>
                <p>Sexo: Masculino/Feminino</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <img src="/components/assets/img/TechPaws.png" class="imgsection"alt="Foto do Usuário">
                </div>
        </div>
        </section>
    </div>
<<<<<<< HEAD
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
=======
</template>
>>>>>>> 137fdaef619415aba66e50feff23036b9bc93fc2
