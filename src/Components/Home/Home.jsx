import React from 'react';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import Gallery from '../Gallery/Gallery';
import Cheif from '../Cheif/Cheif';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Cheif/>
            <AboutUs/>
            <Gallery/>
        </div>
    );
};

export default Home;