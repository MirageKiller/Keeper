import React, { useState } from "react";
import Header from "../components/Header";
import CreateArea from "../components/CreateArea";
import Note from "../components/Note";
import Footer from "../components/Footer";

import notes from "./notes";

function App() {
  const [noteList, setNoteList] = useState([]);

  function addNote(newNote) {
    setNoteList((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNoteList((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <Header />
      <CreateArea addNote={addNote} />
      {noteList.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          deleteNote={deleteNote}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
