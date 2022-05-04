import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleShow } from "../redux/features/cartSlice";

const Nav = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.cartItems);

  return (
    <div className="flex justify-between items-center px-10 h-14">
      <Link to="/">
        <h1>Store</h1>
      </Link>
      <BiShoppingBag
        className="w-7 h-7 relative cursor-pointer"
        onClick={() => dispatch(toggleShow())}
      />
      <div className="absolute right-8 top-3 w-5 h-5 rounded-full bg-red-400 flex items-center justify-center">
        <span>{items?.length}</span>
      </div>
    </div>
  );
};

export default Nav;
