import React, { useEffect, useState } from 'react'
import SideNav from './partials/SideNav'
import Topnav from './partials/Topnav'
import axios from '../utils/axios'
import Header from './partials/Header'
import HorizantalCards from './partials/HorizantalCards'
import DropDown from './partials/DropDown'
import Loading from './Loading'

const Home = () => {
    document.title = "Prettier Movies | Home"

    const [wallpaper, setwallpaper] = useState(null);
    const [trending, settrending] = useState(null);
    const [category, setcategory] = useState("all");

    // console.log(category)



    const getWallpaper = async () => {

        try {
            const { data } = await axios.get(`/trending/all/day`)
            // console.log(data)
            let randomData = data.results[(Math.random() * data.results.length).toFixed()];
            setwallpaper(randomData);
        } catch (error) {
            console.log(error)
        }
        // const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=en-US&page=1');
        // const data = await response.json();
        // setwallpaper(data.results);

    };

    const getTrending = async () => {

        try {
            const { data } = await axios.get(`/trending/${category}/day`)
            settrending(data.results);
        } catch (error) {
            console.log(error)
        }

    };

    useEffect(() => {
        !wallpaper && getWallpaper();
        getTrending();
    }, [category]);

    // console.log(trending);


    return wallpaper && trending ? (
        <>
            <SideNav />
            <div className='w-[80%] h-full overflow-auto overflow-x-hidden '>
                <Topnav />

                <Header data={wallpaper} />

                <div className='w-full pl-6 pr-6 pt-3 flex justify-between items-center'>
                    <div className='text-2xl text-zinc-400 font-bold'>
                        Trending
                    </div>
                    <div className='mt-3'>
                        <DropDown title="Filter" options={["tv", "movie", "all"]} fun={(e) => setcategory(e.target.value)} />
                    </div>
                </div>
                
                <HorizantalCards data={trending} />
            </div>
        </>
    ) : <Loading />
}

export default Home