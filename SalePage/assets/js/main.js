// header sticky
const element = document.querySelector('.container__nav-bar');
const elementRect = element.getBoundingClientRect();
window.addEventListener('scroll', () => {
    if (window.scrollY > elementRect.top) {
        element.style.position = 'fixed';
        element.style.top = '0';
    } else {
        element.style.position = '';
        element.style.top = '';
    }
});