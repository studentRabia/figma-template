import React from "react";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";

// Example product data
const products = [
  {
    id: 1,
    title: "Library Stool Chair",
    price: "$20",
    image: "/images/Chairwe.png",
    tag: "New",
  },
  {
    id: 2,
    title: "Library Stool Chair",
    price: "$20",
    oldPrice: "$30",
    image: "/images/Chirp.png",
    tag: "Sale",
  },
  {
    id: 3,
    title: "Library Stool Chair",
    price: "$20",
    image: "/images/Chair.png",
  },
  {
    id: 4,
    title: "Library Stool Chair",
    price: "$20",
    image: "/images/Chairw.png",
  },
  {
    id: 5,
    title: "Library Stool Chair",
    price: "$20",
    tag: "New",
    image: "/images/WheelCh.png",
  },
  {
    id: 6,
    title: "Library Stool Chair",
    price: "$20",
    oldPrice: "$30",
    tag: "Sale",
    image: "/images/Chairg.png",
  },
  {
    id: 7,
    title: "Library Stool Chair",
    price: "$20",
    image: "/images/Chairb.png",
  },
  {
    id: 8,
    title: "Library Stool Chair",
    price: "$20",
    image: "/images/Chairwe.png",
  },
];

const Products = () => {
  return (
    <section className="pb-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white hover:shadow-lg overflow-hidden rounded-lg transition duration-300"
            >
              {/* Product Image */}
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={400}
                  className="w-full h-60 object-fill object-center "
                />
                {product.tag && (
                  <span
                    className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold text-white rounded ${
                      product.tag === "New" ? "bg-green-500" : "bg-orange-500"
                    }`}
                  >
                    {product.tag}
                  </span>
                )}
              </div>
              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-700 mb-1">
                  {product.title}
                </h3>
                <div className="flex items-center gap-1">
                  <p className="text-lg font-semibold text-gray-900">
                    {product.price}
                  </p>
                  {product.oldPrice && (
                    <p className="text-sm line-through text-gray-400">
                      {product.oldPrice}
                    </p>
                  )}
                </div>
              </div>
              {/* Add to Cart Button */}
              <div className="flex justify-end p-4">
                <button
                  title="Add to cart"
                  className="flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1 rounded hover:bg-teal-500 hover:text-white transition duration-300"
                >
                  <CiShoppingCart />
                  <span className="text-sm">Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
