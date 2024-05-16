const darkmodeDark = document.querySelector('.darkmode-dark');
const darkmodeLight = document.querySelector('.darkmode-light');
const bodyVar = document.querySelector('body');
const headerLogo = document.querySelector('.header-logo');

darkmodeDark.addEventListener("click", (e) => {
    if(!bodyVar.classList.contains("var-dark")) {
        bodyVar.classList.toggle("var-dark")
        headerLogo.setAttribute('src', './image/alarado-icon-homepage-dark.svg')
        localStorage.setItem("theme", "dark")
    }
})

darkmodeLight.addEventListener("click", (e) => {
    if (bodyVar.classList.contains("var-dark")) {
        bodyVar.classList.toggle("var-dark")
        headerLogo.setAttribute('src', './image/alarado-icon-homepage.svg')
        localStorage.setItem("theme", "light")
    }
})

const theme = localStorage.getItem('theme');

if (theme === 'dark') {
    bodyVar.classList.toggle("var-dark")
    headerLogo.setAttribute('src', './image/alarado-icon-homepage-dark.svg')
    localStorage.setItem("theme", "dark")
}