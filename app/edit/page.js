import React from "react";

import NoteForm from "@/components/NoteForm";

const Edit = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-3">Edit Note</h1>
      <NoteForm />
    </div>
  );
};

export default Edit;
