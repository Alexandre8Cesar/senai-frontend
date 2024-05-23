let menuContent = document.querySelector('.content');
let menutoggle = menuContent.querySelector('.menu-toggle');
let show = true;

menutoggle.addEventListener('click', () => {
    document.body.style.overflow = show ? 'hidden' : 'intial';
    menuContent.classList.toggle('on', show);
    show = !show;
})

let itensCardapio = document.querySelector(".itens-cardapio");
let id = 0;
for (const p of produtos) {
    itensCardapio.innerHTML += `
        <div class="">
            <img src="${p.img}" alt="${p.dsImg}">
                <div class="info">
                    <h3></h3>
                    <h4>6 fatias<span>R$${p.fatias6}</span></h4>
                    <h4>8 fatias<span>R$${p.fatias8}</span></h4>
                    <h4>12 fatias<span>R$${p.fatias12}</span></h4>
                    <button id="id${id}" class="pedir">pedir agora</button>

                </div>
                </div>
                `;
    id++;
}

let telaCarrinho = document.querySelector('.tela-carrinho');
let continuar = document.querySelector('.continuar');
continuar.addEventListener('click', () => {
    telaCarrinho.classList.toggle('ocultar-tela-carrinho');
})

let compras = document.querySelector('.compras');
compras.addEventListener('click', () => {
    telaCarrinho.classList.toggle('ocultar-tela-carrinho');
    menutoggle.click(); //fechar o menu suspenso nas versões mobile
})

let lsPedido = document.querySelectorAll('.pedir');
for (const bt of lsPedido) {
    bt.addEventListener('click', () => {
        let id = bt.id.replace('id', '');
        produtos[id].quantidade = 1;
        atualizarTabela();
    });
}

function atualizarTabela() {
    
    for (const p of produtos) {
        if (p.quantidade > 0) {alert()
            console.log(p)
        }
    }
}

let tbody = document.querySelector('tbody');
function atualizarTabela(){
    tbody.innerHTML = '';
    let total = 0;
    for (const p of produtos) {
        if (p.quantidade > 0){
            tbody.innerHTML += `
            </tr>
                <td>${p.nome}</td>
                <td>${p.quantidade}x${p.fatias8}=${p.quantidade*p.fatias8}(8 fatias)</td>
                <td>
                    <i class="bi bi-plus-square-fill"></i>
                    <i class="bi bi-dash-square-fill"></i>
                </td>
                </tr>`;
                total += p.quantidade*p.fatias8;
        }
    }
    document.querySelector('#total-pedido').innerHTML = `Valor total do pedido = R$${total}`;

}