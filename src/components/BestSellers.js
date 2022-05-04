import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/features/productsSlice";
import ProductCard from "./ProductCard";

const BestSellers = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  console.log(products[10]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="mt-10">
      <h1 className="text-center font-bold text-3xl ">Best Seller Products</h1>
      <div className="flex flex-wrap space-x-4 my-10">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
