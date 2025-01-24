import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './partials/Topnav'
import DropDown from './partials/DropDown'
import axios from '../utils/axios';
import Cards from './partials/Cards';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

const Trending = () => {

  
  const [category, setcategory] = useState("all");

  document.title = `Prettier Movies | Trending ${category.charAt(0).toUpperCase() + category.slice(1)}`;

  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
      // console.log(category, duration);
      // settrending(data.results);
      if (data.results.length > 0) {
        settrending((old) => ([...old, ...data.results]))
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
    if (trending.length === 0) {
      getTrending();
    }
    else {
      setpage(1)
      settrending([]);
      getTrending();
    }
  }

  useEffect(() => {
    refreshHandler();
  }, [category, duration])

  const navigate = useNavigate()
  
  return trending.length > 0 ? (
    <div className='w-full h-screen'>
      <div className='pl-[2%] pr-[3%] w-full h-[10vh] flex items-center'>
        <i onClick={() => navigate(-1)} className="pr-3 pb-1 text-zinc-300 hover:text-[#6556CD] font-semibold text-xl ri-arrow-go-back-line"></i>
        <h1 className='text-2xl  font-semibold text-zinc-300'>
          Trending
        </h1>
        <Topnav />
        <DropDown title="Category" options={['tv', 'movie', 'all']}
          fun={(e) => setcategory(e.target.value)}
        />
        <div className='w-[2%]'>
        </div>
        <DropDown title="Duration" options={['day', 'week']}
          fun={(e) => setduration(e.target.value)}
        />
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={getTrending}
        hasMore={hasMore}
        loader={<Loading />}>
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div >
  ) : <Loading />
}

export default Trending