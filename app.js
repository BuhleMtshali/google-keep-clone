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
        searchInput.style.color = '#202124'
    } else{
        searchIcon.style.color = 'white'
        searchInput.style.color = 'var(--light-mode-form-bg)'
    }
})

//changing grid view between column and row
let gridButton = document.getElementById('grid-control');
gridButton.addEventListener('click', () => {
    if(gridButton.textContent === 'splitscreen'){
        gridButton.textContent  = 'grid_view'
    } else {
        gridButton.textContent = 'splitscreen'
    }
})

//adding function to the refresh icon
let reloadButton = document.getElementById('reload');
reloadButton.addEventListener('click', () => {
    location.reload()
})

//setting up the text tooltip
let settingTooltip = document.getElementById('setting-tooltip');
let testTooltip = document.getElementById('test-tooltip')
settingTooltip.addEventListener('click', (event) => {
    if(testTooltip.style.display === 'none'){
        testTooltip.style.display = 'block'
    } else{
        testTooltip.style.display = 'none'
    }

    event.stopPropagation();
})



//setting the tooltip for the apps
let appTooltipBtn = document.getElementById('app-tooltip-btn');
let appTools = document.getElementById('apps-tooltip')
appTooltipBtn.addEventListener('click', (event) => {
    if(appTools.style.visibility === 'hidden'){
        appTools.style.visibility = 'visible'
    } else{
        appTools.style.visibility = 'hidden'
    }

    event.stopPropagation();
})

//hiding the tooltip clicking outside outside
document.addEventListener('click', (e) => {
    if(!appTools.contains(e.target) && e.target !== appTooltipBtn){
        appTools.style.visibility = 'hidden';
    }
})