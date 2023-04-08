import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between py-5 bg-gray-200 px-10">
      <h1 className="text-gray-700 text-2xl">
        <Link prefetch={false} href="/">
          <a>todo</a>
        </Link>
      </h1>
      <Link className="text-gray-700 text-2xl" href="/add">
        <a>+</a>
      </Link>
    </header>
  );
};

export default Header;
