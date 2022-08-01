import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function App() {
  // const url = useLocation();
  // useEffect(() => {
  //   if (url.pathname === "/") {
  //     document.title = "Product";
  //   }
  //   if (url.pathname === "/cart") {
  //     document.title = "Cart";
  //   }
  // });
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <div className="main container mx-auto mb-10">
        <Routes>
          <Route exact path="/" element={<Products title="Product" />}></Route>
          <Route exact path="/cart" element={<Cart title="Cart" />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
