import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <p className="noteTitle">{props.title}</p>
      <p className="noteContent">{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}
export default Note;
