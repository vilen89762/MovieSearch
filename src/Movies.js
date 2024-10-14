import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';

// Placeholder image URL (provide an actual placeholder image URL or local path)
const placeholderImage = 'https://via.placeholder.com/500'; 

function Movies({ item }) {
    const [like, setLike] = useState(false);

    // Determine the image URL, fallback to placeholder if backdrop_path is invalid
    const imageUrl = item?.backdrop_path 
        ? `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
        : placeholderImage;

    return (
        <div key={item.id} className='w-[160px] relative p-2 inline-block cursor-pointer md:w-[240px] lg:w-[280px] sm:w-[200px]'>
            <img className='w-full h-auto block' src={imageUrl} alt={item?.title || 'Movie Image'} />
            <div className='absolute hover:opacity-100 hover:bg-black/80 text-white opacity-0 top-0 left-0 w-full h-full'>
                <p className="white-space-normal items-center text-xs md:text-sm font-bold flex justify-center h-full text-center">
                    {item?.title || 'Movie Title'}
                </p>
                <p>
                    {like ? (
                        <FaHeart className='absolute left-4 text-gray-400 top-25' onClick={() => setLike(false)} />
                    ) : (
                        <FaRegHeart className='absolute left-4 text-gray-400 top-10' onClick={() => setLike(true)} />
                    )}
                </p>
            </div>
        </div>
    );
}

export default Movies;
