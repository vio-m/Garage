import styled from "styled-components";


function Services() {
    const ServicesWrapper = styled.section.attrs({
        id: 'services'
      })`
        height: 100vh;
        background-color: #fafbfc;
        padding: 20px;
        padding-top: 80px;
      `;

    return (
        <ServicesWrapper>
            <h2>Services</h2>

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
    )
}

export default Services