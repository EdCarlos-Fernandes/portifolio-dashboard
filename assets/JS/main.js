let menuHamburguer = document.querySelector('#iconNavbarSidenav');
menuHamburguer.addEventListener('click', () => {
    let sideNav = document.querySelector('#sidenav-main');
    sideNav.style.transform = 'translateX(0)';
});