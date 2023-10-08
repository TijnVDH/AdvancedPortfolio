let text = document.getElementById("text")
let desc = document.getElementById("description")


window.addEventListener('scroll', function(){
    var value = window.scrollY;
    var header = this.document.querySelector("nav")
    header.classList.toggle("sticky-home", window.scrollY > 105)
    text.style.top = value * 1 + 'px'
    desc.style.top = value * 1 + 'px'
})