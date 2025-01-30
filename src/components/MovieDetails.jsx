import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { asyncloadmovie, removemovie } from '../store/actions/movieActions';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaEarthAsia } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaImdb } from "react-icons/fa";
import Loading from './Loading';
import HorizantalCards from './partials/HorizantalCards';

const MovieDetails = () => {

    const { info } = useSelector(state => state.movie)
    // console.log(info)

    const { id } = useParams();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(asyncloadmovie(id));
        return () => {
            // cleanup
            dispatch(removemovie());
        };
    }, [id]);
    const navigate = useNavigate();

    return info ? (
        <div
            style={{
                background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.4),rgba(0,0,0,0.7)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className='w-screen h-[150vh] px-[10%]'>

            <div className='text-2xl flex items-center p-4 bg-zinc-300 bg-opacity-10 rounded-xl mt-6'>
                <i onClick={() => navigate(-1)} className="pr-3 pb-1 text-zinc-300 hover:text-[#6556CD] font-semibold text-xl ri-arrow-go-back-line"></i>
                <nav className='w-full text-zinc-300 flex items-center gap-5 justify-end'>
                    <a target='_blank' href={info.detail.homepage} className='hover:text-[#6556CD]'><HiOutlineExternalLink /></a>
                    <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`} className='hover:text-[#6556CD]'><FaEarthAsia /></a>
                    <a target='_blank' href={`https://www.imdb.com/title/${info.externalid.imdb_id}`} className='hover:text-[#6556CD]'><FaImdb />
                    </a>
                </nav>
            </div>
            <div className='w-full '>

                <div className='p-10 text-xl font-semibold text-white flex flex-row'>
                    <img
                        className='h-[40vh] object-cover'
                        src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path}`}
                        alt='no img'
                    />
                    <div>
                        <div className='flex items-center text-center'>
                            <h1 className='text-5xl pl-10'>{info.detail.title || info.detail.name || info.detail.origanal_name || info.detail.original_title}</h1>
                            <h1 className='text-3xl pl-4 text-zinc-400'>({info.detail.release_date.substring(0, 4)})</h1>
                        </div>
                        <h1 className='text-4xl pl-10'>{info.detail.tagline}</h1>
                        <h1 className='text-3xl pl-11 py-7'>Overview </h1>
                        <p className='text-sm text-gray-200 pl-11'>{info.detail.overview}</p>
                        <h1 className='text-3xl pl-11 pt-10'>Movie Translated </h1>
                        <p className='text-xl text-gray-200 pl-11 pt-4'>{info.detail.spoken_languages.join(",")}</p>

                        <div className='pl-11 pt-8 '>
                            <Link className='mt-4 mb-4 text-white font-normal hover:bg-[#6556CD] hover:text-white duration-300 p-4 rounded-md border-2'
                                to={`${1}/trailer`}>
                                <i className='text-xl ri-play-fill' /> Watch Trailer
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {info.watchproviders && <div className='w-[80%] h-[10%]'>
                <div className='mt-5 flex items-center gap-5'>
                    <h1 className='text-xl font-semibold text-zinc-200' >Available on Plateform: </h1>
                    {info.watchproviders &&
                        info.watchproviders.flatrate &&
                        info.watchproviders.flatrate.map((item, idx) => (
                            <img
                                key={idx}
                                className='w-[5vh] h-[5vh] object-cover rounded-md bg-zinc-500' src={`https://image.tmdb.org/t/p/original/${item.logo_path}`} />
                        ))}
                </div>
                <div className='mt-5 flex items-center gap-5'>
                    <h1 className='text-xl font-semibold text-zinc-200' >Available on rent: </h1>
                    {info.watchproviders &&
                        info.watchproviders.rent &&
                        info.watchproviders.rent.map((item, idx) => (
                            <img
                                key={idx}
                                className='w-[5vh] h-[5vh] object-cover rounded-md bg-zinc-500' src={`https://image.tmdb.org/t/p/original/${item.logo_path}`} />
                        ))}
                </div>
                <div className='mt-5 flex items-center gap-5'>
                    <h1 className='text-xl font-semibold text-zinc-200' >Available on buy: </h1>
                    {info.watchproviders &&
                        info.watchproviders.flatrate &&
                        info.watchproviders.flatrate.map((item, idx) => (
                            <img
                                key={idx}
                                className='w-[5vh] h-[5vh] object-cover rounded-md bg-zinc-500' src={`https://image.tmdb.org/t/p/original/${item.logo_path}`} />
                        ))}
                </div>
            </div>}
            <hr className='h-[1px] mb-10 mt-20 bg-zinc-400 border-none'/>
            <h1 className='text-3xl  text-zinc-300'>Similar Movies </h1>
            <HorizantalCards data={info.recommendations.length > 0 ? info.recommendations : info.similar}/>

        </div>
    ) : <Loading />
}

export default MovieDetails