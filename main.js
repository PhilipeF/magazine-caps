import { renderizarCatalogo } from './src/cartaoProdutos';
import {
  atualizarPrecoCarrinho,
  inicializarCarrinho,
  quantidadeProdutosNoCarrinho,
  renderizarProdutosCarrinho
} from './src/menuCarrinho';
import { adicionarAoCarrinho } from './src/menuCarrinho';

renderizarCatalogo();
inicializarCarrinho();
atualizarPrecoCarrinho();
renderizarProdutosCarrinho();
adicionarAoCarrinho();
quantidadeProdutosNoCarrinho();