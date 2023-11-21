import styled from "styled-components";
import { useState, useEffect, useContext, useRef } from 'react';
import { ChatContext } from './ChatContext';


const NavbarWrapper = styled.nav.attrs({
    id: 'navbar'
  })`
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: end;
    height: 60px;
    background-image: url('src/assets/v8nav.webp');
    border-bottom: 1px solid white;
    z-index: 1000;
    transition: height 0.3s ease;

    :hover {
        height: 65px;
    }

    div > a, button {
        color: white;
        font-weight: 900;
        text-transform: uppercase;  
        text-decoration: none;  
        cursor: pointer;
        padding-left: 40px;
        padding-right: 40px;    
    }

    @media screen and (min-width: 1632px) {
        background-size: cover;
    }

    &.expanded {
        background-image: none;
        backdrop-filter: blur(10px);
        transition: background 0.3s ease;
        height: 100%;
        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 auto;
        }
        div > a, button {
            font-size: 24px;
            letter-spacing: 3px;
            padding: 30px;
        }
    }
    
`;
const Container = styled.div`
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
const Burger = styled.div`
    position: absolute;
    top: 25%;
    right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 30px;
    cursor: pointer;
    /*filter: blur(1px);
    transition: all 0.3s;*/

    span {
        width: 100%;
        height: 3px;
        border-radius: .25rem;
        background-color: #f4f4f4;
        transition: transform 0.3s;
    }
    &:hover {
        span:nth-of-type(1) {
          transform: translateX(-3px);
        }
        span:nth-of-type(3) {
          transform: translateX(3px);
        }
    }
    @media screen and (min-width: 768px) {
        display: none;
    }
}
`;
const Close = styled.span`
    position: absolute;
    top: 20px;
    right: 25px;
    font-size: 30px;
    color: white;
    cursor: pointer;
    filter: blur(1px);
    transition: all 0.3s;

    ::before {
      content: 'X';
    }

    :hover {
        transform: scale(1.2);
        filter: blur(0px);
    }

    @media screen and (min-width: 768px) {
        display: none;
    }
`
const Link = styled.a`
    :hover {
        color: #28e;
    }
`;
const Button = styled.button`
    background-color: transparent;
    border: none;
    font-size: 16px;
    :hover {
        color: #28e;
    }
`;


function Navbar({ servicesRef, faqRef }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const { chatActive, setChatActive } = useContext(ChatContext);
    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };
    const scrollToSection = (ref) => {
        //
        const section = document.getElementById(ref);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            if (isExpanded==true){
                toggleExpanded();
            }
        }
    };


    return (
        <NavbarWrapper className={isExpanded ? 'expanded' : ''}>
            <Container>
                <Link href="/">GaRage</Link>
                <Link onClick={() => scrollToSection('booking')}>Booking</Link>
                <Link onClick={() => scrollToSection('faq')}>FAQ</Link>
                <Button onClick={() => setChatActive(!chatActive)}>Chat</Button>
            </Container>

            {isExpanded ? (
                <Close  onClick={toggleExpanded} />
            ) : (
                <Burger onClick={toggleExpanded}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Burger>
            )}
        </NavbarWrapper>
    )
}

export default Navbar;

/*

*/