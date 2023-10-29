export const catalogo = [
  {
    id: '1',
    descricao: 'BONÉ SARJA DAD HAT VARSITY',
    cor: 'Azul',
    preco: 199,
    imagem: 'bone-1.jpg'
  },
  {
    id: '2',
    descricao: 'BONÉ NYLON STRAPBACK FRESH',
    cor: 'Vermelho',
    preco: 199,
    imagem: 'bone-2.jpg'
  },
  {
    id: '3',
    descricao: 'BONÉ NYLON FIVE PANEL GOTHIC',
    cor: 'Preto',
    preco: 199,
    imagem: 'bone-3.jpg'
  },
  {
    id: '4',
    descricao: 'BONÉ SNAPBACK THESAINT WORLDWIDE ',
    cor: 'Preto',
    preco: 199,
    imagem: 'bone-4.jpg'
  },
  {
    id: '5',
    descricao: 'BONÉ DAD HAT THESAINT VINTAGE',
    cor: 'Preto e Branco',
    preco: 199,
    imagem: 'bone-5.jpg'
  },
  {
    id: '6',
    descricao: 'BONÉ SNAPBACK ABA CURVA "X"',
    cor: 'Roxo',
    preco: 219,
    imagem: 'bone-6.jpg'
  },
  {
    id: '7',
    descricao: 'BONÉ DAD HAT "THESAINT"',
    cor: 'Preto',
    preco: 199,
    imagem: 'bone-7.jpg'
  },
  {
    id: '8',
    descricao: 'BONÉ DAD HAT "THESAINT"',
    cor: 'Branco',
    preco: 199,
    imagem: 'bone-8.jpg'
  },
  {
    id: '9',
    descricao: 'BONÉ DAD HAT "THESAINT"',
    cor: 'Preto',
    preco: 199,
    imagem: 'bone-7.jpg'
  },
  {
    id: '10',
    descricao: 'BONÉ DAD HAT "THESAINT"',
    cor: 'Branco',
    preco: 199,
    imagem: 'bone-8.jpg'
  }]

export function salvarLocalStorage(chave, informacao) {
  localStorage.setItem(chave, JSON.stringify(informacao))
}

export function lerLocalStorage(chave) {
  return JSON.parse(localStorage.getItem(chave))
}

export function apagarDoLocalStorage(chave) {
  localStorage.removeItem(chave)
}

export function desenharProdutoCarrinhoSimples(idProduto, idContainerHtml, quantidadeProduto) {
  const produto = catalogo.find(p => p.id === idProduto)

  if (produto === undefined) {
    return
  }

  const containerProdutosCarrinho = document.getElementById(idContainerHtml)

  const elementoArticle = document.createElement('article');

  const articleClasses = [
    "flex",
    "bg-slate-100",
    "p-2",
    "mb-2",
    "relative",
    "w-80"
  ];

  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass)
  }

  const cartaoProdutoCarrinho = `
    <img
      src="./assets/img/${produto.imagem}"
       alt="carrinha: ${produto.descricao}"
       class="h-[200px] rounded-lg"
    />
    <div class="p-2 flex flex-col justify-between">
      <p class="text-zinc-900 text-sm">${produto.descricao}</p>
      <p class="text-zinc-800 text-xs">${produto.cor}</p>
      <p class="text-green-700 text-lg">${produto.preco.toLocaleString('pt-br', {
    style: 'currency', currency: 'BRL'
  })}</p>
    </div>
    <div class='flex text-zinc-900 items-end absolute bottom-3 right-2 '>
        <p id='quantidade-${produto.id}' class='ml-2'> ${quantidadeProduto} </p>
    </div>
  `
  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);
}
