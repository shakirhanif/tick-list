import React from "react";
import { AiFillDelete } from "react-icons/ai";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className=" float-left m-4">
      <div className="stickyNote bg-white relative">
        <div className="stickyTitle">{props.title}</div>
        <div className=" stickyContent">{props.content}</div>
        <div className=" absolute right-0 -bottom-1">
          <button>
            <AiFillDelete onClick={handleClick} size={25}></AiFillDelete>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Note;
