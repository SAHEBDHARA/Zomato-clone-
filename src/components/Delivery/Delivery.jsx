import React, {useState} from 'react'
import './Delivery.css'
import allFood from '../../../Demo/fooditems'
import FoodCard from '../FoodCard'


const Delivery = () => {
  const [city, setCity] = useState('Kolkata');
  return (
    <>
    <h1 className="font-bold text-2xl">Food Collection in {city}</h1>
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

export default Delivery