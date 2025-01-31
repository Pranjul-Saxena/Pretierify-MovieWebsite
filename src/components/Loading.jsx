// import React from 'react'
// import Loader from "/loading.gif";

// const Loading = () => {
//   return (
//     <div className='w-full h-full flex justify-center items-center bg-black'>
//       <img src={Loader} alt='Loading...' />
//     </div>
//   )
// }

// export default Loading


import React from 'react'
import { HashLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className='bg-[#1F1E24] h-screen w-screen flex justify-center items-center'>
      <HashLoader size={50} color='#6556CD' />
    </div>
  )
}

export default Loading;
