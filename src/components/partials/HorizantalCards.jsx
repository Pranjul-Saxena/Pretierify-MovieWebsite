import React from 'react'
import { Link } from 'react-router-dom'
import no_image from '/no_image.png'

const HorizantalCards = ({ data, category }) => {
    // console.log(data);
    return (

        <div className='w-[100%] h-[41vh] flex flex-row gap-2 overflow-hidden overflow-x-auto p-3 mb-5 '>
            {data.map((item, index) => (
                <Link to={`/${item.media_type}/details/${item.id}`} key={index}
                    className='min-w-[16%] h-[36vh] bg-zinc-900 border-2 border-zinc-800 rounded-xl overflow-hidden shadow-md shadow-zinc-500 mr-4 hover:h-[37vh] hover:bg-zinc-950   
                    max-md:min-h-[70%] w-[52vh] '>
                    <img className='w-full h-[50%] object-cover' src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.profile_path || no_image})`} alt={item.title || item.name || item.origanal_name || item.original_title} />
                    <div key={index} className='mt-1 text-lg font-semibold text-white'>{(item.title || item.name || item.origanal_name || item.original_title).slice(0, 33)}</div>
                    <div className='mt-1 mb-3 text-zinc-300 text-sm hover:bg-stroke-sky-500'>{item.overview?.slice(0, 65)}...<span
                        to={`/${item.media_type}/details/${item.id}`}
                        className='text-zinc-500'> more
                    </span>
                    </div>

                </Link>
            ))}
        </div>

    )
}

export default HorizantalCards