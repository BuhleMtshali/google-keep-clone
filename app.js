//CREATING A FUNCTION FOR PUSHING OBJECTS
// 1. Defining the variables
let titleInputElement = document.getElementById('note-title');
let notesElement = document.getElementById('text-notes');
let closeBtn = document.getElementById('close-btn');
let noteContainer = document.getElementById('notes-container');

// Buttons for toggling views
let menuNotes = document.getElementById('menu-notes');    
let menuArchive = document.getElementById('menu-archive');   

// 2. Creating a class
class NotesStorage {
  constructor(){
    this.arrayNotes = [];
    this.idCount = 0;
    this.archiveMode = false;
  }

  addNotes(title, content){
    if(title === "" || content === ""){
      console.log('Title needs to be filled in');
      return;
    }

    const newNote = { id: this.idCount++, title, content, archived: false };
    this.arrayNotes.push(newNote);
    console.log("New Note Added:", newNote);
    this.showNotes();
  }

  // Archive a note
  archiveNote(id){
    const note = this.arrayNotes.find(note => note.id === id);
    if(note){
      note.archived = true;
      console.log(`Note with ID ${id} archived.`);
    }

    if (this.archiveMode === true) {
        this.archiveMode = false;
      }

    this.showNotes();
  }

  // Restore a note
  restoreNote(id) {
    const note = this.arrayNotes.find(note => note.id === id);
    if (note) {
      note.archived = false;
      console.log(`Note with ID ${id} restored.`);
    }
    // Switch back to active view if currently in archive view
    if (this.archiveMode === true) {
      this.archiveMode = false;
    }
    this.showNotes();
  }

  // Delete a note
  deleteNote(id){
    this.arrayNotes = this.arrayNotes.filter(note => note.id !== id);
    console.log(`Note with ID ${id} deleted.`);
    this.showNotes();
  }

  showNotes(){
    console.log("Notes:", this.arrayNotes);
    let renderedNotes = '';
    // Filter the notes based on the current view (active vs. archived)
    let notesToRender = this.arrayNotes.filter(note => note.archived === this.archiveMode);
    
    // Loop over the filtered array to build the HTML
    notesToRender.forEach((note) => {
      renderedNotes += `    
        <div class="individual-note">
          <!-- Check button -->
          <div class="check-btn">
            <i class="fa-solid fa-circle-check check-btn-event"></i>
          </div>
          <!-- Pin tab -->
          <div class="pin-tab">
            <i class="fa-solid fa-thumbtack" id="pin-tab"></i>
          </div>
          <!-- Note content -->
          <h2 class="note-title">${note.title}</h2>
          <p class="note-text">${note.content}</p>
          <!-- Note actions -->
          <div class="note-edits">
            <i class="fa-solid fa-bell note-edit-icon"></i>
            <i class="fa-regular fa-user note-edit-icon"></i>
            <i class="fa-solid fa-palette note-edit-icon"></i>
            <i class="fa-solid fa-image note-edit-icon"></i>
            <i class="fa-solid fa-ellipsis-vertical note-edit-icon"></i>
            ${
              note.archived === false 
              ? `<i class="fa-solid fa-archive archive-note note-edit-icon" data-id="${note.id}"></i>`
              : `<i class="fa-solid fa-rotate-left restore-note note-edit-icon" data-id="${note.id}"></i>`
            }
            <i class="fa-solid fa-trash delete-note note-edit-icon" data-id="${note.id}"></i>
          </div>
        </div>
      `;
    });

    noteContainer.innerHTML = renderedNotes;
  }
}

// Creating the instance
const myNotes = new NotesStorage();

closeBtn.addEventListener('click', renderNotes);

function renderNotes(){
  myNotes.addNotes(titleInputElement.value, notesElement.value);
  // Clearing the input fields
  titleInputElement.value = '';
  notesElement.value = '';
}

// Note actions (archive, restore, delete) using event delegation (attach this once)
noteContainer.addEventListener('click', (e) => {
  const target = e.target;
  const noteId = parseInt(target.getAttribute("data-id"));

  if(target.classList.contains("archive-note")){
    myNotes.archiveNote(noteId);
  } else if(target.classList.contains("restore-note")){
    myNotes.restoreNote(noteId);
  } else if(target.classList.contains("delete-note")){
    myNotes.deleteNote(noteId);
  }
});

// Event listeners for toggling views
menuNotes.addEventListener('click', () => {
  // Show active notes (not archived)
  myNotes.archiveMode = false;
  myNotes.showNotes();
});

