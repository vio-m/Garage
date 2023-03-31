import styled from "styled-components";
import { useState, useEffect } from "react";
import map from "../assets/map.png"

const FooterWrapper = styled.footer`
    position: fixed;
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
`;
const MapImage = styled.img`
  flex: 1;
  height: 100%;
  object-fit: cover;
`;


function Footer() {
    const [showFooter, setShowFooter] = useState(false);
    const contactInfo = {
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "(123) 456-7890",
        address: "123 Main St, Anytown USA",
    };

    
    useEffect(() => {
        const handleScroll = () => {
        const scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight =
            document.documentElement.scrollHeight || document.body.scrollHeight;
        const clientHeight =
            document.documentElement.clientHeight || window.innerHeight;
        const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

        if (scrolledToBottom) {
            setShowFooter(true);
        } else {
            setShowFooter(false);
        }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
        {showFooter && (
            <FooterWrapper >

            <ContactInfo>
                <h3>Contact Us</h3>
                <p>{contactInfo.name}</p>
                <p>{contactInfo.email}</p>
                <p>{contactInfo.phone}</p>
                <p>{contactInfo.address}</p>
            </ContactInfo>

            <MapImage src={map} alt="Map" />

            </FooterWrapper>
        )}
        </>
    );
}

export default Footer;
