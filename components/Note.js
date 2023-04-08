import React from "react";
import Crud from "./Crud";

const Note = ({ title, description, done, tags, id }) => {
  return (
    <div className="bg-amber-200 p-5 rounded-sm self-start">
      <h2
        className={`font-bold text-2xl text-gray-700 ${done && "line-through"}`}
      >
        {title}
      </h2>
      <p className={`my-3 ${done && "line-through"}`}>{description}</p>
      <div>
        {tags.map((tag, idx) => {
          return (
            <span className="bg-gray-700 mr-2 text-white py-1 px-1" key={idx}>
              {tag}
            </span>
          );
        })}
      </div>
      <div className="mt-3">
        <Crud done={done} id={id} />
      </div>
    </div>
  );
};

export default Note;
