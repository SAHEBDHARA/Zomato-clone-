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
}

export default Header
// header 