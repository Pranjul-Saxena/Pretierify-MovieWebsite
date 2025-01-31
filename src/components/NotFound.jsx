import React from 'react'
import Loader from "/NotFound.png";

const NotFound = () => {
  return (
    <div className='w-full h-full flex justify-center items-center bg-black'>
        <img src={Loader} alt='NotFound...' />
    </div>
  )
}

export default NotFound;