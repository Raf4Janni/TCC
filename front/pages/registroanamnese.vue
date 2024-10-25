<template>
    <div class="fade-in">
        <header>
     <h1>Registro Ficha de Anamnese</h1>
        </header>
        <section class="sectionficha">
            <div class="filtro">
                <label>Filtro de Pesquisa</label>
                <select v-model="selectedAnimal" @change="carregarAnimal">
                    <option value=""></option>
                    <option v-for="animal in animais" :key="animal.id" :value="animal.id">{{ animal.nome }}</option>
                </select>
          <button @click="carregarDados">Mostrar Todos</button>
        </div>
        <div class="div2">
                <div class="divficha">
                    <h2>Informações Animais</h2>
                    <ul>
                        <li>
                        <p>Nome: aaaa</p>
                        <p> Raça: aaaa</p>
                        <p>Espécie: aaaa</p>
                        <p>Sexo: aaaa</p>
                        <p>Data de Resgate: aaaa</p>
                        <p>Autor: aaaa</p>
                        <p>Tipo de Registro: aaaa</p>
                        </li>
                    </ul>
                </div>
                <div class="divficha">
                    <div>
                    <!-- Verifica se há uma imagem específica para o animal -->
                    <img :src="animal.imagemUrl || '/components/assets/img/TechPaws.png'" class="imgsection" alt="Foto do Animal">
                    </div>
                </div>
            </div>
    
            <div class="divficha">
                <h2>Registro de Saúde </h2>
                <label for="estadoSaude">Estado de saúde</label>
                <input class="registro_estadosaude" type="text" id="registroSaude" placeholder="Digite o estado de saúde" required>

                <div class="button-container">
                    <button type="submit" class="button-enviar">Cadastrar</button>
                </div>
            </div>
    
    
        </section>
    </div>
    </template>
    