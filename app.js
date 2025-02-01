//CREATING A FUNCTION FOR PUSHING OBJECTS
//1.defining the variables
let titleInputElement = document.getElementById('note-title');
let notesElement = document.getElementById('text-notes')
let closeBtn = document.getElementById('close-btn');
let noteContainer = document.getElementById('notes-container')
//2. Creating a class
class NotesStorage {
    constructor(){
        this.arrayNotes = [];
        this.idCount = 0;
    
    }

    

    addNotes(title, content){
        if(title === "" || content === ""){
            console.log('Title needs to be filled in');
            return
        }

        const newNote = {id: this.idCount++, title, content};
        console.log("New Note Added:", newNote)
        this.showNotes()

    }

    // delete function
    deleteNote(id){
        this.arrayNotes = this.arrayNotes.filter((note) => {
            note.id !== id;
            console.log(`Note with ${id} deleted`)
            this.showNotes()
        })
    }



    showNotes(){
        console.log("Notes:", this.arrayNotes);
        let renderedNotes = '';
        this.arrayNotes.forEach((note) => {
            renderedNotes += `    
                            <div class="individual-note">
                            <!-- !check box to pull the drop drown by the nav bar -->
                            <div class="check-btn">
                            <i class="fa-solid fa-circle-check" id="check-btn"></i>
                            </div>
                            <!-- end of check btn -->
                            <div class="pin-tab">
                            <i class="fa-solid fa-thumbtack" id="pin-tab"></i>
                            </div>
                            <!-- end of pin tab -->
                            <h2 class="note-title" id="note-title">${note.title}</h2>
                            <p class="note-text" id="note-text">${note.content}</p>
                            <div class="note-edits">
                            <i class="fa-solid fa-bell note-edit-icon"></i>
                            <i class="fa-regular fa-user note-edit-icon"></i>
                            <i class="fa-solid fa-palette note-edit-icon"></i>
                            <i class="fa-solid fa-image note-edit-icon"></i>
                            <i class="fa-solid fa-box-archive note-edit-icon"></i>
                            <i class="fa-solid fa-ellipsis-vertical note-edit-icon"></i>
                            </div>
                            </div>

                            `
        })

        noteContainer.innerHTML = renderedNotes;
    }

}

//creating the instance
const myNotes = new NotesStorage();

closeBtn.addEventListener('click', renderNotes)

function renderNotes(){
    myNotes.addNotes(titleInputElement.value, notesElement.value);
    myNotes.showNotes()
    titleInputElement.value ='';
    notesElement.value = ''
}






//toggling the nav
const navBarElement = document.getElementById('nav');
const selectNoteBtn = document.getElementById('check-btn');
const overlayContainer = document.getElementById('overlay-div');
selectNoteBtn.addEventListener('click', function() {
    navBarElement.classList.toggle('hide-nav')
    if(navBarElement.classList.contains('hide-nav')){
        overlayContainer.classList.add('show-overlay');
        overlayContainer.classList.remove('overlay-div')
    
    } else {
        overlayContainer.classList.add('overlay-div'); 
        overlayContainer.classList.remove('show-overlay')
    }
})


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

const notesInputContainer = document.getElementById('notes-input');
const addNotesContainer = document.getElementById('note-text-container');
const hideableIcons = document.querySelectorAll('.hide-icon');

// Toggling the textarea and icons when clicking notesInputContainer
notesInputContainer.addEventListener('click', (e) => {
    e.stopPropagation(); 
    
    const isHidden = getComputedStyle(addNotesContainer).display === 'none';
    addNotesContainer.style.display = isHidden ? 'block' : 'none';

    hideableIcons.forEach((icon) => {
        icon.classList.toggle('hide-icon');
        icon.classList.toggle('hide-input-icons');
    });
});


addNotesContainer.addEventListener('click', (e) => {
    e.stopPropagation(); 
});

// Hide textarea when clicking outside
document.addEventListener('click', (event) => {
    if (!notesInputContainer.contains(event.target) && !addNotesContainer.contains(event.target)) {
        addNotesContainer.style.display = 'none';
        
        hideableIcons.forEach((icon) => {
            icon.classList.add('hide-icon');
            icon.classList.remove('hide-input-icons');
        });
    }
});

