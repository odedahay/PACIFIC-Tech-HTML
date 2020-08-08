const menuIcon = document.querySelector('.site-header__menu-icon');
const menuContent = document.querySelector('.site-header__menu-content');
const siteHeader = document.querySelector('.site-header');

menuIcon.addEventListener('click', () => {
    menuContent.classList.toggle('site-header__menu-content--is-visible');
    siteHeader.classList.toggle('site-header--is-expanded');
    menuIcon.classList.toggle('site-header__menu-icon--close-x')
})