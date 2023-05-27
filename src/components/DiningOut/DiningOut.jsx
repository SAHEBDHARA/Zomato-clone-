import React from 'react'
import './Diningout.css'
import allFood from '../../../Demo/fooditems'
import FoodCard from '../FoodCard'
import { useState } from 'react'



const DiningOut = () => {

  const [city, setCity] = useState('Kolkata');

  return (
    <>
    <h1 className='ms-32 my-8'>Collection</h1>
    <h1 className="font-bold text-2xl ms-32 my-8">Food Collection in {city}</h1>
    <div className="bg-red-500">
       <div className='flex flex-wrap justify-center gap-5 mx-auto bg-green-100'>
        {allFood.map((food, i)=>{
          return(
            <FoodCard key={i} food={food}/>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default DiningOut