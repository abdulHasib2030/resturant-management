import React from 'react';
import SectionTitle from '../Shared/SectionTitle';
import featureImg from '../assets/home/featured.jpg'
const Featured = () => {
    return (
        <div className='featured-item pt-10 my-20 bg-fixed'>
            <SectionTitle  subHeading={"Check it cmsout"} heading={"Featured Item"}></SectionTitle>
            <div className='md:flex justify-center items-center py-10 px-32 bg-opacity-60 bg-slate-400 '>
                <div>
                    <img src={featureImg} alt="" />

                </div>
                <div className='md:ml-10 space-y-3 text-white'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, quis. Nemo incidunt placeat unde aliquid dolorum totam delectus praesentium doloribus quia corrupti odio, molestiae omnis sint perspiciatis, esse necessitatibus maiores?</p>
                   <button className='uppercase border-0 border-b-4  btn btn-outline'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;