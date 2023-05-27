import React from 'react'
import './Tab.css'

const tabOptions = ['Nightlife', 'Delivery', 'Dining Out'];


const Tab = ({changeActiveTab}) => {
  return (
    tabOptions.map((tabName, i)=>{
      return(
        <div className='inline-flex gap-10 justify-center '>
        <button className='shadow-lg' key={i} onClick={()=> changeActiveTab(tabName)}> {tabName} </button>
        </div>
      )
    })
  )
}

export default Tab