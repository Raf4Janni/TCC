<template>
    <div class="fade-in">
        <header>
     <h1>Registro Ficha de Anamnese</h1>
        </header>
        <section class="sectionficha">
            <div class="filtro">
                <label>Filtro de Pesquisa</label>
                <select>
                    <option value=""></option>
                    <option ></option>
                </select>
          <button ></button>
        </div>
        <div class="div2">
                <div class="divficha">
                    <h2>Informações Animais</h2>
                    <ul>
                        <li>
                        <p>Nome: aaaa</p>
                        <p> Raça: aaaa</p>
                        <p>Espécie: aaaa</p>
                        

                        </li>
                    </ul>
                </div>
                <div class="divficha">
                    <h2>Informações Animais</h2>
                    <ul>
                        <li>
                        <p>Sexo: aaaa</p>
                        <p>Local do Resgate: aaaa</p>
                        <p>Data de Resgate: aaaa</p>
                        
                        </li>
                    </ul>   
                </div>
            </div>
    
            <div class="divficha">
                <h2>Registro de Saúde </h2>
                <ul>
                    <li>
                        <p>Autor: aaaa</p>
                        <p>Tipo de Registro: aaaa</p>   
                    </li>
                </ul>
                <label for="estadoSaude">Estado de saúde</label>
                <input  type="text" id="registroSaude" placeholder="Digite o estado de saúde" required>

                <div class="button-container">
                    <button type="submit" class="button-enviar">Cadastrar</button>
                </div>
            </div>
    
    
        </section>
    </div>
    </template>
    