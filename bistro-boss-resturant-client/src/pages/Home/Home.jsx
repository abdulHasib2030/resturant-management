import React from 'react';
import Banner from '../../components/Banner';
import Category from '../../components/Category';
import PopularMenu from '../../components/PopularMenu';
import Featured from '../../components/Featured';
import Testimonials from '../../components/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;