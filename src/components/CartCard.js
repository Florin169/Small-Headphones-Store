import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/features/cartSlice";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center my-5">
      <img
        src={item?.image}
        alt="product"
        className="w-32 h-32 object-cover rounded-2xl"
      />
      <div className="w-[30%]">
        <h1 className="font-bold">{item?.name}</h1>
        <p className="font-bold text-red-500">{item?.price} $</p>
      </div>
      <AiFillDelete
        className="text-2xl hover:text-red-500 cursor-pointer"
        onClick={() => dispatch(removeItem(item))}
      />
    </div>
  );
};

export default CartCard;
