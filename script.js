const barsMenu = document.querySelector('.bars-menu');
const daftarMenu = document.querySelector('.daftar-menu');
const listMenu = document.querySelectorAll('.daftar-menu li');
const iconBars = document.querySelector('.fa-bars');

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