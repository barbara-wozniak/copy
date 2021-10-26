const hamburger = document. querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const project_item = document.querySelectorAll('.project-img');
const project_item_close = document.querySelectorAll('.project-text-close');

hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250){
        header.style.backgroundColor = "#29323c";
    }else{
        header.style.backgroundColor = "transparent";
    }
});

menu_item.forEach((item) => {
item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

project_item.forEach((item) => {
    item.addEventListener('click', () => {
            item.closest('.project-item').querySelector(".project-text").classList.add('active');
        });
    });

project_item_close.forEach((item) => {
    item.addEventListener('click', () => {
            item.closest(".project-text").classList.remove('active');
        });
    });