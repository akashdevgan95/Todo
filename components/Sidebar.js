import React from "react";
import Link from "next/link";

const getData = async () => {
  const data = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records",
    { cache: "no-cache" }
  );
  const response = await data.json();
  return response;
};

const Sidebar = async () => {
  const notes = await getData();
  const noteWithCategoryCount = {};

  notes?.items.forEach((note) => {
    note.tags.forEach((tag) => {
      if (noteWithCategoryCount[tag]) {
        noteWithCategoryCount[tag] += 1;
      } else {
        noteWithCategoryCount[tag] = 1;
      }
    });
  });

  return (
    <aside className="bg-gray-100 box-border h-screen">
      <ul>
        {Object.keys(noteWithCategoryCount).map((tag, index) => {
          return (
            <li className="px-5 py-3 border-b capitalize" key={index}>
              <Link prefetch={false} href={`/${tag}`}>
                {tag} ({noteWithCategoryCount[tag]})
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
