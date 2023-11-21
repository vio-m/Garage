import styled from "styled-components";
import map from "../assets/map.png"
import { useEffect, useRef, useState } from "react";
import Socialmedia from './socialmedia'

const FooterWrapper = styled.footer`
    position: relative;
    font-family: "Barlow",sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(rgba(0, 0, 0, .9), rgba(0, 0, 0, .9)), url(../src/assets/pitstop.jpg) center center no-repeat;
    background-size: cover;
    background-color: #363946;
    color: #fff;
`;
const Container = styled.div`
    display: flex;
    justify-content: space-around;
    width: 80%;
    padding-top: 30px;
    padding-bottom: 20px;
    @media screen and (max-width: 768px) {
        width: 90%;
    }
    @media screen and (max-width: 900px) {
        width: 100%;
    }
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`
const ContactInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    padding-left: 10%;
    h3 {
        margin-bottom: 25px;
    }
    div {
        margin-bottom: 10px;
    }
    @media screen and (max-width: 768px) {
        padding-left: 50px;
    }
    @media screen and (max-width: 600px) {
        padding-left: 50px;
        h3 {
            margin-top: 50px;
        }
    }
`;
const OpeningHours = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    padding-left: 10%;
    h3 {
        margin-bottom: 25px;
    }
    div {
        margin-bottom: 5px;
        font-weight: 600;
    }
    span {
        font-size: 16px;
        margin-bottom: 20px;
        font-weight: 300;
    }
    @media screen and (max-width: 768px) {
        padding-left: 0px;
    }
    @media screen and (max-width: 600px) {
        padding-left: 50px;
    }
`
const Copy = styled.div`
    min-height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-size: 14px;
    span {
        background-color: grey;
        width: 400px;
        height: 1px;
    }
    @media screen and (max-width: 600px) {
        font-size: 12px;
        span {
            width: 300px;
        }
    }
`
const Top = styled.button`
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: transparent;
    border: 3px solid white;
    color: white;
    text-align: center;
    font-size: 23px;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover {
        bottom: 23px;
    }
`


function Footer() {
    const contactInfo = {
        name: " Auto-Fixxer LLC",
        email: " JohnDoe@example.com",
        phone: " (123) 456-7890",
        address: " 123 Main St, Anytown USA",
    };
    const scrollToTop = () => {
        console.log("SCROLLING")
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    
    return (
        <>
            <FooterWrapper >
                <Container>
                    <ContactInfo>
                        <h3>Contact</h3>

                        <div><i class="fa fa-map-marker-alt me-3" style={{ marginRight: '10px' }}></i>{contactInfo.address}</div>
                        <div><i class="fa fa-phone-alt me-3" style={{ marginRight: '10px' }}></i>{contactInfo.phone}</div>
                        <div><i class="fa fa-envelope me-3" style={{ marginRight: '10px' }}></i>{contactInfo.email}</div>   
                        <div><i class="fa fa-building me-3" style={{ marginRight: '10px' }}></i>{contactInfo.name}</div>                    
                    
                        <Socialmedia />
                    </ContactInfo>

                    <OpeningHours>
                        <h3>Opening Hours</h3>

                        <div>Monday - Friday:</div>
                        <span><i class="far fa-clock text-primary me-2" style={{ marginRight: '10px' }}></i>09.00 AM - 09.00 PM</span>
                        <div>Saturday:</div>
                        <span><i class="far fa-clock text-primary me-2" style={{ marginRight: '10px' }}></i>09.00 AM - 02.00 PM</span>
                        <div>Sunday:</div>
                        <span><i class="fa fa-ban" style={{ marginRight: '10px' }}></i>CLOSED</span>
                    </OpeningHours>
                </Container>

                <Copy>
                    <span></span>
                    <div>&#169; 1989  CodeGarage  &#8226;  All Rights Reserved. </div>  
                </ Copy>

                <Top onClick={scrollToTop}>
                    <i class="fa-solid fa-chevron-up"></i>
                </Top>

            </FooterWrapper>
        </>
    );
}

export default Footer;


/*






--------------------------------------------------------------

    // Back to top button
	window.addEventListener('scroll', function() {
	    var backToTopButton = document.querySelector('.back-to-top');
	    if (window.pageYOffset > 100) {
		backToTopButton.style.display = 'block';
	    } else {
		backToTopButton.style.display = 'none';
	    }
	});

	document.querySelector('.back-to-top').addEventListener('click', function() {
	    var scrollToTop = function() {
		var position = document.body.scrollTop || document.documentElement.scrollTop;
		if (position > 0) {
		    window.requestAnimationFrame(scrollToTop);
		    window.scrollTo(0, position - position / 8);
		}
	    };
	    scrollToTop();
	});
*/