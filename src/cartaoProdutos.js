import { adicionarAoCarrinho } from './adicionarAoCarrinho';
import { catalogo } from './utilidades';

export function renderizarCatalogo() {
  for (const produtoCatalogo of catalogo) {
    const product = `<div id="${produtoCatalogo.id}" class="w-48 m-2 flex flex-col p-2 justify-between shadow-lg rounded-lg" >
            <img 
                src="${produtoCatalogo.imagem}" 
                alt="bone-1"
                class="hover:scale-110 duration-300 pb-4 rounded-lg"                
            />
              <p class='text-sm'>${produtoCatalogo.descricao}</p>
              <p class='text-sm'>${produtoCatalogo.cor}</p>
              <p class='text-sm'>${produtoCatalogo.preco}</p>              
              <button id='adicionar-${produtoCatalogo.id}' class="bg-zinc-500 text-zinc-900 hover:bg-zinc-600 ">
                <i class="fa-solid fa-cart-plus"></i>
              </button>
            </div>
    `
    document.getElementById("container-produto").innerHTML += product
  }

  for (const produtoCatalogo of catalogo) {
    document.getElementById(`adicionar-${produtoCatalogo.id}`)
      .addEventListener('click', adicionarAoCarrinho)
  }
}
