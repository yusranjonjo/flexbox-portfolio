const barsMenu = document.querySelector('.bars-menu');
const daftarMenu = document.querySelector('.daftar-menu');
const listMenu = document.querySelectorAll('.daftar-menu li');
const iconBars = document.querySelector('.fa-bars');
const header = document.querySelector('.header');

let lastScrollTop = 0;
window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        header.style.top = '-180px';
    } else {
        header.style.top = '0';
    }
    lastScrollTop = scrollTop;
})

barsMenu.addEventListener('click', function () {
    daftarMenu.classList.toggle('menus');
    iconBars.classList.toggle('fa-times');
});

listMenu.forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.target.parentElement.parentElement.classList.toggle('menus');
        iconBars.classList.toggle('fa-times')
    })
});