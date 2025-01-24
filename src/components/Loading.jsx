import React from 'react'
import Loader from "/loading.gif";

const Loading = () => {
  return (
    <div className='w-full h-full flex justify-center items-center bg-black'>
        <img src={Loader} alt='Loading...' />
    </div>
  )
}

export default Loading