menuArchive.addEventListener('click', () => {
  myNotes.archiveMode = true;
  myNotes.showNotes();
});


document.getElementById('menu-notes').addEventListener('click', () => {
    myNotes.archiveMode = false; 
    myNotes.showNotes();      
  });
  
  // When the "Archive" menu item is clicked, show archived notes
  document.getElementById('menu-archive').addEventListener('click', () => {
    myNotes.archiveMode = true;   
    myNotes.showNotes();          
  });
  

let menuBars = document.getElementById('menu-bars');
let menuTexts = document.querySelectorAll('.menu-text');
let innerMenu = document.querySelectorAll('.inner-menu');
menuBars.addEventListener('click', () => {
  if(menuBars.className === "fa-solid fa-x"){
    menuBars.className = "fa-solid fa-bars";
    menuTexts.forEach((text) => {
      text.style.display = 'none';
    });
    innerMenu.forEach((menu) => {
      menu.style.width = '48px';
      menu.style.height = '48px';
      menu.style.borderRadius = '50%';
      menu.style.padding = '8px';
    });
  } else {
    menuBars.className = "fa-solid fa-x";
    menuTexts.forEach((text) => {
      text.style.display = 'block';
    });
    innerMenu.forEach((menu) => {
      menu.style.width = '100%';
      menu.style.borderRadius = '25px';
      menu.style.padding = '12px 0';
    });
  }
});

let searchForm = document.getElementById('search-form');
let searchIcon = document.getElementById('search-icon');
let searchInput = document.getElementById('search-input');

searchForm.addEventListener('click', (e) => {
  searchForm.classList.toggle('focus-form');
  if(searchForm.classList.contains('focus-form')){
    searchIcon.style.color = '#5F6368';
    searchInput.style.color = '#202124';
  } else{
    searchIcon.style.color = 'white';
    searchInput.style.color = 'var(--light-mode-form-bg)';
  }
  e.stopPropagation();
});

document.addEventListener('click', (e) => {
  if (!searchForm.contains(e.target)) {
    searchForm.classList.remove('focus-form'); 
    searchIcon.style.color = 'white';
    searchInput.style.color = 'var(--light-mode-form-bg)';
  }
});

let gridButton = document.getElementById('grid-control');
gridButton.addEventListener('click', () => {
  if(gridButton.textContent === 'splitscreen'){
    gridButton.textContent  = 'grid_view';
  } else {
    gridButton.textContent = 'splitscreen';
  }
});

let reloadButton = document.getElementById('reload');
reloadButton.addEventListener('click', () => {
  location.reload();
});

let settingTooltip = document.getElementById('setting-tooltip');
let testTooltip = document.getElementById('test-tooltip');
settingTooltip.addEventListener('click', (event) => {
  if(testTooltip.style.display === 'none'){
    testTooltip.style.display = 'block';
  } else{
    testTooltip.style.display = 'none';
  }
  event.stopPropagation();
});

let appTooltipBtn = document.getElementById('app-tooltip-btn');
let appTools = document.getElementById('apps-tooltip');
appTooltipBtn.addEventListener('click', (event) => {
  if(appTools.style.visibility === 'hidden'){
    appTools.style.visibility = 'visible';
  } else{
    appTools.style.visibility = 'hidden';
  }
  event.stopPropagation();
});

document.addEventListener('click', (e) => {
  if(!appTools.contains(e.target) && e.target !== appTooltipBtn){
    appTools.style.visibility = 'hidden';
  }
});

let menuContainer = document.getElementById('menu-container');
let menuItems = document.querySelectorAll('.inner-menu');
for(let i = 0; i < menuItems.length; i++){
  menuItems[i].addEventListener('click', function () {
    let currentItem = document.getElementsByClassName('active');
    if(currentItem.length > 0){
      currentItem[0].className = currentItem[0].className.replace(' active', "");
    }
    this.className += " active";
  });
}

const notesInputContainer = document.getElementById('notes-input');
const addNotesContainer = document.getElementById('note-text-container');
const hideableIcons = document.querySelectorAll('.hide-icon');

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

document.addEventListener('click', (event) => {
  if (!notesInputContainer.contains(event.target) && !addNotesContainer.contains(event.target)) {
    addNotesContainer.style.display = 'none';
    hideableIcons.forEach((icon) => {
      icon.classList.add('hide-icon');
      icon.classList.remove('hide-input-icons');
    });
  }
});
