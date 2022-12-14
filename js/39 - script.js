window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu'),
    menuItem = document.querySelectorAll('.nav-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav-menu__active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav-menu__active');
        })
    })
})