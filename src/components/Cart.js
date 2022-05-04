import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleHide } from "../redux/features/cartSlice";
import CartCard from "./CartCard";

const Cart = () => {
  const dispatch = useDispatch();
  const toggleCart = useSelector((state) => state.cart.cartToggle);
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className={`${toggleCart ? "fixed" : "hidden"}  inset-0 bg-black/60`}>
      <div className="fixed right-0 top-0 bg-[#181A1B] w-full h-screen lg:w-[33%] p-5">
        <div
          className="w-12 h-12 rounded-full hover:bg-gray-500 flex justify-center items-center text-3xl cursor-pointer transition duration-300"
          onClick={() => dispatch(toggleHide())}
        >
          <MdKeyboardArrowLeft />
        </div>
        <div>
          {cartItems.map((item) => (
            <CartCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
