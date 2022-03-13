import "./App.css";
import React, { useState } from "react";
import { notesData } from "./data";
import Card from "./Card";

function App() {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteTask, setNoteTask] = useState("");
  const [cardBgColor, setCardBgColor] = useState("");
  const [notes, setNotes] = useState(notesData);
  const [pinNotes, setPinNotes] = useState(false);
  // console.log(noteTitle);
  // console.log(noteTask);
  const pinnedNotes=notes.filter((note)=>note.pin);
  const unpinnedNotes=notes.filter((note)=> !note.pin);
  // console.log(pinnedNotes);
  // console.log(unpinnedNotes);

  const notesHandler = () => {
    setNotes((prev) => [
      ...prev,
      { id: Math.random(),
         title: noteTitle, 
         task: noteTask,
         bgColor: cardBgColor,
         pin:pinNotes,
         },
    ]);
    setNoteTitle("");
    setNoteTask("");
    setCardBgColor("");
    setPinNotes("");
  };
  return (
    <div className="App">
      <h2>Notes App</h2>
      <div>
        <form className="notes-form">
          <input  style={{ backgroundColor: cardBgColor }}
            type="text"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
          />
          <textarea  style={{ backgroundColor: cardBgColor }}
            type="text"
            value={noteTask}
            onChange={(e) => setNoteTask(e.target.value)}
          />
        </form>
        <button onClick={()=>setPinNotes((prev)=> !prev)}>{pinNotes ? "UNPIN" : "PIN"}</button>
        <button onClick={notesHandler}>Add Note</button>
        <button onClick={() => setCardBgColor("#fbbd33")}>yellow</button>
        <button onClick={() => setCardBgColor("#c8f08f")}>green</button>
        <button onClick={() => setCardBgColor("#a5f8ea")}>blue</button>

        <section className="notes-card">
          {pinnedNotes.map((note) => {
            return <Card title={note.title} task={note.task} bgColor={ note.bgColor } key={note.id} />;
          })}
        </section>
        <section className="notes-card">
          {unpinnedNotes.map((note) => {
            return <Card title={note.title} task={note.task} bgColor={ note.bgColor } key={note.id} pin = {note.pinNotes}/>;
          })}
        </section>
      </div>
    </div>
  );
}

export default App;
