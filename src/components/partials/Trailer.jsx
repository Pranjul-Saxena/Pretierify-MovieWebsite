import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import NotFound from '../NotFound'

const Trailer = () => {
    const { pathname } = useLocation();  //useLocation() hook is used for what in react js - do ChatGPT
    const category = pathname.includes('movie') ? 'movie' : 'tv';
    const ytvideo = useSelector(state => (state[category].info.videos));
    // console.log(ytvideo, pathname);
    const navigate = useNavigate(-1);

    return (
        <div className='absolute bg-[rgba(0,0,0,0.8)] flex justify-center items-center top-[0] left-[0] h-screen w-screen z-[100] text-white text-3xl'>
            <div>
                <i onClick={() => navigate(-1)} className=" absolute right-[10%] top-[2%] pr-3 pb-1 text-zinc-300 hover:text-[#6556CD] font-semibold text-2xl ri-close-fill"></i>
                {ytvideo ? (<ReactPlayer url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
                    controls
                    height={720}
                    width={1080} />) : (<NotFound/>)}
            </div>
        </div>
    )
}

export default Trailer