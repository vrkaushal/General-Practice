window.onclick = function(event){
    console.log(event.target);
}

var logo = document.querySelector('.header__logo');
console.log(logo);
logo.addEventListener('click', (event)=> {
    logo.style.fontWeight = '900';
})

var search = document.querySelector('.search');
var whatKey = document.querySelector('.lastPressed');
search.addEventListener('keypress', (event)=> {
    whatKey.innerHTML = event.key;
})

