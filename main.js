import { renderizarCatalogo } from './src/cartaoProdutos';
import { atualizarPrecoCarrinho, inicializarCarrinho, renderizarProdutosCarrinho } from './src/menuCarrinho';
import { adicionarAoCarrinho } from './src/menuCarrinho';

renderizarCatalogo();
inicializarCarrinho();
atualizarPrecoCarrinho();
renderizarProdutosCarrinho();
adicionarAoCarrinho();