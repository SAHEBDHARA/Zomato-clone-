import React, { useState } from 'react'
import './Header.css'
import DiningOut from "../DiningOut/DiningOut"

const Header = () => {

  return (
    <div className='header'> 
      <img 
      className='header-logo' 
      src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
      alt="zomato-log" />
      <div className='header-right flex-1 items-center justify-between h-18 shadow-lg border-2 border-gray-200 rounded-lg'>
        <div className='locate items-center h-13 flex flex-row gap-4 w-5/12 border-2 justify-between p-4'>
          <div className="flex flex-row gap-4">
            <img 
              src="https://png.pngtree.com/png-vector/20190215/ourmid/pngtree-vector-location-icon-png-image_515424.jpg"  
              alt="" 
              className='location-logo'
              />
            <span className=''> Kolkata </span>
           
          </div>
          <img src="https://t4.ftcdn.net/jpg/04/03/18/15/360_F_403181548_94NP0b7ooowJRzB2srpIewpYI0rYTCsS.jpg" alt="" className='dropdown h-4 flex '/>
          <div className="search-separator "> </div>
          <div className="searchbar">
            <img src="https://w7.pngwing.com/pngs/765/401/png-transparent-search-logo-magnifying-glass-computer-icons-search-box-icon-search-drawing-icon-lens-data-background-process-thumbnail.png" alt="search" className=' searchbar-image h-4 items-center flex pointer '/>
             <input type="text" placeholder=' search for resturent, cuisin or a dish' className='search-input' />
          </div>
         
        </div>
      </div>
      <div className="auth flex flex-row gap-2 w-52">
        <span className="btn p-3 text-xl">Log in</span>
        <span className="btn p-3 text-xl">Sign up</span>
      </div>
     </div>
    
  )
  // const locations = ['New York', 'London', 'Paris', 'Tokyo']; // Replace with your location options

  // return (
  //   <header className="bg-white shadow-lg">
  //   <div className="container mx-auto px-4 py-3">
  //     <div className="flex items-center justify-between">
  //       <div className="flex items-center space-x-4">
  //         <img
  //           src="https://png.pngtree.com/png-vector/20190215/ourmid/pngtree-vector-location-icon-png-image_515424.jpg"
  //           alt=""
  //           className="location-logo h-8 text-red-500" // Add "text-red-500" to make the image color red
  //         />
  //         <input
  //           type="text"
  //           className="border border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
  //           placeholder="Search for restaurants"
  //         />
  //       </div>
  //       <div className="flex items-center space-x-4">
  //         <select className="form-select">
  //           {locations.map((location, index) => (
  //             <option key={index} value={location}>
  //               {location}
  //             </option>
  //           ))}
  //         </select>
  //         <form className="flex space-x-2">
  //           <input
  //             type="text"
  //             className="rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
  //             placeholder="Search for restaurants"
  //           />
  //           <button
  //             type="submit"
  //             className="px-4 py-2 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md transition duration-300"
  //           >
  //             Search
  //           </button>
  //         </form>
  //         <div className="space-x-2">
  //           <button className="px-4 py-2 text-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-500 rounded-md transition duration-300">
  //             Login
  //           </button>
  //           <button className="px-4 py-2 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md transition duration-300">
  //             Sign Up
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </header>
  // );



}

export default Header
