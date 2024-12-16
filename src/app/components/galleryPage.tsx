import Image from "next/image";

const GalleryPage = () => {
  const products = [
    {
      id: 1,
      name: "The Poplar suede sofa",
      price: "$99.00",
      image: "/images/Large.png",
    },
    {
      id: 2,
      name: "The Dandy chair",
      price: "$99.00",
      image: "/images/Photo.png",
    },
    {
      id: 3,
      name: "The Dandy chair",
      price: "$99.00",
      image: "/images/Photoone.png",
    },
  ];

  return (
    <div className="flex justify-center px-[17%] bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative text-start transition-transform duration-300 transform hover:scale-x-150 hover:z-30 "
          >
            {/* Image Container */}
            <div className="w-full h-[300px] overflow-hidden rounded-md mb-4">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={300}
                className="w-full h-full object-fill"
              />
            </div>
            {/* Product Details */}
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
