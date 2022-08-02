import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";
import { useDispatch } from "react-redux/es/exports";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  addQty,
  clearCart,
  decreaseQty,
  removeItem,
} from "../features/cartSlice";
function Cart({ title }) {
  const cart = useSelector((state) => state.cart);
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // clear cart
  const handleClear = () => {
    dispatch(clearCart());
    console.log("HEHE");
  };

  // removing cart
  // addCart
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
    console.log("ID : " + id);
  };

  const handleAddQty = (id) => {
    dispatch(addQty(id));
  };
  const handleDecreaseQty = (id) => {
    dispatch(decreaseQty(id));
  };

  const handleToProduct = () => {
    setLoading(true);
    setCounter(3);
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  // sum qty
  const sumTotal = () => {
    let data = cart.cartItem;
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total +=
        parseFloat(data[i].price).toFixed(2) * parseInt(data[i].cartQuantity);
      console.log(parseFloat(total).toFixed(2));
    }
    return parseFloat(total).toFixed(2);
  };

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
        className="flex-col justify-center lg:py-10 hidden lg:flex"
        data-aos="fade-up"
      >
        {cart.cartItem.length === 0 ? (
          <div className="card-empty flex flex-col justify-center items-center">
            <p className="text-2xl">Keranjang kosong</p>
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
                  Lanjutkan belanja
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="card shadow-lg p-10 rounded-xl">
            <div className="card-top flex justify-between items-center">
              <span className="title font-bold text-xl">Keranjang</span>
              <button
                className="flex drop-shadow-lg text-white bg-red-500 px-5 py-2 rounded-xl gap-3 items-center hover:scale-110 transition ease-in-out duration-300"
                onClick={handleClear}
              >
                <span className="text-sm">Hapus keranjang</span>
                <FaTrash />
              </button>
            </div>
            <div className="grid gap-5 grid-rows-1 py-10">
              {cart.cartItem.map((item, i) => (
                <div className="grid grid-cols-4 py-5" key={i}>
                  <div className="card-body w-3/12">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="flex justify-center flex-col card-body">
                    <span className="font-bold">{item.title}</span>
                  </div>
                  <div className="flex justify-center items-center gap-5 card-body">
                    <button
                      className="bg-gray-400/40 py-3 px-3 rounded-full font-bold"
                      onClick={() => handleDecreaseQty(item.id)}
                    >
                      <AiOutlineMinus />
                    </button>
                    <span>{item.cartQuantity}</span>
                    <button
                      className="bg-gray-400/40 py-3 px-3 rounded-full font-bold"
                      onClick={() => handleAddQty(item.id, item.cartQuantity)}
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                  <div className="flex justify-center items-center flex-col gap-3 card-body">
                    <span className="flex">
                      <MdAttachMoney className="text-2xl" />
                      {item.price}
                    </span>
                    <div className="flex">
                      <button
                        className="flex gap-2 items-center bg-red-400/40 py-2 px-3 rounded-lg text-red-700"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-4 py-5">
              <div className="border-b-2 border-gray-300 col-span-4 mt-10 col-end-6"></div>
            </div>
            <div className="flex justify-end py-10">
              <div className="grid grid-cols-2 gap-14">
                <div className="flex flex-col">
                  <span>Sub total</span>
                  <span>{cart.cartItem.length} items</span>
                </div>
                <div className="flex items-center">
                  <span className="flex">
                    <MdAttachMoney className="text-2xl" />
                    {sumTotal()}
                  </span>
                </div>
                <button className="bg-blue-400/50 text-blue-900 font-bold col-span-2 py-2 rounded-xl hover:bg-blue-500 hover:text-white transition-all ease-in-out duration-300 hover:scale-110">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* mobile */}
      <section
        className="flex-col justify-center py-10 mb-10 flex lg:hidden"
        data-aos="fade-up"
      >
        {cart.cartItem.length === 0 ? (
          <div className="card-empty flex flex-col justify-center items-center">
            <p className="text-2xl">Keranjang kosong</p>
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
                  Lanjutkan belanja
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col px-5">
            <span className="title font-bold text-2xl text-center">
              Keranjang
            </span>
            <div className="grid gap-5 grid-rows-1 py-10">
              {cart.cartItem.map((item, i) => (
                <div
                  className="grid grid-cols-3 shadow-lg rounded-xl py-5"
                  key={i}
                >
                  <div className="flex items-center justify-center">
                    <img src={item.image} className="w-6/12" alt="" />
                  </div>
                  <div className="flex flex-col items-start gap-5">
                    <span className="text-sm">{item.title}</span>
                    <div className="flex items-center gap-3">
                      <button
                        className="bg-gray-400/40 py-2 px-2 rounded-full font-bold"
                        onClick={() => handleDecreaseQty(item.id)}
                      >
                        <AiOutlineMinus />
                      </button>
                      <span>{item.cartQuantity}</span>
                      <button
                        className="bg-gray-400/40 py-2 px-2 rounded-full font-bold "
                        onClick={() => handleAddQty(item.id, item.cartQuantity)}
                      >
                        <AiOutlinePlus />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center relative">
                    <div className="flex">
                      <MdAttachMoney className="text-xl" />
                      <span className="text-md font-bold">{item.price}</span>
                    </div>
                    <div className="absolute -bottom-5 right-0">
                      <button
                        className="flex gap-2 items-center bg-red-400/40 py-2 px-5 rounded-lg text-red-700"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="shadow-lg rouned-xl p-10">
                <div className="flex justify-between py-5">
                  <span>Sub Total</span>
                  <span className="flex">
                    <MdAttachMoney className="text-lg" />
                    {sumTotal()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Items</span>
                  <span>{cart.cartItem.length}</span>
                </div>
                <div className="flex flex-col items-center justify-center py-5 gap-5">
                  <button className="bg-blue-400/50 text-blue-900 font-bold col-span-2 py-3 rounded-xl hover:bg-blue-500 hover:text-white transition-all ease-in-out duration-300 w-full hover:scale-110">
                    Checkout
                  </button>
                  <button
                    className="bg-red-400/50 text-red-900 font-bold col-span-2 py-3 rounded-xl hover:bg-red-500 hover:text-white transition-all ease-in-out duration-300 w-full hover:scale-110"
                    onClick={handleClear}
                  >
                    Hapus keranjang
                  </button>
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
