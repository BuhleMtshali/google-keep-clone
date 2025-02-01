//toggling the menu button and show of the texts
let menuBars = document.getElementById('menu-bars');
let menuTexts = document.querySelectorAll('.menu-text');
let innerMenu = document.querySelectorAll('.inner-menu')
menuBars.addEventListener('click', () => {
    if(menuBars.className === "fa-solid fa-x"){
        menuBars.className = "fa-solid fa-bars"
        menuTexts.forEach((text) => {
        text.style.display = 'none'
       })
       innerMenu.forEach((menu) => {
        menu.style.width = '48px'
         menu.style.height = '48px'
         menu.style.borderRadius = '50%'
         menu.style.padding = '8px'
       
       })
      

    } 
    else {
            menuBars.className = "fa-solid fa-x"
            menuTexts.forEach((text) => {
            text.style.display = 'block'
        })
        innerMenu.forEach((menu) => {
            menu.style.width = '100%'
            //  menu.style.height = '48px'
             menu.style.borderRadius = '25px'
             menu.style.padding = '12px 0'
           
           });
           
    }

})


// //adding functionality for the focus on the input element form
let searchForm = document.getElementById('search-form');
let searchIcon = document.getElementById('search-icon');
let searchInput = document.getElementById('search-input');

//event listner for listening
searchForm.addEventListener('click', (e) => {
    searchForm.classList.toggle('focus-form')
    if(searchForm.classList.contains('focus-form')){
        searchIcon.style.color = '#5F6368'
        searchInput.style.color = '#202124'
    } else{
        searchIcon.style.color = 'white'
        searchInput.style.color = 'var(--light-mode-form-bg)'
    }
    e.stopPropagation()
    
})

//removing focus on the form
document.addEventListener('click', (e) => {
    if (!searchForm.contains(e.target)) {
        searchForm.classList.remove('focus-form'); 
        searchIcon.style.color = 'white';
        searchInput.style.color = 'var(--light-mode-form-bg)';
    }
});

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

//function for adding an active class on the menu items
let menuContainer = document.getElementById('menu-container');
let menuItems = document.querySelectorAll('.inner-menu'); //getting all the elements under the container
for(let i = 0; i < menuItems.length; i++){
    menuItems[i].addEventListener('click', function () {
        let currentItem = document.getElementsByClassName('active');
        if(currentItem.length > 0){
          currentItem[0].className = currentItem[0].className.replace(' active', "")
        }
        this.className += " active"
    })
}

// togging the textarea
const notesInputContainer = document.getElementById('notes-input');
const addNotesContainer = document.getElementById('note-text-container');
const hideableIcons = document.querySelectorAll('.hide-icon')
notesInputContainer.addEventListener('click', (e) => {
    e.stopPropagation() //helps with bubbling issues
    if(addNotesContainer.style.display === 'none'){
        addNotesContainer.style.display = 'block'
       hideableIcons.forEach((icon) => {
        icon.classList.remove('hide-icon')
        icon.classList.add('hide-input-icons')
       })
    } else {
        addNotesContainer.style.display = 'none';
        hideableIcons.forEach((icon) => {
            icon.classList.remove('hide-input-icons')
            icon.classList.add('hide-icon')
        })
       
    }
})

//hidng the texarea when a user taps on the document
document.addEventListener('click', (event) => {
    if(!addNotesContainer.contains(event.target) && event.target !== notesInputContainer){
        addNotesContainer.style.display = 'none'
    }
})

