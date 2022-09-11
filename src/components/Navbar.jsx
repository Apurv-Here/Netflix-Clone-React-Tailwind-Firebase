import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <h1 className="text-4xl text-red-600 Netflix-logo-font">NETFLIX</h1>
      <div>
        <button className="pr-4 ">Sign In</button>
        <button className="bg-red-600 px-6 py-2 rounded cursor-pointer">Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
