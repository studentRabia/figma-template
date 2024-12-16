import Image from "next/image";

const NewsletterSection = () => {
  return (
    <section className="bg-gray-100 py-10 px-4 lg:px-8">
      {/* Newsletter */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold my-7">Or Subscribe To The Newsletter</h2>
        <div className="flex justify-center items-center w-full space-x-5">
          <input
            type="email"
            placeholder="Email Address..."
            className="border-b border-black bg-transparent text-[#1E2832] w-full max-w-lg px-2 py-1 focus:outline-none"
          />
          <button
            type="submit"
            className="border-b border-black ml-2 text-sm font-medium uppercase text-[#1E2832] hover:text-black px-2 py-1"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Instagram Section */}
      <div className="text-center">
        <h3 className="text-3xl font-bold my-14">
          Follow Products And Discounts On Instagram
        </h3>

        {/* Grid Container with Padding */}
        <div className="mx-auto px-8 sm:px-[10%] lg:px-[16%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {[
            "/images/Stool.png",
            "/images/WheelCh.png",
            "/images/Chirp.png",
            "/images/Chairwe.png",
            "/images/Chair.png",
            "/images/Moving.png",
          ].map((src, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={src}
                alt={`Chair ${index + 1}`}
                width={400}
                height={400}
                className="w-full h-auto object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
