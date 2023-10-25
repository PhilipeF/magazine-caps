import { lerLocalStorage, desenharProdutoCarrinhoSimples, apagarDoLocalStorage } from './utilidades';

function criarPedidoHistorico(pedidoComData) {
  const elementoPedido = `
  <p
    class="text-sm text-center text-bold mb-4">
      ${new Date(pedidoComData.dataPedido).toLocaleDateString('pt-BR', {
    hour: '2-digit',
    minute: "2-digit"
  })}
  </p>
  <section
    id='container-pedidos-${pedidoComData.dataPedido}'>
  </section>
  <button
    id='apagarDoHistorico-${pedidoComData.dataPedido}'
    class="bg-red-600 hover:bg-red-500 p-1 rounded-lg mb-4 text-sm"> Limpar todo histórico
  </button>
  `;

  const main = document.getElementsByTagName("main")[0];
  main.innerHTML += elementoPedido;

  for (const idProduto in pedidoComData.pedido) {
    desenharProdutoCarrinhoSimples(
      idProduto,
      `container-pedidos-${pedidoComData.dataPedido}`,
      pedidoComData.pedido[idProduto]
    );
  }
}

function renderizarHistoricoPedidos() {
  const historico = lerLocalStorage('historico')

  if (historico.length === 0) {
    return
  }

  for (const pedidoComData of historico) {
    criarPedidoHistorico(pedidoComData)
    apagarTodoHistorico(pedidoComData)
  }
}
renderizarHistoricoPedidos()

function apagarTodoHistorico(pedidoComData) {
  const botaoApagarDoHistorico = document.getElementById(`apagarDoHistorico-${pedidoComData.dataPedido}`)
  botaoApagarDoHistorico.addEventListener('click', () => apagarDoLocalStorage('historico'))

  // location.reload()
}

// location.reload()

