let menuContent = document.querySelector('.content');
let menutoggle = menuContent.querySelector('.menu-toggle');
let show = true;

menutoggle.addEventListener('click', () => {
    document.body.style.overflow = show ? 'hidden' : 'intial';
    menuContent.classList.toggle ('on', show);
    show = !show;
})
