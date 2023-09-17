import React, { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useLoaderData } from 'react-router-dom';
import Comments from '../../components/Comments/Comments';
import { AuthContext } from '../../context/UserContext/UserContext';

const Service = () => {
    const { user } = useContext(AuthContext)
    const selectService = useLoaderData()
    return (
        <div className='w-5/6 mx-auto my-10'>
            <div className='w-full mx-auto'>
                <PhotoProvider>
                    <PhotoView src={selectService.image} className="w-20">
                        <img className='inline-block m-3' src={selectService.image} alt="" srcSet="" />
                    </PhotoView>
                </PhotoProvider>
            </div>
            <h2 className='text-3xl font-bold my-5'>{selectService.service}</h2>
            <p className='text-lg md:mx-16'>
                {selectService.description}
            </p>
            <Comments selectService={selectService}></Comments>
        </div>
    );
};

export default Service;