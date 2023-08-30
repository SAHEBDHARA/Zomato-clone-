import React from 'react'
const detailStyle = {
  display: 'flex',
  flexDirection: 'flex-column'
}
import Header from './Header/Header'

const FoodCard = ({food}) => {







  return (
    <div className="food-box bg-white w-96 p-3 rounded-lg shadow-lg relative ">
      <img src={food.image} alt={food.name} className="image h-80 w-full  flex rounded-lg mb-2 cursor-pointer " />
      <div className="flex flex-row" style={detailStyle}>
        <div className="w-8/12 ">
          <h3 className="name text-2xl font-bold">{food.name}</h3>
          <p className="description">{food.description}</p>
        </div>
        <div className="flex flex-col w-4/12 text-right ">
          <span className="rating bg-green-700 text-white w-12 text-center rounded-xl justify-self-end self-end">{food.rating}</span>
          <span className="price">$ {food.price}</span>
          
        </div>
        {food.offer ? 
          <span className="offer bg-blue-700 text-white absolute max-w-full px-1 -my-12 rounded-r-lg">{food.offer}</span>
          : null
          }
      </div>

    </div>
  )
}

export default FoodCard