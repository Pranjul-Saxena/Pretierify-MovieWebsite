import axios from '../../utils/axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import no_image from '/no_image.png'

const Topnav = () => {

    const [query, setquery] = useState("");
    // console.log(query)

    const [searchData, setSearchData] = useState([]);

    const getSearchData = async () => {
        try {
            const response = await axios.get(`/search/multi?query=${query}`)
            // console.log(response)
            setSearchData(response.data.results);

        } catch (error) {
            console.log(error)
        }
    }

    // console.log(getSearchData());
    useEffect(() => {
        getSearchData();
    }, [query])

    return (
        <div className=' relative w-full h-[10vh] flex justify-start items-center px-[20%] z-10'>
            <i className="text-3xl text-zinc-300 ri-search-2-line"></i>
            <input
                onChange={(e) => setquery(e.target.value)}
                value={query}
                className='w-1/2 mx-10 p-5 text-xl outline-none border-none bg-transparent text-zinc-300'
                type='text'
                placeholder='Search anything' />
            {query.length > 0 && (<i onClick={() => setquery("")} className="ri-close-large-line text-zinc-300 "></i>)}
            <div className='absolute w-[60%] max-h-[50vh] bg-zinc-400 opacity-[95%] top-[100%] my-auto overflow-auto rounded-lg'>

                {searchData.map((item, index) => (
                    <Link to={`/${item.media_type}/details/${item.id}`} key={index} className='flex flex-row items-center justify-between m-5 mr-10 ml-10 border-b-2 border-zinc-300'>
                        <img className='w-[15vw] h-[15vh]' style={{}} src={item.backdrop_path || item.profile_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path || item.profile_path}` : no_image} alt='' />
                        <span>{item.title || item.name || item.origanal_name || item.original_title}</span>
                    </Link>
                ))}



            </div>



        </div>
    )
}

export default Topnav