import { adicionarAoCarrinho } from './menuCarrinho';
import { catalogo } from './utilidades';

export function renderizarCatalogo() {
  for (const produtoCatalogo of catalogo) {

    const product = `<div id="${produtoCatalogo.id}" class="w-48 mt-2 mb-10 flex flex-col p-3 justify-between shadow-lg rounded-lg" >
            <img
                src="./assets/img/${produtoCatalogo.imagem}"
                alt="${produtoCatalogo.descricao}"
                class="hover:scale-110 duration-300 pb-4 rounded-lg"
            />
              <p class='text-sm mb-1'>${produtoCatalogo.descricao} - ${produtoCatalogo.cor}</p>
              <p class='text-sm'> </p>
              <p class='text-sm flex justify-center mb-1'>${produtoCatalogo.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
              </p>
              <button id='adicionar-${produtoCatalogo.id}' class="bg-zinc-500 text-zinc-900 hover:bg-zinc-600">
                <i class="fa-solid fa-cart-plus"></i>
              </button>
            </div>
    `
    document.getElementById("container-produto").innerHTML += product
  }

  for (const produtoCatalogo of catalogo) {
    document.getElementById(`adicionar-${produtoCatalogo.id}`)
      .addEventListener('click', () => adicionarAoCarrinho(produtoCatalogo.id))
  }
}
