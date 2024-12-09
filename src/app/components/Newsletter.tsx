// components/Newsletter.tsx

import FutureProduct from "./futureProduct";

const Newsletter = () => {
    return (
      <div className="p-6 py-6 rounded md:px-12 md:py-12 lg:py-16 mt-32 bg-indigo-50">
        <div className="flex flex-col items-center justify-between space-y-6 lg:space-y-0 lg:space-x-8">
          {/* Heading Section */}
          <div className="max-w-2xl mb-4 text-center lg:mb-8">
            <h3 className="mb-6 text-3xl font-semibold text-gray-950 lg:text-4xl">
            Or subscribe to the newsletter
            </h3>
            <div className="flex items-center justify-between text-gray-600 mb-6">
                <div>
                    <p>Email address...</p>
                </div>
                <div>SUBMIT</div>
            </div>
            <hr className="mx-[10%] sm:mx-[20%] lg:mx-[1%] my-4 border-t-2 sm:border-t-3 lg:border-t-4 border-black" />

             
             <h3 className="mb-4 mt-10 text-3xl font-semibold text-gray-950 lg:text-4xl">
             Follow products and discounts on Instagram
            </h3>

          </div >
         <div className="flex items-center gap-8">
         <FutureProduct/> <FutureProduct/>
         </div>
        </div>
      </div>
    );
  };
  
  export default Newsletter;
  