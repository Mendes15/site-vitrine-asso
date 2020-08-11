// get button inside the nav
let btn = document.getElementById('button-menu-hover');

//get our menu class property with querySelector
let menuList = document.querySelector('.menuList');


btn.addEventListener("click", (e) => {
    e.stopPropagation()
    menuList.classList.toggle('show');
});

document.addEventListener('click', () => menuList.classList.remove('show'));