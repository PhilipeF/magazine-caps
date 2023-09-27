const catalogo = [
    {
        id: 1,
        descricao: 'BONÉ SARJA DAD HAT VARSITY - AZUL',
        cor: 'Azul',
        preco: 199,
        imagem: './assets/bone-1.jpg',
        feminino: false,
    },
    {
        id: 2,
        descricao: 'BONÉ NYLON STRAPBACK FRESH - VERMELHO',
        cor: 'Vermelho',
        preco: 199,
        imagem: './assets/bone-2.jpg',
        feminino: true,
    },
    {
        id: 3,
        descricao: 'BONÉ NYLON FIVE PANEL GOTHIC - PRETO',
        cor: 'Preto',
        preco: 199,
        imagem: './assets/bone-3.jpg',
        feminino: false,
    },
    {
        id: 4,
        descricao: 'BONÉ SNAPBACK THESAINT WORLDWIDE ',
        cor: 'Preto',
        preco: 199, 
        imagem: './assets/bone-4.jpg',
        feminino: false,
    },
    {
        id: 5,
        descricao: 'BONÉ DAD HAT THESAINT VINTAGE - OFFWHITE',
        cor: 'Preto e Branco',
        preco: 199,
        imagem: './assets/bone-5.jpg',
        feminino: false,
    },
    {
        id: 6,
        descricao: 'BONÉ SNAPBACK ABA CURVA "X"',
        cor: 'Roxo',
        preco: 219, 
        imagem: './assets/bone-6.jpg',
        feminino: true,
    },
    {
        id: 7,
        descricao: 'BONÉ DAD HAT "THESAINT"',
        cor: 'Preto',
        preco: 199,
        imagem: './assets/bone-7.jpg',
        feminino: true,
    },
    {
        id: 8,
        descricao: 'BONÉ DAD HAT "THESAINT"',
        cor: 'Branco',
        preco: 199,
        imagem: './assets/bone-8.jpg',
        feminino: true,
    }]

for (const produtoCatalogo of catalogo) {

    const product = `<div id="card-produto-1">
            <img src="${produtoCatalogo.imagem}" alt="bone-1">
            <p>${produtoCatalogo.descricao}</p>
            <p>${produtoCatalogo.cor}</p>
            <p>${produtoCatalogo.preco}</p>
            <button>Adicionar</button>
            </div>
    `
    document.getElementById("container-produto").innerHTML += product
}


