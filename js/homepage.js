const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const navMenu = document.querySelector(".nav-menu")
var navClass = document.getElementsByClassName('navbar')[0]
var hamburgerMenu = document.getElementById("menu")

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    navMenu.classList.toggle('active')
    navClass.classList.toggle('active')
})

hamburgerMenu.onclick = function(){
    hamburgerMenu.classList.toggle("openmenu")
}