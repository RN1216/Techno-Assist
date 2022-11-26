import React from 'react';
import Services from '../../Services/Services/Services';
import About from '../About/About';
import Slider from './../../../Components/Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;