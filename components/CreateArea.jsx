import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab, Zoom } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [expandTextArea, setExpasion] = useState(false);

  function handleChange(event) {
    //Destruct event to update the att in note
    const { name, value } = event.target;

    //Take the previus value param to update
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleClick() {
    setExpasion(true);
  }

  return (
    <div>
      <form className="create-note">
        {expandTextArea && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        )}
        <textarea
          onClick={handleClick}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={expandTextArea ? "3" : "1"}
          value={note.content}
        />
        {expandTextArea && (
          <Zoom in="true">
            <Fab
              //Needed the event param to keep data since it was refreshing the note List array
              onClick={(event) => {
                props.addNote(note);
                setNote({
                  title: "",
                  content: "",
                });
                event.preventDefault();
              }}
            >
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
