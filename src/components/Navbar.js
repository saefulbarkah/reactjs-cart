import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
function Navbar() {
  return (
    <>
      <header className="bg-white/50 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <nav className="container flex justify-between py-5 items-center mx-auto">
          <div className="logo">
            <span className="font-semibold text-lg">SHOPPING CART</span>
          </div>
          <ul className="flex gap-5 text-lg font-semibold items-center">
            <NavLink to="/">Products</NavLink>
            <NavLink to="/cart">
              <div className="bg-yellow-500 px-5 py-2 rounded-lg flex items-center gap-3">
                <span>0</span>
                <BsFillCartFill />
              </div>
            </NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
