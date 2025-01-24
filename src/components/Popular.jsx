import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './partials/Topnav'
import DropDown from './partials/DropDown'
import axios from '../utils/axios';
import Cards from './partials/Cards';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';


const Popular = () => {

    const [category, setcategory] = useState("movie");

    document.title = `Prettier Movies | Trending ${category.charAt(0).toUpperCase() + category.slice(1)}`;
    
    const [popular, setpopular] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getPopular = async () => {
        try {
            const { data } = await axios.get(`${category}/popular?page=${page}`);
            // console.log(category);
            // setpopular(data.results);
            if (data.results.length > 0) {
                setpopular((old) => ([...old, ...data.results]))
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
        if (popular.length === 0) {
            getPopular();
        }
        else {
            setpage(1)
            setpopular([]);
            getPopular();
        }
    }

    useEffect(() => {
        refreshHandler();
    }, [category])

  const navigate = useNavigate()

    return popular.length > 0 ? (
        <div className='w-full h-screen'>
          <div className='pl-[2%] pr-[3%] w-full h-[10vh] flex items-center'>
            <i onClick={() => navigate(-1)} className="pr-3 pb-1 text-zinc-300 hover:text-[#6556CD] font-semibold text-xl ri-arrow-go-back-line"></i>
            <h1 className='text-2xl  font-semibold text-zinc-300'>
              Popular
            </h1>
            <Topnav />
            <DropDown title="Category" options={['tv', 'movie']}
              fun={(e) => setcategory(e.target.value)}
            />
            <div className='w-[2%]'>
            </div>
          </div>
    
          <InfiniteScroll
            dataLength={popular.length}
            next={getPopular}
            hasMore={hasMore}
            loader={<Loading />}>
            <Cards data={popular} title={category} />
          </InfiniteScroll>
        </div >
      ) : <Loading />
}

export default Popular