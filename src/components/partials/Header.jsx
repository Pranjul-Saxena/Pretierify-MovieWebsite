import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ data }) => {
    // console.log(data)
    return (
        <div
            style={{
                background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.4),rgba(0,0,0,0.7)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className='h-[55vh] flex flex-col pt-[7%] pl-[6%] justify-end items-start'>
            <h1 className='w-[70%] text-5xl font-black text-white'>
                {data.original_name || data.name || data.origanal_name || data.original_title}
            </h1>
            <p className='w-[70%] mt-3 text-white'>
                {data.overview.slice(0, 250)}... <Link to={`/${data.media_type}/details/${data.id}`} className='text-blue-400'>more</Link>
            </p>
            <div className='text-white flex items-center gap-2 justify-start text-center'>
                <i className="text-blue-300 text-xl ri-volume-down-line hover:text-blue-700 cursor-pointer"></i>
                <span>{data.release_date || "No Information"}</span>
                <p className='text-white gap-2 flex'><i className=" text-blue-300 ri-album-line"></i>{data.media_type.toUpperCase()}</p>
            </div>
            <Link className='mt-4 mb-4 text-white font-normal hover:bg-[#6556CD] hover:text-white duration-300 p-4 rounded-md border-2'>Watch Trailer</Link>

        </div>
    )
}

export default Header