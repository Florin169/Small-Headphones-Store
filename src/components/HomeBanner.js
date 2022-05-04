import React from "react";

const HomeBanner = () => {
  return (
    <div className="w-full h-[500px] bg-red-200 rounded-2xl p-10">
      <h4 className="text-md lg:text-2xl font-bold text-gray-100">
        Beast Solo
      </h4>
      <h2 className="text-2xl lg:text-6xl font-bold text-gray-100">Wireless</h2>
      <h1 className="text-4xl lg:text-9xl font-bold text-gray-100">
        HEADPHONES
      </h1>
      <button className="mt-10 bg-red-500 px-20 py-2 rounded-md font-bold">
        Shop
      </button>
    </div>
  );
};

export default HomeBanner;
