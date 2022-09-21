import uuid from 'react-uuid';
import { useState } from 'react';

import './App.css';
import NoteArea from './NoteArea/NoteArea';
import Sidebar from './Sidebar/Sidebar';

function App() {

  const [notes, setNotes] = useState([]);

  const handleCreateNote = () => {
    console.log("created");

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

  return (
    <div className="App">
      <Sidebar 
        notes={notes}
        onCreateNote={handleCreateNote}
        onDeleteNote={handleDeleteNote}/>
      <NoteArea/>
    </div>
  );
}

export default App;
