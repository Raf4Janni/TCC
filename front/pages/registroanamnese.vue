<template>
    <div class="fade-in">
        <header>
     <h1>Registro Ficha de Anamnese</h1>
        </header>
        <section class="sectionficha">
            <div class="filtro">
                <label>Filtro de Pesquisa</label>
<<<<<<< HEAD
                <select>
                    <option value=""></option>
                    <option ></option>
                </select>
          <button ></button>
=======
                <select v-model="selectedAnimal" @change="carregarAnimal">
                    <option value=""></option>
                    <option v-for="animal in animais" :key="animal.id" :value="animal.id">{{ animal.nome }}</option>
                </select>
          <button @click="carregarDados">Mostrar Todos</button>
>>>>>>> origin/main
        </div>
        <div class="div2">
                <div class="divficha">
                    <h2>Informações Animais</h2>
                    <ul>
                        <li>
                        <p>Nome: aaaa</p>
                        <p> Raça: aaaa</p>
                        <p>Espécie: aaaa</p>
<<<<<<< HEAD
                        

=======
                        <p>Sexo: aaaa</p>
                        <p>Data de Resgate: aaaa</p>
                        <p>Autor: aaaa</p>
                        <p>Tipo de Registro: aaaa</p>
>>>>>>> origin/main
                        </li>
                    </ul>
                </div>
                <div class="divficha">
<<<<<<< HEAD
                    <h2>Informações Animais</h2>
                    <ul>
                        <li>
                        <p>Sexo: aaaa</p>
                        <p>Local do Resgate: aaaa</p>
                        <p>Data de Resgate: aaaa</p>
                        
                        </li>
                    </ul>   
=======
                    <div>
                    <!-- Verifica se há uma imagem específica para o animal -->
                    <img :src="animal.imagemUrl || '/components/assets/img/TechPaws.png'" class="imgsection" alt="Foto do Animal">
                    </div>
>>>>>>> origin/main
                </div>
            </div>
    
            <div class="divficha">
                <h2>Registro de Saúde </h2>
<<<<<<< HEAD
                <ul>
                    <li>
                        <p>Autor: aaaa</p>
                        <p>Tipo de Registro: aaaa</p>   
                    </li>
                </ul>
                <label for="estadoSaude">Estado de saúde</label>
                <input  type="text" id="registroSaude" placeholder="Digite o estado de saúde" required>
=======
                <label for="estadoSaude">Estado de saúde</label>
                <input class="registro_estadosaude" type="text" id="registroSaude" placeholder="Digite o estado de saúde" required>
>>>>>>> origin/main

                <div class="button-container">
                    <button type="submit" class="button-enviar">Cadastrar</button>
                </div>
            </div>
    
    
        </section>
    </div>
    </template>
    