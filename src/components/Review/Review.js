import React from 'react';

const Review = ({ myComment }) => {
    const { service, name, userComment, image, email, dateTime } = myComment
    return (
        <div className=" w-full flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
            <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
                <div className="w-8 h-8 rounded-full bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-800 flex items-center justify-center">
                    <img src={image} className='rounded-full' alt={`${name?.slice(0, 1)}`} srcSet="" />
                </div>
                <div className='text-right'>
                    <p className="text-sm">{name}</p>
                    <p className="text-sm">{email}</p>
                </div>
            </div>
            <div className="text-sm text-left">
                <p>{dateTime}</p>
                <h3 className="text-gray-800 dark:text-gray-100 leading-7 font-semibold w-11/12 text-left">{service}</h3>
                <p className='text-left'>{userComment}</p>
            </div>
        </div>
    );
};

export default Review;