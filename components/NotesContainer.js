import React from "react";

import Note from "./Note";

const getData = async (type) => {
  const data = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records?filter=(tags~'${
      type || ""
    }')`,
    {
      cache: "no-cache",
    }
  );
  const response = await data.json();
  return response;
};

const NotesContainer = async ({ type }) => {
  const notes = await getData(type);
  return (
    <div className="grid grid-cols-3 w-full gap-4 p-4 self-start">
      {notes.items.map((note, idx) => {
        return <Note key={idx} {...note} />;
      })}
    </div>
  );
};

export default NotesContainer;
