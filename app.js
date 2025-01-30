//toggling the menu button
let menuBars = document.getElementById('menu-bars');
menuBars.addEventListener('click', () => {
    if(menuBars.className === "fa-solid fa-bars"){
        menuBars.className = "fa-solid fa-x"
    } else{
        menuBars.className = "fa-solid fa-bars"
    }
})

// //adding functionality for the focus on the input element form
let searchForm = document.getElementById('search-form');
let searchIcon = document.getElementById('search-icon');
let searchInput = document.getElementById('search-input');

//event listner for listening
searchForm.addEventListener('click', () => {
    searchForm.classList.toggle('focus-form')
    if(searchForm.classList.contains('focus-form')){
        searchIcon.style.color = '#5F6368'
    } else{
        searchIcon.style.color = 'white'
    }
})

