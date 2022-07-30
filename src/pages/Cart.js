import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
function Cart() {
  const cart = useSelector((state) => state.cart);
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();

  const handleToProduct = () => {
    setLoading(true);
    setCounter(5);
    setTimeout(() => {
      navigate("/");
    }, 5000);
  };

  useEffect(() => {
    counter > 0 &&
      setTimeout(() => {
        console.log("Interval triggered");
        setCounter(counter - 1);
      }, 1000);
    // eslint-disable-next-line
  });
  return (
    <>
      <section>
        <h2 className="font-semibold text-3xl text-center">Shopping Cart</h2>
        {cart.cartItem.length === 0 ? (
          <div className="card-empty flex flex-col justify-center items-center py-24">
            <p className="text-2xl">Your cart is currently empty</p>
            {loading === true && (
              <p className="py-10">
                Anda akan di arahkan ke halaman product selama {counter} detik
              </p>
            )}
            <div className="cart-shopping py-10">
              <div onClick={handleToProduct}>
                <div className="bg-blue-600 py-3 shadow-xl rounded-lg px-5 flex text-white gap-2 items-center font-semibold hover:bg-blue-700 transition-all">
                  {loading ? (
                    <AiOutlineLoading3Quarters className="animate-spin text-xl font-bold transition-all" />
                  ) : (
                    <FaShoppingCart />
                  )}
                  <button>Continue shopping</button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="">Cart avaiable</div>
        )}
      </section>
    </>
  );
}

export default Cart;
