import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movies from './Movies';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function Row({ title, fetchUrl , rowId }) {
    const [movies, setMovies] = useState([]);
    const [like, setLike] = useState(false);

    useEffect(() => {
        axios.get(fetchUrl)
            .then((response) => {
                setMovies(response.data.results);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [fetchUrl]);

    const slider = () =>{
        var slider = document.getElementById('slider'+ rowId)
            slider.scrollLeft = slider.scrollLeft - 500
        
    }
    const sliderRight = () =>{
        var slider = document.getElementById('slider'+ rowId)
            slider.scrollRight = slider.scrollLeft + 500
        
    }

    return (
        <div className='bg-black flex'>
            <h2 className='text-white font-bold md:text-xl pb-8 p-2 relative -top-8'>{title}</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft 
                onClick={slider}
                    size={40} 
                    className='bg-white left-0 group-hover:block rounded-full absolute hidden opacity-50 hover:opacity-100 cursor-pointer z-10' 
                />
                <div id={'slider'+ rowId} className='w-full whitespace-nowrap scrollbar-hide h-full overflow-x-scroll'>
                    {movies.map((item, index) => (
                        <Movies key={index} item={item} />
                    ))}
                    <MdChevronRight
                        size={40}
                        className='bg-white right-4 top-1/2 transform -translate-y-1/2 absolute opacity-50 hover:opacity-100 cursor-pointer z-10'
                    />
                </div>
            </div>
        </div>
    );
}

export default Row;
