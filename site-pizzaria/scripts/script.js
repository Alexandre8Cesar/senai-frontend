let menuContent = document.querySelector('.content');
let menutoggle = menuContent.querySelector('.menu-toggle');
let show = true;

menutoggle.addEventListener('click', () => {
    document.body.style.overflow = show ? 'hidden' : 'intial';
    menuContent.classList.toggle('on', show);
    show = !show;
})

let itensCardapio = document.querySelector(".itens-cardapio");
for (const p of produtos) {
    itensCardapio.innerHTML += `
        <div class="">
            <img src="${p.img}" alt="${p.dsImg}">
                <div class="info">
                    <h3></h3>
                    <h4>6 fatias<span>R$${p.fatias6}</span></h4>
                    <h4>8 fatias<span>R$${p.fatias8}</span></h4>
                    <h4>12 fatias<span>R$${p.fatias12}</span></h4>
                    <button class="pedir">pedir agora</button>

                </div>
                </div>
                `;
}

let telaCarrinho = document.querySelector('.tela-carrinho');
let continuar = document.querySelector ('continuar');
continuar.addEventListener('click', ()=>{
    telaCarrinho.classList.toggle('ocultar-tela-carrinho');
})

let compras = document.querySelector('compras');
compras.addEventListener('click', ()=>{
    telaCarrinho.classList.toggle('ocultar-tela-carrinho');
})