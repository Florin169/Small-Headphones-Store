import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BiMinus, BiPlus } from "react-icons/bi";
import { increase, decrease } from "../redux/features/productsSlice";
import Cart from "../components/Cart";
import { cartItems } from "../redux/features/cartSlice";

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const quantity = useSelector((state) => state.products.quantity);
  const product = products[id];

  return (
    <div className="w-[80%] m-auto relative">
      <div className="w-full lg:flex">
        <div className="md:w-[400px] md:h-[405px] w-[320px] h-[325px]">
          <img
            src={product?.image}
            alt=""
            className="rounded-2xl w-full h-full object-cover"
          />
        </div>
        <div className="lg:w-[60%] lg:ml-10 mt-10">
          <h1 className="mb-10 text-3xl">{product?.name}</h1>
          <span className="font-bold">Details:</span>
          <p className="my-5">{product?.desc}</p>
          <p className="my-5 font-bold text-red-500 text-xl">
            {product?.price} $
          </p>
          <div className="flex items-center space-x-3">
            <span className="text-xl">Quantity:</span>
            <div className="space-x-4 border border-gray-500 rounded-md px-3 py-1 flex justify-center items-center">
              <BiMinus
                className="text-xl cursor-pointer"
                onClick={() => dispatch(decrease())}
              />
              <span className="text-xl font-bold">{quantity}</span>
              <BiPlus
                className="text-xl cursor-pointer"
                onClick={() => dispatch(increase())}
              />
            </div>
          </div>
          <div className="lg:flex space-x-4 my-10">
            <button
              className="px-8 md:px-14 py-3 border border-red-500 font-bold text-red-500 "
              onClick={() => dispatch(cartItems(product))}
            >
              Add to cart
            </button>
            <button className="px-8 md:px-14 py-3 bg-red-500 text-white font-bold hover:bg-red-700 transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <Cart />
    </div>
  );
};

export default ProductPage;
