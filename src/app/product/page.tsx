
import Products from '../components/products'
import React from 'react'
import Newsletter from '../components/Newsletter'
import FutureProduct from '../components/futureProduct'


const page = () => {
  return (
    <div >
     
      <FutureProduct/>
      <Products/>
     <Newsletter/>
    </div>
  )
}

export default page
