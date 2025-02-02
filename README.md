# Google Keep Clone

## Overview
This is a simple Google Keep clone built with HTML, CSS, and JavaScript. It allows users to add, archive, restore, and delete notes. The application uses an in-memory JavaScript array to store notes and renders them dynamically. The UI includes a left sidebar with menu options and interactive elements such as a note input area and a search form.

## Features
- **Create Notes:**  
  Users can enter a title and content for a new note using the input area. Once the note is saved (by clicking the "Close" button), it is added to the list of active notes.
  
- **Archive & Restore Notes:**  
  - Active notes can be archived by clicking the archive icon on each note.  
  - Archived notes are hidden from the active view and are shown when the user clicks the "Archive" menu item.  
  - Restoring an archived note (by clicking the restore icon) switches it back to the active notes view immediately.

- **Delete Notes:**  
  Each note includes a delete button to remove it permanently from the list.

- **View Toggling:**  
  The left sidebar includes menu options that let users switch between viewing active notes (labeled “Notes”) and archived notes (labeled “Archive”). Clicking the "Notes" menu displays all active notes, including those that were restored.

- **UI Interactions:**  
  - The note input area toggles its display when clicked.  
  - A search form changes its appearance when focused.  
  - A responsive sidebar menu toggles between a compact and expanded view.
  - Other UI elements (such as the overlay, reload, and grid view toggling) are included for a more interactive experience.

## Technologies Used
- **HTML5:** For structuring the application.
- **CSS3:** For styling the app, including responsive and transition effects.
- **JavaScript (ES6):** For implementing all interactive functionality, including note management and view toggling.
- **Local Storage (Optional):** For note persistence across sessions (or integration with Firebase for advanced storage, if desired).

## How to Use
1. **Open the App:**  
   Open the `index.html` file in your web browser.
   
2. **Add a Note:**  
   - Click on the note input area.
   - Enter a title and content.
   - Click the "Close" button to add the note.
   
3. **Manage Notes:**  
   - **Archive:** Click the archive icon on an active note to archive it. Archived notes will disappear from the active view.
   - **Restore:** In the Archive view (by clicking the "Archive" menu), click the restore icon on a note to move it back to active notes.
   - **Delete:** Click the trash icon on any note to delete it.
   
4. **Toggle Views:**  
   - Click the "Notes" menu item (displayed as a menu option) to view active notes.
   - Click the "Archive" menu item to view archived notes.

5. **Additional Interactions:**  
   - The sidebar menu and search form have interactive behaviors (e.g., toggling and hover effects) to enhance the user experience.
   - The grid view button and reload functionality are also provided.

## Installation
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/google-keep-clone.git
   cd google-keep-clone

Open the App: Open the index.html file in your preferred web browser.

**Future Enhancements**
Adding additional features such as drag-and-drop note reordering.
Integrating with a backend or Firebase for persistent data storage.
Enhancing the UI/UX with more customization options.