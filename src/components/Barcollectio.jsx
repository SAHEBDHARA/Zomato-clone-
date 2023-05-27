import React from 'react'

const Barcollectio = ({collection}) => {
  return (
    <div className='flex flex-col items-center w-96 ml-5 relative flex-row '>
        <img className='image h-80 m-8 rounded-lg mb-2 flex flex-row cursor-pointer' src={collection.url} alt="" />
        <h2 className='text-xl font-bold '>{collection.desc}</h2>
    </div>
  )
}

export default Barcollectio
