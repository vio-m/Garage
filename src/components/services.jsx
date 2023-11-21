import styled from "styled-components";
import { useState } from 'react';


const ServicesWrapper = styled.section.attrs({
    id: 'services'
})`
    height: 10vh;

    font-weight: 900;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(255,255,255,0.7);
    h2 {
        margin-bottom: 20px;
        font-size: 48px;
        text-transform: uppercase;
        letter-spacing: 5px;
        font-weight: 700;
    }
    
`;
const ServicesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media screen and (max-width: 768px) {
        overflow: scroll;
    }
`;
const Service = styled.div`
    width: 200px;
    height: 50px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    /*cursor: pointer;*/
    .slide {
        position:absolute;
        width: 200px;
        left: -200px;
        height: 50px;
        border-right: 3px solid transparent;
        transition: all .8s ease-in-out;
    }
    ::before {
        content: ${(props) => `'${props.beforeContent}'`};
        opacity: 1;
        transition: opacity .8s ease-in-out;
        position: absolute;
    }
    ::after {
        content: attr(data-content);
        opacity: 0;
        transition: opacity .8s ease-in-out;
        position: absolute;
    }
    :hover {
        &::before {
            opacity: 0;
        }
        &::after {
            opacity: 1;
        }
        .slide {
            border-right: 3px solid #28e;
            left: 0px;
        }
    }
`;


function Services () {
    
    return (
        <ServicesWrapper>
            <ServicesContainer>
                <Service
                    beforeContent="Oil changes"
                    data-content="Pricing from $10"
                    >
                    <div className="slide"></div>
                </Service>
                <Service
                    beforeContent="Brake repairs"
                    data-content="Rates from $40"
                    >
                    <div className="slide"></div>
                </Service>
                <Service
                    beforeContent="Tire services"
                    data-content="As low as $15"
                    >
                    <div className="slide"></div>
                </Service>
                <Service
                    beforeContent="Engine diagnostics"
                    data-content="Free of charge*"
                    >
                    <div className="slide"></div>
                </Service>
            </ServicesContainer>
        </ServicesWrapper>
    );
};

export default Services;

/*

*/