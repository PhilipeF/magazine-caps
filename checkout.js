import { desenharProdutoCarrinhoSimples, lerLocalStorage } from "./src/utilidades";

export function desenharProdutosCheckout() {
  const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho');
  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
    desenharProdutoCarrinhoSimples(
      idProduto,
      "container-produtos-checkout",
      idsProdutoCarrinhoComQuantidade[idProduto]
    );
  }
}

desenharProdutosCheckout();

function finalizarCompra(event) {
  event.preventDefault();
  window.location.href = window.location.origin + "/pedidos.html";
}

document.addEventListener('submit', (evt) => finalizarCompra(evt))
