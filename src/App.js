import uuid from 'react-uuid';
import { useState } from 'react';

import './App.css';
import NoteArea from './NoteArea/NoteArea';
import Sidebar from './Sidebar/Sidebar';

function App() {

  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const handleCreateNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      content: "",
      lastModified: Date.now()
    }

    setNotes([newNote, ...notes]);
  }

  const handleDeleteNote = (deletingId) => {
    setNotes(notes.filter((note) => note.id !== deletingId))
  }

  const handleUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map(note => {
      if (note.id === activeNote) {
        return updatedNote;
      }

      return note;
    })

    setNotes(updatedNotesArray)
  }
  
  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  }

  return (
    <div className="App">
      <Sidebar 
        // too many prop being passed
        notes={notes}
        onCreateNote={handleCreateNote}
        onDeleteNote={handleDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}/>
      <NoteArea
        // always running
        activeNote={getActiveNote()}
        onUpdateNote={handleUpdateNote}
        />
    </div>
  );
}

export default App;
