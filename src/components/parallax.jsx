import styled from 'styled-components';
import v8 from "../assets/v8.avif"



const ParallaxContainer = styled.div.attrs({
    id: 'parallax'
  })`
  height: 75vh;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: url('src/assets/v8.avif');
  background-size: cover;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: -1; /* add a negative z-index to make sure the pseudo-element is behind the content */
  }

  & > div {
    position: relative;
    height: 150%;
    background-color: rgba(0,0,0,0.5);
    color: white;
    transform: translateY(20%); /* adjust the transform property to move the child element down */
    z-index: 1;
    padding: 50px;
  }
`;

const Parallax = () => {
  return (
    <ParallaxContainer>
      <div>
      <h3>Services</h3>

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
      </div>
    </ParallaxContainer>
  );
};

export default Parallax;