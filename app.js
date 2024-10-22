function criaCartao(categoria, pergunta, resposta){
    let container = getElementById('container')
    let cartão = document.createElement('article')
    cartão.className = 'cartão'


    cartão.innerHTML = `
    <div class="cartao__conteudo">
    <h3 class="programacao">Programação</h3>
    <div class="cartao__conteudo__pergunta">
       <p> O que é a sigla CDB?</p>
    </div>
    <div class="cartao__conteudo__resposta">
       <p> Certiicado de Deposito Bancario.</p> 
    </div>
  </div>
    
 `

    container.appendChild(cartão)
    }