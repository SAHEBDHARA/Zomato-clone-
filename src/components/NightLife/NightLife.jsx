import React from 'react'
import "./Night.css"
import allFood from '../../../Demo/fooditems'
import FoodCard from '../FoodCard'
import { useState } from "react";
import Barcollectio from '../Barcollectio';
import restaurants from '../../../Demo/resturent';

const NightLife = () => {



  const [city, setCity] = useState('Kolkata');

  const nightCollection = [
    {
      url: 'https://i0.wp.com/cricketaddictor.com/wp-content/uploads/2021/05/Holkar-Cricket-Stadium-in-Indore.jpg',
      desc: '19 Best Bars & Pubs ... '
    },
    {
      url: 'https://b.zmtcdn.com/data/collections/296e36c8ed0e474f2c685b3ed85bed36_1683054220.jpg',
      desc: ' 8 Finest Microbreweries..'
    },
  ]

  return (
    <>
    <h1 className='ms-32 my-8'>Collection</h1>

    <h2 className='justify-center ms-32 text-2xl'>Explore curated lists of top restaurants, cafes, pubs, and bars in Kolkata, based on trends</h2>
    <div className="flex flex-row mx-auto w-10/12">
    {nightCollection.map((collection, i)=>{
          return(
            <Barcollectio key={i} collection={collection}/>
          )
        })}
    </div>
    
    <h1 className="font-bold text-2xl ms-32 my-8">Nightlife Restaurants in Kolkata{city}</h1>
    <div className="bg-red-500">
       <div className='flex flex-wrap justify-center gap-5 mx-auto bg-green-100'>
        {restaurants.map((food, i)=>{
          return(
            <FoodCard key={i} food={food}/>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default NightLife