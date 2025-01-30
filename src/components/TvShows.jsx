import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './partials/Topnav'
import DropDown from './partials/DropDown'
import axios from '../utils/axios';
import Cards from './partials/Cards';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
const TvShows = () => {

    const [category, setcategory] = useState("airing_today");

    document.title = `Prettier Movies | Trending ${category.charAt(0).toUpperCase() + category.slice(1)}`;
    
    const [tv, settv] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getTv = async () => {
        try {
            const { data } = await axios.get(`tv/${category}?page=${page}`);
            // console.log(category);
            // settv(data.results);
            if (data.results.length > 0) {
                settv((old) => ([...old, ...data.results]))
                setpage(page + 1);
            }
            else {
                setHasMore(false);
            }
        } catch (error) {
            console.log(error)
        }
    };

    const refreshHandler = () => {
        if (tv.length === 0) {
            getTv();
        }
        else {
            setpage(1)
            settv([]);
            getTv();
        }
    }

    useEffect(() => {
        refreshHandler();
    }, [category])

  const navigate = useNavigate()

  return tv.length > 0 ? (
        <div className='w-full h-screen'>
          <div className='pl-[2%] pr-[3%] w-full h-[10vh] flex items-center'>
            <i onClick={() => navigate(-1)} className="pr-3 pb-1 text-zinc-300 hover:text-[#6556CD] font-semibold text-xl ri-arrow-go-back-line"></i>
            <h1 className='text-2xl  font-semibold text-zinc-300'>
              TV
            </h1>
            <h2 className='text-sm text-zinc-500 ml-3'>({category})</h2>
            <Topnav />
            <DropDown title="Category" options={['airing_today', 'on_the_air', 'popular', 'top_rated']}
              fun={(e) => setcategory(e.target.value)}
            />
            <div className='w-[2%]'>
            </div>
          </div>
    
          <InfiniteScroll
            dataLength={tv.length}
            next={getTv}
            hasMore={hasMore}
            loader={<Loading />}>
            <Cards data={tv} title='tv' />
          </InfiniteScroll>
        </div >
      ) : <Loading />
}

export default TvShows