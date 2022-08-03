import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdModeNight, MdWbSunny } from "react-icons/md";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme")
      ? JSON.parse(localStorage.getItem("theme"))
      : localStorage.setItem("theme", JSON.stringify("light"))
  );
  const mode = theme === "light" ? "dark" : "light";

  const handleTheme = () => {
    setTheme(mode);
    localStorage.setItem("theme", JSON.stringify(mode));
    console.log(theme);
  };
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add(theme);
    root.classList.remove(mode);
    document.body.classList.add(
      "transition",
      "ease-in-out",
      "duration-150",
      "text-slate-600",
      "dark:bg-slate-900",
      "dark:text-slate-300",
      "bg-white"
    );
  }, [mode, theme]);
  console.log(theme);
  return (
    <div className="App transition">
      <ToastContainer />
      <Navbar />
      <div className="main md:container md:mx-auto mb-10">
        <Routes>
          <Route exact path="/" element={<Products title="Product" />}></Route>
          <Route exact path="/cart" element={<Cart title="Cart" />}></Route>
        </Routes>

        {/* toggle theme mode */}
        <button
          className="lg:bottom-5 lg:right-10 bottom-[8%] right-[45%] bg-slate-800 text-white py-3 px-3 rounded-xl shadow-2xl z-50  fixed lg:block transition duration-300 dark:bg-white dark:text-slate-800"
          onClick={() => handleTheme()}
        >
          {theme === "light" ? (
            <MdModeNight className="text-xl transition-opacity" />
          ) : (
            <MdWbSunny className="text-xl transition-opacity" />
          )}
        </button>
      </div>
    </div>
  );
}

export default App;
