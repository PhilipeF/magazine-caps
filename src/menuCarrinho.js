import { catalogo } from "./utilidades"

function abrirCarrinho() {
  document.getElementById("carrinho").classList.add("right-[0px]")
  document.getElementById("carrinho").classList.remove("right-[-360px]")
}

function fecharCarrinho() {
  document.getElementById("carrinho").classList.remove("right-[0px]")
  document.getElementById("carrinho").classList.add("right-[-360px]")
}

export function inicializarCarrinho() {
  const botaoFecharCarrinho = document.getElementById('fechar-carrinho')
  const botaoAbrirCarrinho = document.getElementById('abrir-carrinho')

  botaoFecharCarrinho.addEventListener('click', fecharCarrinho)
  botaoAbrirCarrinho.addEventListener('click', abrirCarrinho)
}

export function adicionarAoCarrinho(idProduto) {
  const produto = catalogo.find(p => p.id === idProduto)

  const containerProdutosCarrinho = document.getElementById('produtos-carrinho')

  const cartaoProdutoCarrinho = `
  <article class="flex bg-slate-100 rounded-lg p-1 relative">
      <button id="fechar-carrinho" class="absolute top-0 right-2">
        <i class="fa-sharp fa-xmark fa-solid bg-zinc-500 hover:text-zinc-900"></i>
      </button>
      <img src="${produto.imagem}" class="h-[200px] rounded-lg " alt="">
    <div class="py-2 mx-2">
      <p class="text-zinc-900 text-sm">${produto.descricao}</p>
      <p class="text-zinc-800 text-xs">${produto.cor}</p>
      <p class="text-green-700 text-lg">$${produto.preco}</p>
    </div>
  </article>  
  `
  containerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho
}


