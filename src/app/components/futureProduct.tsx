import Image from 'next/image'
import React from 'react'
import Chairw  from '../../../public/images/Chairw.png'
import Chairwe  from '../../../public/images/Chairwe.png'
import Chair  from '../../../public/images/Chair.png'
import Chirp  from '../../../public/images/Chirp.png'
import { CiShoppingCart } from "react-icons/ci";
const FutureProduct = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container py-10 mx-auto max-w-[1200px] ">
    <div className="flex flex-wrap -m-4">
    <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={Chairwe}
            alt="blog"
          />
          <div className="p-6">
           
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Library Stool Chair
            </h1>
          <div className='flex items-center justify-between'>
          <div>$526</div>
          <div><CiShoppingCart className='bg-[#029FAE] text-white size-8'/></div>
          </div>
          </div>
        </div>
      </div>

      <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={Chirp}
            alt="blog"
          />
          <div className="p-6">
           
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Library Stool Chair
            </h1>
          <div className='flex items-center justify-between'>
          <div>$526</div>
          <div><CiShoppingCart className=' size-8'/></div>
          </div>
          </div>
        </div>
      </div>

      <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={Chair}
            alt="blog"
          />
          <div className="p-6">
           
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Library Stool Chair
            </h1>
          <div className='flex items-center justify-between'>
          <div>$526</div>
          <div><CiShoppingCart className=' size-8'/></div>
          </div>
          </div>
        </div>
      </div>

      <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={Chairw}
            alt="blog"
          />
          <div className="p-6">
           
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Library Stool Chair
            </h1>
          <div className='flex items-center justify-between'>
          <div>$526</div>
          <div><CiShoppingCart className=' size-8'/></div>
          </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

    </div>
  )
}

export default FutureProduct
