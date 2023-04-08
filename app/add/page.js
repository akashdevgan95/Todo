import React from "react";

import NoteForm from "@/components/NoteForm";

const ADD = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-3">Add Note</h1>
      <NoteForm />
    </div>
  );
};

export default ADD;
