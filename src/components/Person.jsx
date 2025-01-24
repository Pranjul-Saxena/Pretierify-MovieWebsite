import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './partials/Topnav'
import DropDown from './partials/DropDown'
import axios from '../utils/axios';
import Cards from './partials/Cards';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

const Person = () => {
    const [category, setcategory] = useState("popular");

    document.title = `Prettier Movies | Trending ${category.charAt(0).toUpperCase() + category.slice(1)}`;
    
    const [person, setperson] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getPerson = async () => {
        try {
            const { data } = await axios.get(`person/${category}?page=${page}`);
            // console.log(category);
            // setperson(data.results);
            if (data.results.length > 0) {
                setperson((old) => ([...old, ...data.results]))
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
        if (person.length === 0) {
            getPerson();
        }
        else {
            setpage(1)
            setperson([]);
            getPerson();
        }
    }

    useEffect(() => {
        refreshHandler();
    }, [category])

  const navigate = useNavigate()

  return person.length > 0 ? (
        <div className='w-full h-screen'>
          <div className='pl-[2%] pr-[3%] w-full h-[10vh] flex items-center'>
            <i onClick={() => navigate(-1)} className="pr-3 pb-1 text-zinc-300 hover:text-[#6556CD] font-semibold text-xl ri-arrow-go-back-line"></i>
            <h1 className='text-2xl  font-semibold text-zinc-300'>
              People
            </h1>
            <Topnav />
            <div className='w-[2%]'>
            </div>
          </div>
    
          <InfiniteScroll
            dataLength={person.length}
            next={getPerson}
            hasMore={hasMore}
            loader={<Loading />}>
            <Cards data={person} title={category} />
          </InfiniteScroll>
        </div >
      ) : <Loading />
}

export default Person