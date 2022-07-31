import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { FcShop } from "react-icons/fc";
function Navbar() {
  return (
    <>
      <header className="bg-white/50 backdrop-blur-sm shadow-md sticky top-0 z-50">
        <nav className="container flex justify-between  py-5 items-center mx-auto">
          <div className="logo">
            <img
              className="flex items-center gap-5 font-semibold text-lg w-[15%]"
              src="./assets/medusa.svg"
            />
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
              <div className="bg-purple-500/30 border border-purple-500 px-5 py-2 rounded-lg flex items-center gap-3">
                <span>0</span>
                <BsFillCartFill className="" />
              </div>
            </NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
