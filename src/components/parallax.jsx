import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const ParallaxContainer = styled.div.attrs({
    id: 'parallax'
  })`
  display: flex; 
  align-items: center; 
  height: 75vh;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: url('src/assets/v8.avif');
  background-size: cover; /* 100% 100%; */
  background-attachment: fixed; 

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1; 
  }

  & > div {
    position: relative;
    width: 100%;
    background-color: rgba(0,0,0,0.0);
    color: white;
    transform: translateY(0%); 
    z-index: 1;
    padding: 50px;
    display: flex;
    justify-content: space-around;
  }
`;

const Square = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  transform: rotate(45deg);
  border: 10px solid white;
  border-radius: 0;
  opacity: 0.5;
  box-sizing: border-box;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  width: 100%;
  text-align: center;
  color: white;
  font-size: 32px;
  text-transform: uppercase;
`;

const Parallax = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      const scrollOffset = container.scrollTop;
      container.style.backgroundPositionY = `${-scrollOffset}px`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ParallaxContainer ref={containerRef}>
      <div>
        <Square>
          <TextContainer>
            <>FAIR AND TRANSPARENT PRICING</>
          </TextContainer>
        </Square>
        <Square>
          <TextContainer>
            <>HAPPINESS GUARANTEED</>
          </TextContainer>
        </Square>
        <Square>
          <TextContainer>
            <>WE MAKE IT EASY</>
          </TextContainer>
        </Square>
      </div>
    </ParallaxContainer>
  );
};

export default Parallax;