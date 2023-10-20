import { atualizarPrecoCarrinho } from "./src/menuCarrinho";
import { apagarDoLocalStorage, desenharProdutoCarrinhoSimples, lerLocalStorage, salvarLocalStorage } from "./src/utilidades";

const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};

export function desenharProdutosCheckout() {
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

  if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
    return;
  }
  const dataAtual = new Date()
  const pedididoFeito = {
    dataPedido: dataAtual,
    pedido: idsProdutoCarrinhoComQuantidade
  }

  const historicoDePedidos = lerLocalStorage("historico") ?? [];
  const historicoPedidosAtualizados = [pedididoFeito, ...historicoDePedidos]

  salvarLocalStorage('historico', historicoPedidosAtualizados)
  apagarDoLocalStorage('carrinho')
  window.location.href = window.location.origin + "/pedidos.html";
}

document.addEventListener('submit', (evt) => finalizarCompra(evt))

atualizarPrecoCarrinho()
