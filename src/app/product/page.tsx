
import Products from '../components/products'
import React from 'react'
import Newsletter from '../components/Newsletter'
import FutureProduct from '../components/futureProduct'

const page = () => {
  return (
    <div className='bg-gray-50'>
      <FutureProduct/>
      <Products/>
     <Newsletter/>
    </div>
  )
}

export default page
