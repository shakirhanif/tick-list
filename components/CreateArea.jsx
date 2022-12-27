import React, { useEffect, useRef, useState } from "react";
import { MdAdd } from "react-icons/md";

function CreateArea(props) {
  const refOne = useRef(null);
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (!refOne.current.contains(e.target)) {
        setFocus(false);
      }
    });
  }, []);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [focus, setFocus] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
    setFocus(false);
  }

  function focusHandler() {
    setFocus(true);
  }

  return (
    <div ref={refOne}>
      <form className="create-note">
        {focus ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
            autoFocus
          />
        ) : null}

        <textarea
          ref={refOne}
          onClick={focusHandler}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={focus ? "3" : "1"}
        />
        {focus ? (
          <button
            onClick={submitNote}
            className=" flex items-center justify-center"
          >
            <MdAdd size={25}></MdAdd>
          </button>
        ) : null}
      </form>
    </div>
  );
}

export default CreateArea;
