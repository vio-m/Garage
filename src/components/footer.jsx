import styled from "styled-components";
import map from "../assets/map.png"
import { useEffect, useRef, useState } from "react";


const FooterWrapper = styled.footer`
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in-out;
`;
const ContactInfo = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #363946;
    color: #fff;
    opacity: 0;
    transition: opacity 1s ease-in-out;
`;
const MapContainer = styled.div`
    flex: 1;
    height: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
`;
const MapImage = styled.img`
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease-in-out;
`;


function Footer() {
    const contactInfo = {
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "(123) 456-7890",
        address: "123 Main St, Anytown USA",
    };

    const contactInfoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                contactInfoRef.current.style.opacity = 1;
              } else {
                contactInfoRef.current.style.opacity = 0;
              }
            },
            { threshold: 0.5 }
        );
    
        if (contactInfoRef.current) {
          observer.observe(contactInfoRef.current);
        }
    
        return () => {
          if (contactInfoRef.current) {
            observer.unobserve(contactInfoRef.current);
          }
        };
    }, []);

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };


    return (
        <>
            <FooterWrapper >

                <ContactInfo ref={contactInfoRef}>
                    <h3>Contact Us</h3>
                    <p>{contactInfo.name}</p>
                    <p>{contactInfo.email}</p>
                    <p>{contactInfo.phone}</p>
                    <p>{contactInfo.address}</p>
                </ContactInfo>

                <MapContainer
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <MapImage
                        src={map}
                        alt="Map"
                        style={{ transform: isHovered ? "scale(4)" : "scale(3)" }}
                    />
                </MapContainer>

            </FooterWrapper>
        </>
    );
}

export default Footer;


/*

*/