import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, image, description } = service
    return (
        <div className="card card-compact bg-base-100 shadow-xl text-black text-left">
            <figure ><img className='p-4' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{service.service}</h2>
                <p>{description.split(" ").slice(0, 20).join(" ")}</p>
                <div className="card-actions ">
                    <Link to={`/service/${_id}`}>
                        <button className="btn btn-outline btn-success font-bold">See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;