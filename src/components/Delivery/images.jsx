import React from 'react';
import Slider from 'infinite-react-carousel/lib/carousel/slider'



const ImageList = ({ images }) => {
  return (
    <div className='food-circle relative flex flex-row  '>
    {/* <Slider > */}
      {images.map((image, index) => (
        <div className='w-8/12 justify-items-center' key={index}>
          <img className=' image rounded-full cursor-pointer h-1/2 m-1 ' src={image.url} alt={`Image ${index}`} />
          <p className='text-2xl font-bold '>{image.name}</p>
        </div>
      ))}
      
      {/* </Slider> */}
    </div>
  );
};

export default ImageList;
