import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({ data, title }) => {
    // console.log(title);
    return (
        <div className='w-full flex flex-wrap bg-[#1F1e24] justify-center'>
            {data.map((data, index) => (
                <Link 
                to={`/${data.media_type || title}/details/${data.id}`}
                key={index} 
                className='relative w-[23vh] m-4 text-xs font-black text-white'>
                    <img className='h-[40vh] object-cover' src={data.backdrop_path || data.profile_path || data.poster_path ? `https://image.tmdb.org/t/p/original/${data.poster_path || data.backdrop_path || data.profile_path}` : <h1>Loading...</h1>} alt="" />

                    <h1 className='text-xl text-zinc-300'>{data.original_name || data.name || data.origanal_name || data.original_title}</h1>
                    {data.vote_average && <div className='absolute text-xl w-[7vh] h-[7vh] bg-yellow-600 bottom-[35%] right-[-10%] rounded-full flex justify-center items-center'>{(data.vote_average*10).toFixed()}<sup>%</sup></div>}
                </Link>
            ))}
        </div>
    )
}

export default Cards