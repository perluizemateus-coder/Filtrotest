const  produtos = [['Notebook thinkpad', 'i5 core decima geracao', 'Notebook', 2799.00],
['Notebook thinkpad', 'i5 core decima geracao', 'Notebook', 2799.00],
    ['Notebook sansung', 'i3 core oitava geracao', 'Notebook', 1799.00],
    ['Samsung galaxy A3', 'telefone novo de ultima geracao', 'Celular', 4999.89],
    ['Iphone 13 pro max', 'telefone nvo de ultima geracao', 'Celular', 3499.00],
    ['Mouse dell', 'mouse cabo usb novo', 'Mouse', 15.99]


];

const divCatalogo = document.getElementById('j');

produtos.forEach((produto => {
    let divCard = document.createElement('div');
    divCard.classList.add('div-card');

    const h3 = document.createElement('h3');
    h3.innerHTML = produto[0];
    h3.classList.add('h3');

    const p = document.createElement('p');
    p.innerHTML = produto[1];
    p.classList.add('p');

    const spanCategoria = document.createElement('span');
    spanCategoria.innerHTML = produto[2];
    spanCategoria.classList.add('span-Categoria');


    const spanPreco = document.createElement('span');
    spanPreco.classList.add('span-Preco');

    divCard.appendChild(h3);
    divCard.appendChild(p);
    divCard.appendChild(spanCategoria);
    divCard.appendChild(spanPreco);
  
    divCatalogo.appendChild(divCard);

})); 


function mostrarCatalogo(event){
    if(event) event.preventDefault();

        divCatalogo.innerHTML = '';

let filtro

if(filtro !== ''){
    
};

}




