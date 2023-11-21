import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import './carousel.css'
import 'animate.css/animate.min.css';


const CarouselContainer = styled.section.attrs({
    id: 'carousel'
})`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
    overflow: hidden;

`;
const Arrows = styled.div`
    position: absolute;
    left: 5%;
    display: flex;
    flex-direction: column;
    gap: 10rem;
`

const L = styled.div.attrs({
    className: 'animate__animated animate__slideInLeft'
})`
    width: 50px;
    height: 50px;
    border-radius: 30px;
    background-color: transparent;
    border: 3px solid white;
    color: white;
    font-size: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    animation-duration: 2s;
    z-index: 9999;
    :hover {
        color: #28e;
    }
`
const R = styled.div.attrs({
    className: 'animate__animated animate__slideInLeft'
})`
    width: 50px;
    height: 50px;
    border-radius: 30px;
    background-color: transparent;
    border: 3px solid white;
    color: white;
    font-size: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    animation-duration: 2s;
    z-index: 9999;
    :hover {
        color: #28e;
    }
`
// styled components interfere with the index of map function !!!
const Slide = ({ className, children }) => {
    return (
        <div className={className}>
        {children}
      </div>
    );
};
const Title = styled.h1.attrs({
    className: 'animate__animated animate__slideInRight'
})`
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 10px;
    animation-duration: 2s;
    span {
        color: #28e;
    }
`;
const Description = styled.p.attrs({
    className: 'animate__animated animate__slideInRight '
})` 
    line-height: 1.5;
    text-align: start;
    animation-duration: 3s;
`;


const Carousel = () => {

    const slides = [
        {
        title: (<div>
            Qualified <span>Car Repair</span> Service Center
        </div>),
        description: 'Description for the first slide. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et.',
        },
        {
        title: (<div>
                Qualified <span>Car Wash</span> Service Center
            </div>),
        description: 'Description for the second slide. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et.',
        },
        {        
        title: (<div>
            <span>Certified</span> and <span>Award Winning</span> Car Repair Service Provider
        </div>),
        description: 'Description for the third slide. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et.',
        },
    ];
    const length = slides.length;    
    const [current, setCurrent] = useState(0);
    
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }


    useEffect(() => {
        //
    }, [current]);

    return (

        <CarouselContainer>
            <Arrows>
                <L onClick={prevSlide}>
                    <i className="fa fa-chevron-left" aria-hidden="true"></i>
                </L>
                <R onClick={nextSlide}>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </R>
            </Arrows>

            {slides.map((slide, index) => (
                <Slide key={index} className={index === current ? 'animate__animated animate__slideInRight slide' : 'none'}>
                    <Title>{slides[index].title}</Title>
                    <Description>{slides[index].description}</Description>
                </Slide>
            ))}

        </CarouselContainer>

    );
};

export default Carousel;



/*

*/