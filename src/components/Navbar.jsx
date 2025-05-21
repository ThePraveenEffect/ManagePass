import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-amber-950 h-[8vh] text-white text-4xl px-9 font-bold flex items-center justify-between">
      <h1>ManagePass</h1>
      <div className="flex gap-9">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
