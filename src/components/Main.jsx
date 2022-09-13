// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../Requests';

function Main() {

  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];
  const movieTitle = movie?.title;

  // api call using axios start
  // useEffect(() => {
  //   axios.get(requests.requestPopular).then((response) => {
  //     setMovies(response.data.results);
  //   })
  // }, [])
  // console.log(movie);
  // api call using axios end


// api call using fetch start
  useEffect(() => {
    getPopular();
}, []);

const getPopular = async () => {

    // for our local storage 
    const check = localStorage.getItem('movies');

    if(check){
      setMovies(JSON.parse(check));
    }
    else{
        
        let api = await fetch(requests.requestPopular);

        let data = await api.json();

        localStorage.setItem('movies', JSON.stringify(data.results));
        setMovies(data.results);
    }    
}
// api call using fetch end

const truncateString = (str, num) => {
  if(str?.length > num){
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
}



  return (
    <div className='w-full h-[100vh] '>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[100vh] bg-gradient-to-r from-black '></div>
          <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movieTitle} />
          <div className='absolute w-full top-[55%] md:top-[50%] p-4 md:p-8 '>
            <h1 className='text-3xl md:text-5xl font-bold '>{movieTitle}</h1>
            <div className='my-4 '>
              <button className='border  text-white py-2 px-5 hover:bg-gray-300 hover:text-black transition ease-in duration-300'>Play</button>
              <button className='border  text-white py-2 px-5  ml-4  hover:bg-gray-300 hover:text-black transition ease-in duration-300'>Watch Later</button>
            </div>
            <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
            <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 text-sm md:text-base'>{truncateString(movie?.overview, 150)}</p>
          </div>
      </div> 

    </div>
  )
}

export default Main