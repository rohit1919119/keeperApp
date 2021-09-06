import React from 'react';

function Note(props){
    return (
        <div className="note">
            <p className="noteTitle">{props.title}</p>
            <p className="noteContent">{props.content}</p>
        </div>
    )
}
export default Note;