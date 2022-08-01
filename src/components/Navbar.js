import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillShopping } from "react-icons/ai";
import NavMobile from "./NavMobile";
// import { useSelector } from "react-redux";
function Navbar() {
  // const [cartCount, setCart] = useState(0);
  // const cart = useSelector((state) => state.cart);
  return (
    <>
      <header className="bg-white/70 backdrop-blur-sm shadow-md sticky top-0 z-50 hidden md:block">
        <nav className="container justify-between flex  py-5 items-center mx-auto">
          <div className="flex items-center gap-2">
            <img className="w-[10%]" src="./assets/medusa.svg" alt="web" />
            <span className="text-xl font-semibold">Shopping App</span>
          </div>
          <ul className="flex gap-8 text-lg font-semibold items-center">
            <NavLink to="/">
              {({ isActive }) => (
                <div
                  className={`flex flex-col items-center transition ease-in-out duration-300 drop-shadow-lg hover:scale-110 ${
                    isActive
                      ? "text-pink-500 scale-110 -translate-y-[1px]"
                      : "text-gray-400 hover:text-pink-500 hover:-translate-y-[1px]"
                  }`}
                >
                  <AiFillShopping className="text-3xl" />
                  <span className="text-sm transition">Keranjang</span>
                </div>
              )}
            </NavLink>
            <NavLink to="/cart">
              {({ isActive }) => (
                <div
                  className={`flex flex-col items-center transition ease-in-out duration-300 drop-shadow-lg hover:scale-110 ${
                    isActive
                      ? "text-pink-500 scale-110 -translate-y-[1px]"
                      : "text-gray-400 hover:text-pink-500 hover:-translate-y-[1px]"
                  }`}
                >
                  <FaShoppingCart className={`text-3xl `} />
                  <span className="text-sm transition">Keranjang</span>
                </div>
              )}
            </NavLink>
          </ul>
        </nav>
      </header>
      <NavMobile />
    </>
  );
}

export default Navbar;
