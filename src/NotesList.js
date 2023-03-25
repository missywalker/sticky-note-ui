import React from "react";
import Note from "./Note";

const NotesList = (props) => {
  const seacrchMatches = (note) => note.doesMatchSearch;
  const searchedResults = props.notes.filter(seacrchMatches);

  const renderNote = (note) => (
    <Note
      removeNote={props.removeNote}
      onType={props.onType}
      note={note}
      key={note.id}
    />
  );
  const noteElements = searchedResults.map(renderNote);
  return <ul className="notes-list">{noteElements}</ul>;
};
export default NotesList;
