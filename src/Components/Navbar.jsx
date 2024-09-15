import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Navlinks from "./Navlinks.jsx";
import Button from "./Button.jsx";
import "./Navbar.css";
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
      <nav className="bg-slate-500">
        <div className="flex font-medium justify-evenly">
          <div className="z-50 p-5 md:w-auto w-full flex justify-between">
            <div></div>
            <div className="md:hidden" onClick={() => setOpen(!open)}>
              {open ? (
                <i
                  className="fa-solid fa-xmark text-3xl"
                  style={{ color: "white" }}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-bars text-3xl"
                  style={{ color: "white" }}
                ></i>
              )}
            </div>
          </div>

          <ul className="md:flex hidden gap-8 font-[Poppins]">
            <li>
              <Link to="/" className=" px-3 py-7 inline-block">
                Home
              </Link>
            </li>
            <Navlinks />
          </ul>
          <div className="md:block hidden">
            <Button />
          </div>

          {/* Mobile nav */}
          <ul
            className={`
        md:hidden bg-slate-500 fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
          >
            <li>
              <Link to="/" className=" px-3 inline-block">
                Home
              </Link>
            </li>
            <Navlinks />
            <div className="py-4">
              <Button />
            </div>
          </ul>
        </div>
      </nav>
    </BrowserRouter>
  );
}

export default Navbar;
