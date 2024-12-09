import React from "react";
import Image from "next/image";

// Example images (replace these with actual category images)
import wingChair from "../../../public/images/Moving.png";
import woodenChair from "../../../public/images/Stool.png";
import deskChair from "../../../public/images/WheelCh.png";

const TopCategories = () => {
  const categories = [
    {
      title: "Wing Chair",
      products: "3,584 Products",
      image: wingChair,
    },
    {
      title: "Wooden Chair",
      products: "157 Products",
      image: woodenChair,
    },
    {
      title: "Desk Chair",
      products: "154 Products",
      image: deskChair,
    },
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <Image
                src={category.image}
                alt={category.title}
                className="w-full h-[424px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <h3 className="text-lg font-bold">{category.title}</h3>
                <p className="text-sm">{category.products}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
