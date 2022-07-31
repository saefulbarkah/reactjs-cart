import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { FcShop } from "react-icons/fc";
function NavMobile() {
  return (
    <>
      <header className="bg-white/70 backdrop-blur-sm shadow-md sticky top-0 z-50 md:hidden flex flex-col">
        <nav className="container flex justify-center py-5 items-center mx-auto gap-2">
          <img
            className="flex items-center gap-5 font-semibold text-lg w-[10%]"
            src="./assets/medusa.svg"
            alt="web"
          />
          <span className="text-2xl font-semibold">Shopping App</span>
        </nav>
      </header>
      <div className="nav-mobile bg-white/50 border-t border-gray-300 rounded-tr-full rounded-tl-full backdrop-blur-sm drop-shadow-xl fixed bottom-0 w-full py-5 z-50 md:hidden flex flex-col">
        <ul className="flex gap-5 text-lg font-semibold items-center justify-around transition-all">
          <NavLink to="/">
            {({ isActive }) => (
              <div
                className={`transition ${
                  isActive ? "border-b-2 border-purple-500 " : ""
                }`}
              >
                <FcShop className="text-4xl" />
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
      </div>
    </>
  );
}

export default NavMobile;
