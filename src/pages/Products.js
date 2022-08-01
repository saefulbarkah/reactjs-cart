import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { IoLogoUsd } from "react-icons/io";
import { AiFillStar, AiOutlineLoading3Quarters } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import LoaderProduct from "../components/LoaderProduct";

function Products({ title }) {
  //List State
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // fetching data from API
  const getAllProducts = () => {
    setLoading(true);
    const base_url = "https://fakestoreapi.com/products";
    axios.get(base_url).then(function (res) {
      setProducts(res.data);
      setLoading(false);
    });
  };

  // addCart
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    navigate("/cart");
  };

  useEffect(() => {
    getAllProducts();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  useEffect(() => {
    document.title = title;
  });
  return (
    <>
      <section className="overflow-hidden py-10">
        <h2
          className="font-semibold text-3xl text-center py-5"
          data-aos="fade-up"
        >
          Produk
        </h2>
        {loading === true && (
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div
              className="card shadow-xl rounded-3xl w-full h-[397px]"
              data-aos="fade-up"
            >
              <LoaderProduct />
            </div>
            <div
              className="card shadow-xl rounded-3xl w-full h-[397px]"
              data-aos="fade-up"
            >
              <LoaderProduct />
            </div>
            <div
              className="card shadow-xl rounded-3xl w-full h-[397px]"
              data-aos="fade-up"
            >
              <LoaderProduct />
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {loading === false &&
            products.map((item, i) => (
              <div
                className="card shadow-xl rounded-3xl flex flex-col justify-between"
                key={i}
                data-aos="fade-in"
              >
                <div className="card-title flex justify-center items-center py-10 border-b h-[250px]">
                  <img
                    src={item.image}
                    alt=""
                    className="w-4/12"
                    data-aos="fade-zoom-in"
                  />
                </div>
                <div className="card-body flex flex-col justify-center items-center py-2 px-5 text-center text-ellipsis">
                  <span className="text-lg mb-5">{item.title}</span>
                </div>
                <div className="card-body flex flex-col justify-center items-center  text-center text-ellipsis">
                  <span className="text-md flex items-center font-bold">
                    <IoLogoUsd />
                    {item.price}
                  </span>
                </div>
                <div className="card-footer py-4 flex flex-col justify-start items-center">
                  <button
                    className="flex shadow-lg items-center gap-2 btn bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to cart
                    <BsFillCartFill />
                  </button>
                </div>
                <div className="card-footer py-5 flex relative border-t justify-end px-5">
                  <div className="absolute bottom-0 top-0 flex items-center gap-1">
                    <AiFillStar className="text-yellow-500" />
                    {item.rating.rate}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default Products;
