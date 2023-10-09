import Header from "../components/Header";
import Note from "../components/Note";
import Footer from "../components/Footer";

import notes from "./notes";

function App() {
  return (
    <>
      <Header />
      {notes.map((note) => (
        <Note key={note.id} title={note.title} content={note.content} />
      ))}
      <Footer />
    </>
  );
}

export default App;
