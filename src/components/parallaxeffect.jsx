// parallaxeffect.jsx
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Home from './home';
import Carousel from './carousel';
import Services from './services';

import Faq from './faq'
import Brands from './brands'
import AppointmentBooking from './booking'
import Footer from './footer'


const ParallaxContainer = styled.div.attrs({
    id: 'parallax'
  })`
    overflow: scroll;
    height: 100vh;
    /**/perspective: 4px;
    transform-style: preserve-3d;
    background-image: url('src/assets/v8.avif');
    background-size: cover;
`


const ParallaxEffect = () => {


    return (
        <ParallaxContainer>



            <Carousel />
            
            <Services />

            <AppointmentBooking />

            <Faq />

            <Brands />

            <Footer />
            
        </ParallaxContainer>
    );
};

export default ParallaxEffect;




/*
            <Home />


<Socialmedia />
*/