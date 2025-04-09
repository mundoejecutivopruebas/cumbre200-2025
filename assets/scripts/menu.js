const menuItems = document.querySelectorAll('.nav-ul .nav-ul-li a');
const contenedorMenu = document.querySelector('.contenedor-menu-celular-main');
const sections = document.querySelectorAll('.section');
const menuLinks = document.querySelectorAll('.nav-ul .nav-ul-li a');
contenedorMenu.innerHTML = '';
menuItems.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('menu-celular-opciones');
    const a = document.createElement('a');
    a.textContent = item.textContent;
    a.href = item.href;
    a.addEventListener('click', () => {
        cerrar_menu();
    });
    div.appendChild(a);
    contenedorMenu.appendChild(div);
});
function abrir_menu() {
    document.getElementById('menu_celular').style.display = 'flex';
}
function cerrar_menu() {
    document.getElementById('menu_celular').style.display = 'none';
}
function ajustarMenu() {
    const menuCelular = document.getElementById('menu_celular');
        if (window.innerWidth > 800) {
        menuCelular.style.display = 'none';
    } else {
        if (menuCelular.style.display === 'flex') {
            menuCelular.style.display = 'flex';
        } else {
            menuCelular.style.display = 'none';
        }
    }
}
ajustarMenu();
window.addEventListener('resize', ajustarMenu);
window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 50;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            if (menuLinks[index]) {
                menuLinks[index].classList.add("active");
            }
        } else {
            if (menuLinks[index]) {
                menuLinks[index].classList.remove("active");
            }
        }
    });
});