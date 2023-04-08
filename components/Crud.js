"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Crud = ({ done, id }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleDelete = async () => {
    const data = await fetch(
      `http://127.0.0.1:8090/api/collections/notes/records/${id}`,
      {
        method: "DELETE",
      }
    );
    router.push(pathname);
  };

  const handleDone = async () => {
    const data = await fetch(
      `http://127.0.0.1:8090/api/collections/notes/records/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          done: !done,
        }),
      }
    );

    router.push(pathname);
  };

  return (
    <div className="flex justify-between items-center">
      <div>
        <input onChange={handleDone} checked={done} type="checkbox" />
        <span className="ml-2">Done</span>
      </div>
      <div>
        <Link href={`/edit?id=${id}`}>Edit</Link>
        <span className="mx-2">|</span>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Crud;
