import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between px-6 py-3 relative bg-white shadow-md flex-wrap">
       
        <div className="flex items-center gap-2">
          <img className="w-8" src="/src/assets/header.png" alt="logo" />
          <h1 className="font-bold text-lg">Health Ways</h1>
        </div>

     
        <button
          className="md:hidden text-2xl text-blue-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

       
        <div
          className={`${
            menuOpen
              ? "flex flex-col w-full mt-4 space-y-3 md:space-y-0 md:flex-row md:mt-0 md:w-auto"
              : "hidden md:flex"
          } absolute md:static left-0 md:left-auto top-16 md:top-auto bg-white md:bg-transparent md:justify-center md:gap-6 font-semibold z-40 px-6 md:px-0 shadow-md md:shadow-none`}
        >
          <a className="text-blue-800 hover:text-blue-600" href="#">
            Home
          </a>
          <a className="hover:text-blue-600" href="#">
            About Us
          </a>
          <a className="hover:text-blue-600" href="#">
            Department
          </a>
          <a className="hover:text-blue-600" href="#">
            Doctor
          </a>
          <a className="hover:text-blue-600" href="#">
            Appointment
          </a>
        </div>

       
        <div className="hidden md:block">
          <button className="border px-4 py-2 rounded-full hover:bg-blue-500 transition">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}
