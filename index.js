const  produtos = [['Notebook thinkpad', 'https://m.media-amazon.com/images/I/71CUP80TyEL._AC_.jpg' ,'i5 core decima geracao', 'Notebook', 2799.00],
['Notebook thinkpad', 'https://m.media-amazon.com/images/I/71CUP80TyEL._AC_.jpg','i5 core decima geracao', 'Notebook', 2799.00],
    ['Notebook sansung', 'https://a-static.mlcdn.com.br/1500x1500/notebook-samsung-book-intel-core-i3-4gb-256gb-ssd-156-full-hd-windows-11-np550xda-kv3br/magazineluiza/233394100/23cdbc2c630c951207e52dbe2c68eb4c.jpg','i3 core oitava geracao', 'Notebook', 1799.00],
    ['Samsung galaxy A36', 'https://th.bing.com/th?id=OIF.9PdAj9Q8wtL19x%2bA%2fXplnw&r=0&rs=1&pid=ImgDetMain&o=7&rm=3','telefone novo de ultima geracao', 'Celular', 4999.89],
    ['Iphone 13 pro max', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6443/6443336cv11d.jpg','telefone nvo de ultima geracao', 'Celular', 3499.00],
    ['Mouse dell', 'https://i5.walmartimages.com/seo/Dell-Wireless-Computer-Mouse-WM126-Long-Life-Battery-with-Comfortable-Design-Black_fbd7a25b-92a6-4b91-b1da-2663efa2d89e.01577d76f22f33dff7d1f55a159b9d95.jpeg','mouse cabo usb novo', 'Mouse', 15]
];

const divCatalogo = document.getElementById('divCatalogo');

function mostrarCatalogo(event){

    if(event) event.preventDefault();
    console.log(document.getElementById('filtro'));

    const filtro = document.getElementById('filtro')
        .value
        .trim()
        .toLowerCase();

 let pFiltrados =[];

 divCatalogo.innerHTML = '';

if(filtro !== ''){
    pFiltrados = produtos
    .filter(produto => produto[3].toLowerCase() === filtro);
} else {
pFiltrados = produtos;
}
if(pFiltrados.length === 0){
    divCatalogo.innerHTML = `<p class="filtro-erro">NÃO HÁ PRODUTOS NESTA CATEGORIA<p>`;
    return;
}

pFiltrados.forEach((produto) => {
    let divCard = document.createElement('div');
    divCard.className='div-card';

    
    const h3 = document.createElement('h3');
    h3.innerHTML = produto[0];
    h3.classList.add('h3');

    const img = document.createElement('img');
    img.src = produto[1];
    img.classList.add('img');

    const p = document.createElement('p');
    p.innerHTML = produto[2];
    p.classList.add('p');

    const spanCategoria = document.createElement('span');
    spanCategoria.innerHTML = produto[3];
    spanCategoria.classList.add('span-Categoria');


    const spanPreco = document.createElement('span');
    spanPreco.classList.add('span-Preco');
    spanCategoria.innerHTML = `R$ ${produto[4]},00`;

    divCard.appendChild(h3);
    divCard.append(img);
    divCard.appendChild(p);
    divCard.appendChild(spanCategoria);
    divCard.appendChild(spanPreco);

  
    divCatalogo.appendChild(divCard);

}); 

};

mostrarCatalogo();






