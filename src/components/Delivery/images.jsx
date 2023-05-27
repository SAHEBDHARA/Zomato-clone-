import React from 'react';
import './Delivery.css';  

const ImageList = ({ images }) => {



  return (
    <div className='food-circle w-9/12 mx-auto relative flex flex-row gap-1 '>
      {images.map((image, index) => (
        <div className='w-80 h-80 flex flex-col items-center' key={index}>
          <img className='image rounded-full cursor-pointer h-1/2 m-1 ' src={image.url} alt={`Image ${index}`} />
          <p className='text-2xl font-bold '>{image.name}</p>
        </div>
      ))}
      
    </div>
  );
};

export default ImageList;
