import React from 'react'
import { Link } from 'react-router-dom'

const HorizantalCards = ({ data, category }) => {
    // console.log(data);
    return (

        <div className='w-[100%] h-[40vh] flex flex-row gap-2 overflow-hidden overflow-x-auto p-3 mb-5 max-md:flex-col overflow-y-auto'>
            {data.map((item, index) => (
                <Link to={`/${item.media_type}/details/${item.id}`} key={index}
                    className='min-w-[16%] h-[35vh] bg-zinc-900 mr-4 overflow-y-auto 
                    max-md:min-h-[70%] w-[52vh]'>
                    <img className='w-full h-[50%] object-cover ' src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.profile_path})`} alt={item.title || item.name || item.origanal_name || item.original_title} />
                    <div key={index} className='mt-1 text-lg font-semibold text-white'>{item.title || item.name || item.origanal_name || item.original_title}</div>
                    <div className='mt-1 mb-3 text-zinc-300 text-sm'>{item.overview?.slice(0, 65)}... <div
                        to={`/${item.media_type}/details/${item.id}`}
                        className='text-zinc-500'>more</div></div>
                </Link>
            ))}
        </div>

    )
}

export default HorizantalCards