<template>
  <div class="fade-in">
    <header>
    <h1> Seja Um Voluntário</h1>
    </header>
    <section>
    <div class="div2">
        <ul>
          <h2>O que é o Voluntariado</h2>
           
            Já pensou em transformar a vida de um animalzinho? Ao se tornar voluntário,
            você ajudará a cuidar e tratar de animais necessitados, oferecendo a eles uma chance de uma vida melhor. 
            Além de contribuir diretamente para o bem-estar dos pets, você ganhará experiências valiosas e fará novas amizades. 
            Sua ajuda é essencial para a nossa causa e pode fazer uma grande diferença. Junte-se a nós e ajude a criar um mundo 
            mais gentil para nossos amigos de quatro patas!    
        </ul>
            <form action="" class="infoperfil">
                <ul>
                  <h2>Formulário</h2>
                <li>
                    <label for="">Nome: </label>
                    <input type="text"
                    name="" id=""
                    placeholder="Digite seu nome"
                    required>
           
                    <label for="">Data de nascimento: </label>
                    <input type="date"
                    name="" id=""
                    placeholder="Digite sua data de nascimento"
                    required>
    
                    <label for="">CPF: </label>
                    <input type="text"
                    name="" id=""
                    placeholder="Digite seu CPF"
                    required>
    
                    <label for="">E-mail: </label>
                    <input type="email"
                    name="" id=""
                    placeholder="Digite seu e-mail"
                    required>
    
                    <label for="">Senha: </label>
                    <input type="password"
                    name="" id=""
                    placeholder="Digite sua senha"
                    required>

                    <div class="button-container">
                    <button type="submit" class="button-enviar">Cadastrar</button>
                    </div>
                </li>
                
            </ul>

                

            </form>       
          </div>
      </section>
    </div>
    </template>
    
    <style>
    
  input[type="text"], input[type="password"], input[type="email"], input[type="date"] {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    box-sizing: border-box;
    color: #000;
    border-radius: 5px;
    transition: border-color 0.3s, background-color 0.3s;

  }

  input[type="text"]:focus, input[type="password"]:focus, input[type="email"]:focus {
    background-color: #a6f7ae; 
  }

::placeholder{
    color: #000;
}
</style>