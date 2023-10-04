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

function removerProdutoDoCarrinho(idProduto) {
  delete idsProdutoCarrinhoComQuantidade[idProduto]
  renderizarProdutosCarrinho(idProduto)
}

function decrementarQuantidadeProduto(idProduto) {
  if (idsProdutoCarrinhoComQuantidade[idProduto] === 1) {
    removerProdutoDoCarrinho(idProduto)
    return
  }
  idsProdutoCarrinhoComQuantidade[idProduto]--
  atualizarInformacaoQuantidade(idProduto)
}

function atualizarInformacaoQuantidade(idProduto) {
  document.getElementById(`quantidade-${idProduto}`).innerText =
    idsProdutoCarrinhoComQuantidade[idProduto];
}

function desenharProdutoCarrinho(idProduto) {
  const produto = catalogo.find(p => p.id === idProduto)

  const containerProdutosCarrinho = document.getElementById('produtos-carrinho')

  const elementoArticle = document.createElement('article');

  const articleClasses = [
    "flex",
    "bg-slate-100",
    "rounded-lg",
    "p-1",
    "relative"
  ];

  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass)
  }

  const cartaoProdutoCarrinho = `  
    <button id="remover-item-${produto.id}" class="absolute top-0 right-2">
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
  `
  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);

  document
    .getElementById(`decrementar-produto-${produto.id}`)
    .addEventListener('click', () => decrementarQuantidadeProduto(produto.id))

  document
    .getElementById(`incrementar-produto-${produto.id}`)
    .addEventListener('click', () => incrementarQuantidadeProduto(produto.id))

  document
    .getElementById(`remover-item-${produto.id}`)
    .addEventListener('click', () => removerProdutoDoCarrinho(produto.id))
}

function renderizarProdutosCarrinho() {
  const containerProdutosCarrinho = document.getElementById('produtos-carrinho');
  containerProdutosCarrinho.innerHTML = '';

  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
    desenharProdutoCarrinho(idProduto)
  }
}

export function adicionarAoCarrinho(idProduto) {

  console.log('Dicionario', idsProdutoCarrinhoComQuantidade)

  if (idProduto in idsProdutoCarrinhoComQuantidade) {
    incrementarQuantidadeProduto(idProduto);
    return
  }

  idsProdutoCarrinhoComQuantidade[idProduto] = 1;
  desenharProdutoCarrinho(idProduto)
}


