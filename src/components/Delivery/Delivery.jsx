import React, {useState} from 'react'
import './Delivery.css'
import allFood from '../../../Demo/fooditems'
import FoodCard from '../FoodCard'
import ImageList from './images'


const Delivery = () => {
  const [city, setCity] = useState('Kolkata');
  const images = [
    {
      name: "Pizza",
      url: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
    },
    {
      name: "Biryani",
      url: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
    },
    {
      name: "Chicken",
      url: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
    },
    {
      name: "Burger",
      url: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
    },
    {
      name: "Momos",
      url: "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
    }
  ]
  return (
    <>
    <div>
    <div className='filter-food m-10'>
      <button className=''>Filter</button>
      <button>rating </button>
     

    </div>
      <h1 className="font-bold text-2xl ms-32 my-8 ">Inspiration for your first order</h1>

      <ImageList images={images} />


    </div>
    
    <h1 className="font-bold text-2xl ms-32 my-8 ">Food Collection in {city}</h1>
    <div className="">
       <div className='flex flex-wrap justify-center gap-5 mx-auto '>
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

