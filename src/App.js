import { useState } from 'react';

import './App.css';
import NoteArea from './NoteArea/NoteArea';
import Sidebar from './Sidebar/Sidebar';

function App() {

  const [notes, setNotes] = useState([]);

  return (
    <div className="App">
      <Sidebar/>
      <NoteArea/>
    </div>
  );
}

export default App;
