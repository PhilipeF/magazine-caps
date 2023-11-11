import { catalogo, salvarLocalStorage, lerLocalStorage } from "./utilidades"

const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};

export function quantidadeProdutosNoCarrinho() {
  const qtdeProdutos = Object.keys(idsProdutoCarrinhoComQuantidade).length
  const quantidadeProdutosNoCarrinho = document.getElementById("quantidadeDeProdutos")

  const cartSpanClasses = [
    'flex', 'items-center', 'text-white', 'text-xs', 'justify-center', 'bg-red-600', 'absolute', 'left-6', 'top-1/2', 'rounded-full', 'w-5', 'h-5'
  ];

  if (qtdeProdutos === 0) {
    quantidadeProdutosNoCarrinho.classList.remove(...cartSpanClasses);
    quantidadeProdutosNoCarrinho.classList.add('hidden');
  } else {
    quantidadeProdutosNoCarrinho.classList.add(...cartSpanClasses);
    quantidadeProdutosNoCarrinho.classList.remove('hidden');
    quantidadeProdutosNoCarrinho.innerHTML = qtdeProdutos;
  }
}

function carrinhoVazio() {
  const qtdeProdutos = Object.keys(idsProdutoCarrinhoComQuantidade).length
  const containerProdutosCarrinho = document.getElementById('status-carrinho')
  if (qtdeProdutos === 0) {
    containerProdutosCarrinho.classList.remove('hidden')
  } else {
    containerProdutosCarrinho.classList.add('hidden')
  }
}

function abrirCarrinho() {
  const carrinho = document.getElementById("carrinho")

  carrinho.classList.add("right-[0px]")
  carrinho.classList.remove("right-[-360px]")
  carrinhoVazio()
}

function fecharCarrinho() {
  const carrinho = document.getElementById("carrinho")
  carrinho.classList.remove("right-[0px]")
  carrinho.classList.add("right-[-360px]")
}

function irParaCheckout() {
  if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
    return;
  }
  // window.location.href = window.location.origin + "./checkout.html";
  window.location.href = './checkout.html';
}

export function inicializarCarrinho() {
  const botaoFecharCarrinho = document.getElementById('fechar-carrinho')
  const botaoAbrirCarrinho = document.getElementById('abrir-carrinho')
  const botaoIrParaCheckout = document.getElementById('finalizar-compra')

  botaoFecharCarrinho.addEventListener('click', fecharCarrinho)
  botaoAbrirCarrinho.addEventListener('click', abrirCarrinho)
  botaoIrParaCheckout.addEventListener('click', irParaCheckout)
}

function incrementarQuantidadeProduto(idProduto) {
  idsProdutoCarrinhoComQuantidade[idProduto]++
  atualizarInformacaoQuantidade(idProduto)
  atualizarPrecoCarrinho()
  salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade)
}

function removerProdutoDoCarrinho(idProduto) {
  delete idsProdutoCarrinhoComQuantidade[idProduto]
  salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade)
  renderizarProdutosCarrinho(idProduto)
  atualizarPrecoCarrinho()
  quantidadeProdutosNoCarrinho()
  carrinhoVazio()
}

function decrementarQuantidadeProduto(idProduto) {
  if (idsProdutoCarrinhoComQuantidade[idProduto] === 1) {
    removerProdutoDoCarrinho(idProduto)
    return
  }
  idsProdutoCarrinhoComQuantidade[idProduto]--
  atualizarInformacaoQuantidade(idProduto);
  atualizarPrecoCarrinho();
  salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade);
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
    carrinhoVazio()
  }

  const cartaoProdutoCarrinho = `
  <button id="remover-item-${produto.id}" class="absolute top-0 right-2">
  <i class="fa-solid fa-circle-xmark text-zinc-700 hover:text-zinc-900"></i>
  </button>
  <img
  src="./assets/img/${produto.imagem}"
  alt="carrinha: ${produto.descricao}"
  class="h-[200px] rounded-lg"
  />
  <div class="p-2 flex flex-col justify-between">
  <p class="text-zinc-900 mr-2 text-sm">${produto.descricao}</p>
  <p class="text-zinc-800 text-xs">${produto.cor}</p>
  <p class="text-green-700 text-lg">R$${produto.preco}</p>
  </div>
  <div class='flex text-zinc-900 items-end absolute bottom-3 right-2 '>
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

  carrinhoVazio()
}

export function renderizarProdutosCarrinho() {
  const containerProdutosCarrinho = document.getElementById('produtos-carrinho');
  containerProdutosCarrinho.innerHTML = '';

  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
    desenharProdutoCarrinho(idProduto)
  }
  carrinhoVazio()
}

export function adicionarAoCarrinho(idProduto) {
  carrinhoVazio()

  if (idProduto === undefined) {
    return
  }

  if (idProduto in idsProdutoCarrinhoComQuantidade) {
    incrementarQuantidadeProduto(idProduto);
    return
  }

  idsProdutoCarrinhoComQuantidade[idProduto] = 1;
  desenharProdutoCarrinho(idProduto)
  atualizarPrecoCarrinho()
  quantidadeProdutosNoCarrinho()
}

export function atualizarPrecoCarrinho() {
  const precoCarrinho = document.getElementById("preco-total");
  let precoTotalCarrinho = 0;
  for (const idProdutoNoCarrinho in idsProdutoCarrinhoComQuantidade) {
    precoTotalCarrinho +=
      catalogo.find((p) => p.id === idProdutoNoCarrinho).preco *
      idsProdutoCarrinhoComQuantidade[idProdutoNoCarrinho];
  }

  precoCarrinho.innerText = `Total: ${precoTotalCarrinho.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`

  salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade)
}


