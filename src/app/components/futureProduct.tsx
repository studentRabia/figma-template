import Image from 'next/image';
import React from 'react';
import Chairw from '../../../public/images/Chairw.png';
import Chairwe from '../../../public/images/Chairwe.png';
import Chair from '../../../public/images/Chair.png';
import Chirp from '../../../public/images/Chirp.png';
import { CiShoppingCart } from 'react-icons/ci';
// import Titlebar from './titlebar';

const FutureProduct = () => {
  return (
    <div>
      <section className="bg-white body-font">
         {/* <Titlebar title='All Product'/> */}
        <div className="container py-10 mx-auto max-w-[1200px] px-4">
          <div className="flex flex-wrap -m-4">
            {/* Product Cards */}
            {[Chairwe, Chirp, Chair, Chairw].map((image, index) => (
              <div key={index} className="p-4 w-full sm:w-1/2 lg:w-1/4">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    className="lg:h-48 md:h-36 w-full object-fill object-center"
                    src={image}
                    width={300}
                    height={300}
                    alt={`Product ${index + 1}`}
                  />
                    

                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Library Stool Chair
                    </h1>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-semibold">$526</div>
                      <div>
                        <CiShoppingCart className="bg-[#029FAE] text-white p-2 rounded-full w-8 h-8" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FutureProduct;
