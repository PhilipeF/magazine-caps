import { catalogo } from "./utilidades"

function abrirCarrinho() {
  document.getElementById("carrinho").classList.add("right-[0px]")
  document.getElementById("carrinho").classList.remove("right-[-360px]")
}

function fecharCarrinho() {
  document.getElementById("carrinho").classList.remove("right-[0px]")
  document.getElementById("carrinho").classList.add("right-[-360px]")
}

const idsProdutoCarrinhoComQuantidade = {}

export function inicializarCarrinho() {
  const botaoFecharCarrinho = document.getElementById('fechar-carrinho')
  const botaoAbrirCarrinho = document.getElementById('abrir-carrinho')

  botaoFecharCarrinho.addEventListener('click', fecharCarrinho)
  botaoAbrirCarrinho.addEventListener('click', abrirCarrinho)
}

function incrementarQuantidadeProduto(idProduto) {
  idsProdutoCarrinhoComQuantidade[idProduto]++
  atualizarInformacaoQuantidade(idProduto)
}

function decrementarQuantidadeProduto(idProduto) {
  idsProdutoCarrinhoComQuantidade[idProduto]--
  atualizarInformacaoQuantidade(idProduto)
}

function atualizarInformacaoQuantidade(idProduto) {
  document.getElementById(`quantidade-${idProduto}`).innerText =
    idsProdutoCarrinhoComQuantidade[idProduto];
}

export function adicionarAoCarrinho(idProduto) {
  if (idProduto in idsProdutoCarrinhoComQuantidade) {
    incrementarQuantidadeProduto(idProduto);
    return
  }

  idsProdutoCarrinhoComQuantidade[idProduto] = 1

  const produto = catalogo.find(p => p.id === idProduto)

  const containerProdutosCarrinho = document.getElementById('produtos-carrinho')

  const cartaoProdutoCarrinho = `
  <article class="flex bg-slate-100 rounded-lg p-1 relative">
      <button id="fechar-carrinho" class="absolute top-0 right-2">
        <i class="fa-sharp fa-xmark fa-solid bg-zinc-500 hover:text-zinc-900"></i>
      </button>
      <img 
        src="./assets/img/${produto.imagem}"   
        alt="carrinha: ${produto.descricao}"
        class="h-[200px] rounded-lg"
      />
    <div class="p-2 flex flex-col justify-between">
      <p class="text-zinc-900 text-sm">${produto.descricao}</p>
      <p class="text-zinc-800 text-xs">${produto.cor}</p>
      <p class="text-green-700 text-lg">$${produto.preco}</p>
    </div>
    <div class='flex text-zinc-900 items-end absolute bottom-0 right-2 '>
      <button id='decrementar-produto-${produto.id}'> - </button>
        <p id='quantidade-${produto.id}' class='ml-2'> ${idsProdutoCarrinhoComQuantidade[produto.id]} </p>
      <button id='incrementar-produto-${produto.id}' class='ml-2'> + </button>
    </div>
  </article>  
  `
  containerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho

  document
    .getElementById(`decrementar-produto-${produto.id}`)
    .addEventListener('click', () => decrementarQuantidadeProduto(produto.id))

  document
    .getElementById(`incrementar-produto-${produto.id}`)
    .addEventListener('click', () => incrementarQuantidadeProduto(produto.id))

}


