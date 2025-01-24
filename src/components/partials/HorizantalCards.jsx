import React from 'react'
import { Link } from 'react-router-dom'

const HorizantalCards = ({ data, categoryfun }) => {
    return (
            
            <div className='w-[100%] h-[40vh] flex flex-row gap-2 overflow-hidden overflow-x-auto p-3 mb-5'>
                {data.map((item, index) => (
                    <div key={index} className='min-w-[16%] h-full bg-zinc-900 mr-4'>
                        <img className='w-full h-[50%] object-cover ' src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.profile_path})`} alt={item.title || item.name || item.origanal_name || item.original_title} />
                        <div key={index} className='text-lg font-semibold text-white'>{item.title || item.name || item.origanal_name || item.original_title}</div>
                        <p className='mt-3 mb-3 text-zinc-300 text-sm'>{item.overview.slice(0, 65)}... <Link className='text-zinc-500'>more</Link></p>
                    </div>
                ))}
            </div>
        
    )
}

export default HorizantalCards