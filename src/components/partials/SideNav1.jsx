//in partials folder the component does not load like a route 

import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav1 = () => {
    return (
        <div className='w-[20%] h-full  border-r-2 border-zinc-400 p-3'>
            <h1 className='text-2xl text-white font-bold '>
                <i className=" text-[#6556CD] ri-tv-fill">
                    <span className='text-2xl ml-3 font-sans'>Prettierfy</span></i>
            </h1>
            <nav className='flex flex-col text-zinc-400 text-lg gap-3 ml-7 pb-[20%]'>
                <h1 className='ml-2 mt-7 mb-3 text-white font-semibold'>New Feeds</h1>
                <Link to="/trending" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-md p-4'><i className="ri-fire-line"></i>Trending
                </Link>
                <Link to="/popular" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-md p-4'><i className="mr-1 ri-sparkling-2-line"></i>Popular
                </Link>
                <Link to="/movie" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-md p-4'><i className="ri-movie-line"></i> Movies
                </Link>
                <Link to='/tv' className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-md p-4'><i className="ri-live-line"></i> TV Shows</Link>
            </nav>
            <hr className='border-none h-[1px] bg-zinc-400' />
            <nav className='flex flex-col text-zinc-400 text-lg gap-3 ml-7 pt-8'>
                <h1 className='ml-2 mt-5 mb-3 text-white font-semibold'>Website Information</h1>
                <Link to='/about' className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-md p-4'><i className="ri-information-line"></i> About Prettier</Link>
                <Link to='/contact' className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-md p-4'><i className="mr-1 ri-phone-fill"></i>Contact</Link>

            </nav>


        </div>
    )
}

export default Sidenav1;
