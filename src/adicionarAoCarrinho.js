export function adicionarAoCarrinho() {
  const cartaoProdutoCarrinho = `
    <article class="flex bg-slate-100 rounded-lg p-1 relative">
        <button id="fechar-carrinho" class="absolute top-0 right-2">
          <i class="fa-sharp fa-solid fa-xmark bg-zinc-500 hover:text-zinc-900"></i>
        </button>
        <img src="./assets/bone-1.jpg" class="h-[200px] rounded-lg " alt="">
        <div class="py-2 mx-2">
          <p class="text-slate-900 text-sm">BONÉ SARJA DAD HAT VARSITY</p>
          <p class="text-slate-400 text-xs">AZUL</p>
          <p class="text-green-700 text-lg">$200</p>
        </div>
      </article>  
    `

  document.getElementById('carrinho').innerHTML += cartaoProdutoCarrinho
}
