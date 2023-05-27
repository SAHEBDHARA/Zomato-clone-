import React from 'react'
import './Diningout.css'
import allFood from '../../../Demo/fooditems'
import FoodCard from '../FoodCard'
import { useState } from 'react'
import Barcollectio from '../Barcollectio'





const DiningOut = () => {


  // console.log('Search term:', searchTerm);



  const collectionImg = [
    {
      url: 'https://i0.wp.com/cricketaddictor.com/wp-content/uploads/2021/05/Holkar-Cricket-Stadium-in-Indore.jpg',
      desc: '17 thriling live crickte S.. '
    },
    {
      url: 'https://b.zmtcdn.com/data/collections/296e36c8ed0e474f2c685b3ed85bed36_1683054220.jpg',
      desc: '9 Blissful Breakfast Places '
    },
    {
      url: 'https://b.zmtcdn.com/data/collections/1e8d0c4ad0d88f7afaca3cca5d5a708e_1682080569.jpg?fit=around|562.5:360&crop=562.5:360;*,*',
      desc: 'Wnner of Zomato Rest '
    },
    {
      url: 'https://res.cloudinary.com/purnesh/image/upload/f_auto/v1609924086/101609924085627.jpg',
      desc: '10 Great Buffets '
    }
  ]

 
 

  const [city, setCity] = useState('Kolkata');

  return (
    <>
    
    <h1 className='ms-32 my-8 font-bold'>Collection</h1>
    <h2 className='justify-center ms-32 text-2xl'>Explore curated lists of top restaurants, cafes, pubs, and bars in Kolkata, based on trends</h2>
    <div className="flex flex-row mx-auto w-10/12 ">
    {collectionImg.map((collection, i)=>{
          return(
            <Barcollectio key={i} collection={collection}/>
          )
        })}
    </div>
    
    <h1 className="font-bold text-2xl ml-52 my-8">Food Collection in {city}</h1>
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