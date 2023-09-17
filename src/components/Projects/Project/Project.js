import React from 'react';

const Project = ({ project }) => {
    const { name, image } = project
    return (
        <div className="card m-5 bg-base-100 shadow-xl text-black ">
            <figure className="">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-left text-left">
                <h2 className="card-title ">{name}</h2>
                <p className='text-teal-600 cursor-pointer'>View Details</p>
            </div>
        </div>

    );
};

export default Project;