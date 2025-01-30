//toggling the menu button
let menuBars = document.getElementById('menu-bars');
menuBars.addEventListener('click', () => {
    if(menuBars.className === "fa-solid fa-bars"){
        menuBars.className = "fa-solid fa-x"
    } else{
        menuBars.className = "fa-solid fa-bars"
    }
})