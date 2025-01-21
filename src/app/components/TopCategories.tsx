"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

// TypeScript interface to define the data structure
interface Category {
  _id: string;
  title: string;
  products: number;
  imageUrl: string;  // Adjusted for the query result
}

const TopCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Asynchronously fetch data inside useEffect
    const fetchData = async () => {
      const query = `*[_type == "categories"]{
        _id,
        title,
        products,
        "imageUrl": image.asset->url
      }`;

      try {
        const data: Category[] = await client.fetch(query);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run once on mount

  if (loading) return <div>Loading...</div>;  // Show loading state

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category._id}
              className="relative bg-white rounded-lg overflow-hidden hover:shadow-lg transition  hover:translate-x-1 hover:transition-all shadow-sm "
            >
              <Image
                src={category.imageUrl}  // Accessing imageUrl from the query
                alt={category.title}
                width={500}  // Specified width for better performance
                height={424}  // Specified height to maintain aspect ratio
                className="w-full h-[424px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <h3 className="text-lg font-bold">{category.title}</h3>
                <p className="text-sm">{category.products} Products</p>  {/* Displaying number of products */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
