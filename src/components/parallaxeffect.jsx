import styled from 'styled-components';


const ParallaxContainer = styled.div.attrs({
    id: 'parallax'
  })`
    overflow-x: hidden;
    overflow-y: scroll;
    height: 75vh;
    perspective: 4px;
    transform-style: preserve-3d;
    background-image: url('src/assets/v8.avif');
    background-size: cover; /* 100% 100%; */
`
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
const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-height: 100vh;
  width: 100%;
  transform-style: inherit;
  z-index: -1;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    display: block;
    //background: url('src/assets/v8.avif') top center;
    //background-size: cover;
    transform: translateZ(-1px) scale(2.1);
    min-height: 100%;
    z-index: -2;
  }
`;
const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  position: relative;
  transform-style: inherit;

  &.section1 {
    background: rgba(0,0,0,0.3);
    box-shadow: 0 0 20px #333;
    z-index: 1;

    & h1 {
      z-index: 3;
      transform: translate(-50%, -50%);
      box-shadow: none;

    }
  }

  &.section2 {
    &::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      display: block;
      background: url('src/assets/v8.avif') top center;
      background-size: cover;
      transform: translateZ(-.5px) scale(1.6);
      z-index: -1;
    }

    & h1 {
      transform: translateZ(-.3px) scale(1.3) translate(-39%, -39%);
      z-index: 3;
      background-color: rgba(0,0,0,0.3);
      color: white;
      width: 100%;
    }
  }
`;
const H1 = styled.h1`
  font-size: 4rem;
  text-align: center;
  position: absolute;
  padding: 1rem;
  background: #fafafa;
  box-shadow: 0 0 20px #333;
  top: 50%;
  left: 50%;
  transform: translateZ(-1px) scale(2) translate(-25%, -25%);
`;
const ServicesWrapper = styled.section.attrs({
    id: 'services'
})`
    height: 50vh;
    background-color: rgba(0,0,0,0);
    color: white;
    font-weight: 900;
    padding: 20px;
    padding-top: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    h2 {
        margin-bottom: 20px;
        font-size: 48px;
        text-transform: uppercase;
        letter-spacing: 5px;
        font-weight: 700;
    }     
`;
const Services = styled.div`
    width: 200px;
    height: 50px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

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
            border-right: 3px solid #34495e;
            left: 0px;
        }
    }
`;


const ParallaxEffect = () => {
  return (
    <ParallaxContainer>
      <Header style={{ transform: 'translateZ(-1px)' }}>
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
      </Header>
      <Section className="section1" style={{ transform: 'translateZ(0)' }}>
        <ServicesWrapper>
            <Services beforeContent="Oil changes" data-content="Pricing from $10">
                <div className="slide" ></div>
            </Services>    
            <Services beforeContent="Brake repairs" data-content="Rates from $10">
                <div className="slide" ></div>
            </Services>
            <Services beforeContent="Tire services" data-content="As low as $10">
                <div className="slide" ></div>
            </Services>
            <Services beforeContent="Engine diagnostics" data-content="Free of charge*">
                <div className="slide" ></div>
            </Services>
            <Services beforeContent="Suspension & steering" data-content="Starting at $10">
                <div className="slide" ></div>
            </Services>
        </ServicesWrapper>
      </Section>
      <Section className="section2" style={{ transform: 'translateZ(-2px)' }}>
        <H1>We'll Fix'er!</H1>
      </Section>
    </ParallaxContainer>
  );
};

export default ParallaxEffect;