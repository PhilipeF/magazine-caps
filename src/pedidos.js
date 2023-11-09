import { lerLocalStorage, desenharProdutoCarrinhoSimples, apagarDoLocalStorage } from './utilidades';

function criarPedidoHistorico(pedidoComData) {
  const elementoPedido = `
  <section id="produtosDoHistorico">
    <p
      class="text-sm text-center text-bold m-2">
        ${new Date(pedidoComData.dataPedido).toLocaleDateString('pt-BR', {
    hour: '2-digit',
    minute: "2-digit"
  })}
    </p>

    <section
      id='container-pedidos-${pedidoComData.dataPedido}'>
    </section>
  </section>
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

  if (!Array.isArray(historico) || historico.length === 0) {
    return
  }

  for (const pedidoComData of historico) {
    criarPedidoHistorico(pedidoComData)
  }
}

renderizarHistoricoPedidos();

function apagarDoHistorico() {
  const historico = lerLocalStorage('historico')
  const botaoApagarDoHistorico = document.getElementById("apagarDoHistorico")

  botaoApagarDoHistorico.addEventListener('click', () => {
    if (!Array.isArray(historico) || historico.length === 0) {
      alert('Seu histórico de pedidos está vazio. Adicione produtos para visualizá-los aqui')
    }
    apagarDoLocalStorage('historico');

    const main = document.getElementById("produtosDoHistorico");
    if (main) {
      main.innerHTML = "";
      renderizarHistoricoPedidos()
    }
  });
}

apagarDoHistorico();
