import React, { useEffect, useState } from 'react'
import requests from './Request';
import axios from 'axios'
function Main() {
    const [movies,setMovies] = useState([])


    const movie = movies[Math.floor(Math.random() * movies.length )]

    useEffect(() => {
        axios.get(requests.requestPopular)
          .then((response) => {
            setMovies(response.data.results); // Adjust based on your API response structure
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);
      
// console.log(movie)

const truncateString = (str,num) =>{
  if(str?.length > num){
   return str.slice(0,num) + '...'
}
else{
  return str
}
}
  return ( 
    <div className='w-full h-[550px] text-white'>
    <div className='w-full h-full'>
    <div className='absolute bg-gradient-to-r from-black h-[550px] w-full'></div>
   
    <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
<div className ="absolute w-full md:p-8 p-4 top-[20%]">
<h1 className="text-3xl font-mono font-bold md:text-5xl">{movie?.title}</h1>


<div className="my-4">
<button className="border bg-gray-300 text-black py-2 px-5">Play</button>
<button className="border text-white ml-4 py-2 px-5">Watch Later</button>
</div>
<p className="text-gray-400 font-mono text-sm"> Released {movie?.release_date}</p>
<p className="w-full text-gray-200 font-mono md:max-w-[70%] xl:max-w-[35%]">{truncateString(movie?.overview,150)}</p>
</div>
    </div>
      
    </div>
  )
}

export default Main
