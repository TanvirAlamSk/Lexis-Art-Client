import React from 'react';
import "./HomeSliderCard.css"
import { Link } from 'react-router-dom';

const HomeSliderCard = ({ image }) => {
    const { id, img, title, description } = image
    let prev, next
    if (id == 1) {

        prev = 3
    } else {
        prev = id - 1
    }
    if (id == 3) {

        next = 1
    } else {
        next = id + 1
    }

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full home-carousel">
            <img src={img} className="w-full h-full" alt='' />
            <div className='absolute transform -translate-y-1/2  left-20 lg:left-40 top-1/2 text-left'>
                <h1 className='text-white lg:text-6xl w-1/2 text-left font-bold'>{title}</h1>
                <p className=' text-orange-300 hidden md:block text-lg w-1/2  my-4 lg:my-8'>{description}</p>
                <Link><input className='text-center mt-8 md:mt-0 btn bg-teal-600 w-24 md:w-36 text-white border-none p-0 hover:bg-slate-200 hover:text-teal-600 text-xs md:text-base hover:lg:font-bold' value="Our Services"></input></Link>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>

        </div>
    );
};

export default HomeSliderCard;