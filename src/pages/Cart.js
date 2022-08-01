import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux/es/exports";
import AOS from "aos";
import "aos/dist/aos.css";
import { clearCart } from "../features/cartSlice";
function Cart({ title }) {
  const cart = useSelector((state) => state.cart);
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClear = () => {
    dispatch(clearCart());
    console.log("HEHE");
  };

  const handleToProduct = () => {
    setLoading(true);
    setCounter(3);
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  console.log(cart.cartItem);

  useEffect(() => {
    counter > 0 &&
      setTimeout(() => {
        console.log("Interval triggered");
        setCounter(counter - 1);
      }, 1000);
    // eslint-disable-next-line
  });

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  useEffect(() => {
    document.title = title;
  });
  return (
    <>
      <section
        className="md:h-[500px] h-[450px] flex flex-col justify-center"
        data-aos="fade-up"
      >
        <h2 className="font-semibold text-3xl text-center py-5">Keranjang</h2>
        {cart.cartItem.length === 0 ? (
          <div className="card-empty flex flex-col justify-center items-center">
            <p className="text-2xl">Your cart is currently empty</p>
            {loading === true && (
              <p className="py-5 px-10 text-center" data-aos="fade-in">
                Anda akan di arahkan ke halaman product selama
                <span className="font-bold"> {counter}</span> detik
              </p>
            )}
            <div className="cart-shopping py-5">
              <div onClick={handleToProduct}>
                <button className="bg-blue-600 py-3 shadow-xl rounded-lg px-5 flex text-white gap-2 items-center font-semibold hover:bg-blue-700 transition">
                  {loading ? (
                    <AiOutlineLoading3Quarters className="animate-spin text-xl font-bold transition-all" />
                  ) : (
                    <FaShoppingCart />
                  )}
                  Continue shopping
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="container mx-auto px-4 sm:px-8">
            <div className="">
              <div className="sm-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead className="bg-slate-600 text-white text-left">
                      <tr>
                        <th className="px-5 py-3 border-b border-gray-300">
                          No
                        </th>
                        <th className="px-5 py-3 border-b border-gray-300">
                          Nama Produk
                        </th>
                        <th className="px-5 py-3 border-b border-gray-300">
                          Harga
                        </th>
                        <th className="px-5 py-3 border-b border-gray-300">
                          Jumlah
                        </th>
                        <th className="px-5 py-3 border-b border-gray-300">
                          AKSI
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.cartItem.map((item, i) => (
                        <tr key={i}>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            {i + 1}
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm w-5/12">
                            {item.title}
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            {item.price}
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm gap-5 ">
                            <div className="flex gap-5 items-center">
                              <button className="text-white bg-blue-500 rounded-lg px-2 py-2 text-xl">
                                <AiOutlinePlus />
                              </button>
                              {item.cartQuantity}
                              <button className="text-white bg-red-500 rounded-lg px-2 py-2 text-xl">
                                <AiOutlineMinus />
                              </button>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <button className="text-red-500">
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="total py-5 px-10 flex  justify-end gap-5 items-center">
                    <span className="font-bold">Total</span>
                    <span>:</span>
                    <span>250rb</span>
                  </div>
                  <div className="total py-5 px-10 flex items-center  justify-end gap-5">
                    <button className="bg-blue-600 text-white px-10 rounded-lg py-2">
                      Bayar
                    </button>
                    <button
                      className="bg-red-600 text-white px-10 rounded-lg py-2"
                      onClick={() => handleClear()}
                    >
                      Hapus keranjang
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Cart;
