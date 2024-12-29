import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../assets/home/slide1.jpg'
import slide2 from '../assets/home/slide2.jpg'
import slide3 from '../assets/home/slide3.jpg'
import slide4 from '../assets/home/slide4.jpg'
import slide5 from '../assets/home/slide5.jpg'
import SectionTitle from '../Shared/SectionTitle';

const Category = () => {
    return (
        <div>
            <SectionTitle subHeading={"From 11.00am to 10.00pm"} heading={"Order online"}></SectionTitle>

            <Swiper
        slidesPerView={3}
       
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
                <SwiperSlide>
                    <img src={slide1} className='w-11/12' alt="" />
                    <h3 className='text-2xl font-bold text-white -mt-24 text-center'>Saluds</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slide2} className='w-11/12' alt="" />
                
                <h3 className='text-2xl font-bold text-white -mt-24 text-center'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slide3} className='w-11/12' alt="" />
                <h3 className='text-2xl font-bold text-white -mt-24 text-center'>Soup</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slide4} className='w-11/12' alt="" />
                <h3 className='text-2xl font-bold text-white -mt-24 text-center'>Dessart</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slide5} className='w-11/12' alt="" />
                <h3 className='text-2xl font-bold text-white -mt-24 text-center'>Saluds</h3>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Category;