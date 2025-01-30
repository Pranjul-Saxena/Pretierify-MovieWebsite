import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './partials/Topnav'
import DropDown from './partials/DropDown'
import axios from '../utils/axios';
import Cards from './partials/Cards';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

const Movies = () => {
    
    const [category, setcategory] = useState("now_playing");

    document.title = `Prettier Movies | Trending ${category.charAt(0).toUpperCase() + category.slice(1)}`;
    
    const [movie, setmovie] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getMovie = async () => {
        try {
            const { data } = await axios.get(`movie/${category}?page=${page}`);
            // console.log(category);
            // setmovie(data.results);
            if (data.results.length > 0) {
                setmovie((old) => ([...old, ...data.results]))
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
        if (movie.length === 0) {
            getMovie();
        }
        else {
            setpage(1)
            setmovie([]);
            getMovie();
        }
    }

    useEffect(() => {
        refreshHandler();
    }, [category])

  const navigate = useNavigate()
  return movie.length > 0 ? (
    <div className='w-full h-screen'>
      <div className='pl-[2%] pr-[3%] w-full h-[10vh] flex items-center'>
        <i onClick={() => navigate(-1)} className="pr-3 pb-1 text-zinc-300 hover:text-[#6556CD] font-semibold text-xl ri-arrow-go-back-line"></i>
        <h1 className='text-2xl  font-semibold text-zinc-300'>
          Movie
        </h1><h3 className='text-sm ml-2 text-center text-zinc-300 font-semibold'>({category})</h3>
        <Topnav />
        <DropDown title="Category" options={['now_playing', 'top_rated', 'upcoming']}
          fun={(e) => setcategory(e.target.value)}
        />
        <div className='w-[2%]'>
        </div>
      </div>

      <InfiniteScroll
        dataLength={movie.length}
        next={getMovie}
        hasMore={hasMore}
        loader={<Loading />}>
        <Cards data={movie} title='movie' />
      </InfiniteScroll>
    </div >
  ) : <Loading />
}

export default Movies