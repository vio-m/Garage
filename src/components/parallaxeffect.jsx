import styled from 'styled-components';


const ParallaxContainer = styled.div`
    overflow-x: hidden;
    overflow-y: scroll;
    height: 75vh;
    perspective: 1px;
    transform-style: preserve-3d;
`


const Header = styled.header`
  position: relative;
  min-height: 100vh;
  width: 100%;
  transform-style: inherit;
  z-index: -1;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    display: block;
    background: url('src/assets/v8.avif') top center;
    background-size: cover;
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
    background: #fafafa;
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
    height: 100vh;
    background-color: #fafbfc;
    padding: 20px;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        margin-bottom: 20px;
        font-size: 48px;
        text-transform: uppercase;
        letter-spacing: 5px;
        font-weight: 700;
    }
    
    p {
        margin-bottom: 10px;
        line-height: 1.5;
        text-align: center;
    }
`;

const ParallaxEffect = () => {
  return (
    <ParallaxContainer>
      <Header style={{ transform: 'translateZ(-1px)' }}>
        <H1>Services</H1>
      </Header>
      <Section className="section1" style={{ transform: 'translateZ(0)' }}>
        <ServicesWrapper>
            <p> Oil changes: Regular oil changes are essential for maintaining 
                the health of your engine. An auto repair shop can change your 
                oil and filter, and check other fluids and parts to ensure your 
                car is running smoothly.</p>
            <p> Brake repairs: Your brakes are one of the most important safety 
                features on your car. An auto repair shop can perform routine
                 maintenance on your brakes, such as replacing brake pads or 
                 rotors, as well as diagnose and repair more complex brake issues.</p>
            <p> Tire services: Your tires are essential for the safe operation of 
                your vehicle. An auto repair shop can provide a range of tire 
                services, including tire rotations, balancing, and replacements.</p>
            <p> Engine diagnostics: If your car is experiencing engine problems,
                 an auto repair shop can perform diagnostic tests to determine the
                  cause of the issue. This can include checking for error codes,
                   inspecting engine components, and running performance tests.</p>
            <p> Suspension and steering repairs: The suspension and steering 
                system of your car is responsible for providing a smooth ride and 
                easy handling. An auto repair shop can diagnose and repair issues 
                with your suspension and steering, such as worn-out shocks or 
                struts, broken steering components, and more.</p>
        </ServicesWrapper>
      </Section>
      <Section className="section2" style={{ transform: 'translateZ(-2px)' }}>
        <H1>Section w/ parallax effect</H1>
      </Section>
    </ParallaxContainer>
  );
};

export default ParallaxEffect;