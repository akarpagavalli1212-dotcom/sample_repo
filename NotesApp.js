import { useState } from "react";

function App() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const saveNote = () => {
    if (note === "") return;

    if (editIndex === null) {
      setNotes([...notes, note]);
    } else {
      const updated = [...notes];
      updated[editIndex] = note;
      setNotes(updated);
      setEditIndex(null);
    }

    setNote("");
  };

  const editNote = (index) => {
    setNote(notes[index]);
    setEditIndex(index);
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Notes App</h1>

      <input
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Enter note"
      />

      <button onClick={saveNote}>
        {editIndex === null ? "Add Note" : "Update"}
      </button>

      {notes.map((item, index) => (
        <div key={index}>
          <p>{item}</p>
          <button onClick={() => editNote(index)}>Edit</button>
          <button onClick={() => deleteNote(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;