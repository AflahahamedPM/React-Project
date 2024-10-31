import React from 'react'
import { cardDetails } from '../constants/CardDetails'
import CardComponent from './CardComponent'

const FeaturedDestinations = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-20">
        <h1 className="font-goldenHopes font-semibold text-4xl text-myOrange">
          Featured tours
        </h1>
      </div>
      <div className="flex justify-center items-center mb-10">
        <h1 className="text-6xl font-atypKido font-bold text-myBlue">
          Most Popular Tours
        </h1>
      </div>
      <div className='flex max-sm:grid max-sm:grid-cols-1 gap-6 w-10/12 mx-auto '>
          {
            cardDetails.map((item)=>(
              <CardComponent 
                key={item.id}
                title={item.title}
                imageUrl={item.imageUrl}
                price={item.price}
                place={item.place}
                stay={item.stay}
              />
            ))
          }
      </div>
    </>
  )
}

export default FeaturedDestinations