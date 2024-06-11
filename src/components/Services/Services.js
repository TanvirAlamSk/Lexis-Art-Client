import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [names, setNames] = useState([]);
    const [service, setService] = useState("")
    useEffect(() => {
        fetch("https://lexis-art-server.onrender.com/services")
            .then((response) => response.json())
            .then((data) => setNames(data))
    }, [])

    const handelServiceCard = (id) => {
        fetch(`https://lexis-art-server.onrender.com/service/${id}`)
            .then((response) => response.json())
            .then((data) => setService(data))
    }

    return (
        <div className='my-20 mx-10'>
            <h1 className='text-5xl'>Our various types of services</h1>
            <p className='md:mx-80 my-10'>Our interior design services helped bring our clients' visions to life by transforming their spaces. See how our experts transformed these interiors. </p>


            <div className='flex flex-col md:flex-row'>
                <div className='md:basis-1/3 mx-5 mb-10 md:mb-0 text-left flex flex-col'>
                    {names.map((name, i) => {
                        if (i < 2) {
                            return (

                                <div key={i} onClick={() => handelServiceCard(name._id)}>
                                    <Link className='pl-4 text-xl font-serif  hover:text-teal-500 '>{name.service}</Link>
                                    <div className="divider border-1 my-10"></div>
                                </div>

                            )
                        } else if (i == 2) {
                            return <Link key={i} onClick={() => handelServiceCard(name._id)} className='pl-4 text-xl font-serif  hover:text-teal-500'>{name.service}</Link>
                        }
                    })}
                </div>
                <div className='md:basis-2/3 flex flex-col md:flex-row '>
                    <div className='md:basis-1/2 '>
                        {service ?
                            <img className='h-96' src={service.image} alt="" srcSet="" />
                            :
                            <img className='h-96' src={names[0]?.image} alt="" srcSet="" />
                        }
                    </div>
                    <div className='md:basis-1/2 pt-5 text-left'>
                        {
                            service ?
                                <>
                                    <h2 className='text-3xl mb-3'>{service.service}</h2>
                                    <p>{service.description?.split('.').slice(0, 3).join(".")} ...</p>
                                    <Link to={`service/${service._id}`}>
                                        <button className='btn bg-teal-400 text-white mt-3 hover:bg-teal-600'>View Details</button></Link>
                                </>

                                : <><h2 className='text-3xl mb-3'>{names[0]?.service}</h2>
                                    <p>{names[0]?.description?.split('.').slice(0, 3).join(".")} ...</p>
                                    <Link to={`service/${names[0]?._id}`}>
                                        <button className='btn bg-teal-400 text-white mt-3 hover:bg-teal-600'>View Details</button></Link>
                                </>
                        }
                    </div>
                </div>
            </div>
            <Link to="/services">
                <button className='btn bg-teal-500 text-white mt-20 hover:bg-teal-600'>View all services</button>
            </Link>
        </div>
    );
};

export default Services;