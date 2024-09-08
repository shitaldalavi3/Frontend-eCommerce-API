import React, { useState } from "react";
import ProductCard from "./ProductCard"; // Import your existing ProductCard component

const ProductSection = ({ products }) => {
  const [activeTab, setActiveTab] = useState("mostPopular");

  const filteredProducts = () => {
    switch (activeTab) {
      case "bestSeller":
        return products.filter((product) => product.isBestseller);
      case "newArrival":
        return products.filter((product) => product.isNewArrival);
      default:
        return products.filter((product) => product.isPopular);
    }
  };

  return (
    <div className="container mx-auto my-8">
      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setActiveTab("mostPopular")}
          className={`px-4 py-2 font-bold text-sm ${
            activeTab === "mostPopular"
              ? "text-red-500 border-b-2 border-red-500"
              : "text-gray-600"
          }`}
        >
          MOST POPULAR
        </button>
        <button
          onClick={() => setActiveTab("bestSeller")}
          className={`px-4 py-2 mx-4 font-bold text-sm ${
            activeTab === "bestSeller"
              ? "text-red-500 border-b-2 border-red-500"
              : "text-gray-600"
          }`}
        >
          BEST SELLER
        </button>
        <button
          onClick={() => setActiveTab("newArrival")}
          className={`px-4 py-2 font-bold text-sm ${
            activeTab === "newArrival"
              ? "text-red-500 border-b-2 border-red-500"
              : "text-gray-600"
          }`}
        >
          NEW ARRIVAL
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {filteredProducts().map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;