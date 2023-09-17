import React from 'react';
import { Link } from 'react-router-dom';
import sampleImg from "../../assets/sample image/single-image-01.png"

const ProjectSummarySection = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between gap-5 mx-10'>
            <div className='w-full md:w-1/2 text-left'>
                <h1 className='text-5xl font-semibold font-serif'>Stylish interior design by an LexisArt</h1>

                <p className='mt-10'>Personalized and stylish interiors that reflect your taste and personality, crafted by our expert designers in contemporary or traditional styles with the proper design ,Transform Your Space with the Stunning Stylish Interiors by an Interior Designer <span className='text-teal-600 font-bold font-serif pl-3'><Link> View Page</Link></span></p>
                <img className='my-16' src={sampleImg} alt=''></img>
            </div>
            <div className='w-full md:w-1/2 font-serif mb-20 md:mb-0'>
                <div className="flex w-full flex-row">
                    <div className="grid flex-grow w-1/4 card  place-items-center">
                        <h2 className='text-5xl '>47+</h2>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="grid flex-grow w-3/4 card  rounded-box  text-left">
                        <h2 className="text-left text-2xl my-3">Projects</h2>
                        <p>We have completed numerous projects across the entire world with an outstanding results over the years.</p>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="flex  w-full flex-row">
                    <div className="grid flex-grow w-1/4 card  place-items-center">
                        <h2 className='text-5xl'>8k+</h2>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="grid flex-grow w-3/4 card  rounded-box  text-left">
                        <h2 className="text-left text-2xl my-3">Happy clients</h2>
                        <p>We have completed numerous projects across the entire world with an outstanding results over the years..</p>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="flex  w-full flex-row">
                    <div className="grid flex-grow w-1/4 card  place-items-center">
                        <h2 className='text-5xl'>98%</h2>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="grid flex-grow w-3/4 card  rounded-box  text-left">
                        <h2 className="text-left text-2xl my-3">Exterior designer</h2>
                        <p>We have completed numerous projects across the entire world with an outstanding results over the years.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSummarySection;