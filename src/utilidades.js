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
  JSON.parse(localStorage.getItem(chave))
}
