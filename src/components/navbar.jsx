import styled from "styled-components";
import { useState, useEffect, useContext } from 'react';
import { ChatContext } from './ChatContext';

const NavbarWrapper = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    background-color: #363946;
    z-index: 1000;
    transition: height 0.3s ease-in-out;

    a {
        color: white;
        text-decoration: none;
    }
    
    &.scrolled {
        height: 10px;
        background-color: rgba(54, 57, 70, 0.3); /* is #363946 in rgba*/
        a {
            display: none;
        }
        button {
            display: none;
        }
        &:hover {
            height: 80px;
            background-color: rgba(54, 57, 70, 0.8);
            a {
                display: inline-block;
            }
            button {
                display: inline-block;
            }
        }
    }
`;
const Container = styled.div`
    font-size: 16px;
    font-weight: 900;
    color: #fff;
`;
const Link = styled.a`
    color: white;
    text-decoration: none;
    padding: 10px;
`;
const Button = styled.button`
    background-color: transparent;
    border: none;
    text-decoration: none;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: 900;
`;

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { chatActive, setChatActive } = useContext(ChatContext);
    
    useEffect(() => {
        const handleScroll = () => {
          if (window.pageYOffset > 0) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <NavbarWrapper className={isScrolled ? 'scrolled' : ''}>
            <Container>
                <Link href="/">AutoFixer</Link>
                <Link href="#services">Services</Link>
                <Link href="#faq">FAQ</Link>
                <Button onClick={() => setChatActive(!chatActive)}>Chat</Button>
            </Container>
        </NavbarWrapper>
    )
}

export default Navbar;