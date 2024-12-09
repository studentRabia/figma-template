import React from 'react'
import FutureProduct from '../components/futureProduct'
import ProductCard from '../components/ProductCardProps'
import Titlebar from '../components/titlebar'

const page = () => {
  return (
    <div>
        <ProductCard
      title="Library Stool Chair"
      price="$20.00 USD"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim."
      image="/images/Chirp.png"
    />
    <div className='mt-24'><Titlebar title='Featured Products'/></div>
      <FutureProduct/>
    </div>
  )
}

export default page
