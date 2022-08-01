import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillShopping } from "react-icons/ai";
import { useSelector } from "react-redux";
function NavMobile() {
  const [cartCount, setCart] = useState(0);
  const cart = useSelector((state) => state.cart);
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
                className={`flex items-center flex-col transition ease-in-out duration-300 drop-shadow-lg hover:scale-110 active:bg-pink-500/20 rounded-lg px-2 ${
                  isActive
                    ? "text-pink-500 scale-110 -translate-y-1"
                    : "text-gray-400 "
                }`}
              >
                <AiFillShopping className="text-4xl" />
                {isActive && <span className="text-sm transition">Produk</span>}
              </div>
            )}
          </NavLink>
          <NavLink to="/cart">
            {({ isActive }) => (
              <div
                className={`flex items-center flex-col justify-center transition ease-in-out duration-150 drop-shadow-lg active:bg-pink-500/20 rounded-lg px-2 ${
                  isActive
                    ? "text-pink-500 scale-100 -translate-y-1"
                    : "text-gray-400"
                }`}
              >
                <FaShoppingCart className={`text-4xl `} />
                {isActive && (
                  <span className="text-sm transition">Keranjang</span>
                )}
              </div>
            )}
          </NavLink>
        </ul>
      </div>
    </>
  );
}

export default NavMobile;
