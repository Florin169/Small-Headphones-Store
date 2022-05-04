import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="max-w-[250px] max-h-[300px]  my-10 hover:scale-110 transition ease-in-out duration-500"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img
        src={product.image}
        alt=""
        className="w-full h-full object-cover rounded-2xl"
      />
      <h4 className="font-bold my-1 text-blue-200">{product.name}</h4>
      <p className="font-bold">{product.price} $</p>
    </div>
  );
};

export default ProductCard;
