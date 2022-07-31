import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { FcShop } from "react-icons/fc";
import NavMobile from "./NavMobile";
function Navbar() {
  return (
    <>
      <header className="bg-white/70 backdrop-blur-sm shadow-md sticky top-0 z-50 hidden md:block">
        <nav className="container justify-between flex  py-5 items-center mx-auto">
          <div className="flex items-center gap-2">
            <img className="w-[10%]" src="./assets/medusa.svg" alt="web" />
            <span className="text-xl font-semibold">Shopping App</span>
          </div>
          <ul className="flex gap-5 text-lg font-semibold items-center">
            <NavLink to="/">
              {({ isActive }) => (
                <div
                  className={`transition ${
                    isActive ? "border-b-2 border-purple-500 " : ""
                  }`}
                >
                  <FcShop className="text-3xl" />
                </div>
              )}
            </NavLink>
            <NavLink to="/cart">
              <div className="bg-orange-500/30 border border-orange-500 text-orange-700  px-2 py-2 rounded-lg flex items-center gap-1">
                <span>100</span>
                <BsFillCartFill className="" />
              </div>
            </NavLink>
          </ul>
        </nav>
      </header>
      <NavMobile />
    </>
  );
}

export default Navbar;
