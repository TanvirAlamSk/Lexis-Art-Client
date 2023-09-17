import React from 'react';
import img1 from "../../assets/About_Image/IMG_4563.jpg"
import img2 from "../../assets/About_Image/IMG_4823.jpg"

const About = () => {
    return (
        <div className='mx-6 lg:mx-20 my-10'>
            <div className='flex flex-col md:flex-row gap-10'>
                <div className='w-full lg:w-1/2 text-left'>
                    <h2 className='text-2xl text-teal-500 font-bold font-serif'>Our Company</h2>
                    <p className='text-lg mt-4'>Interior Services’ Mission is to provide Superior Window Covering Services and Products to the Construction, Design and Property Management communities of the Greater Los Angeles Area.

                        Interior Services was founded by Tom and Heidi Luginbuhl in the fall of 1983. Their unwavering commitment to service has proved to be the driving force that has shaped Interior Services into the business it is today. Located in Monrovia, CA and serving the Los Angeles Area, Interior Services strives to be a leader in the window covering industry. Our team is committed to providing the highest level of service from project inception to completed installation. We believe that our positive work environment and commitment to team-work allow us to give our customers the ultimate service experience.</p>
                </div>
                <div className='w-full lg:w-1/2 text-right'>
                    <img src={img1}></img>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-10 mt-20'>
                <div className='w-full lg:w-1/2 text-left'>
                    <img src={img2} alt="" srcSet="" />
                </div>
                <div className='w-full lg:w-1/2 text-right'>
                    <p className='text-lg font-semibold font-serif'>As a company, we care about PEOPLE; employees, coworkers, customers, vendors, and whoever else we come across in our work.</p>
                    <p className='mt-2'>We believe that people are more important than projects, products, or problems. We care about PERFECTION. We believe that our work must be perfect. When our work is done, our customers rave about our services and products, and we are inspired to progress.

                        We care about PRODUCTIVITY. In order to be perfect, we must anticipate the expectations and needs of our customers, the limitations of our vendors, the requirements of other trades, and we must communicate quickly and effectively with all. We care about PROGRESS. The window covering industry is emerging as a significant part of building design and construction. We are, and will continue to be, leaders in understanding and providing new window covering technologies.</p>
                </div>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default About;