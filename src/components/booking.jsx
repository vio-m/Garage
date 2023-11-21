import { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {QRCodeSVG} from 'qrcode.react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const Wrapper = styled.section.attrs({
    id: 'booking'
  })`
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(../src/assets/dials.jpg) center center no-repeat;
    background-size: cover;
    background-color: #fff;
    height: 40rem;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        height: auto;
        padding: 30px 0px 30px 0px;
    }
`
const LeftContainer = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const RightContainer = styled.div`
    position: relative;
    flex: 1;
    height: 100%;
    color: white;
    padding-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
        padding-top: 50px;
    }
    .grid {
        display: grid;
        grid-template-columns: 250px 250px;
    }
    h4 {
        transition: transform 0.3s;
    }
    .grid > div:hover {
        /*cursor: pointer;*/
        padding-left: 2px;
    }
    @media screen and (max-width: 1000px) {
        h1 {
            padding-top: 20px;
        }
        .grid {
            display: flex;
            flex-direction: column;
        }
    }
    @media screen and (max-width: 768px) {
        .grid {
            display: grid;
            grid-template-columns: 250px 250px;
        }
    }
`
const ConfirmationContainer = styled.div`
    color: white;
    width: 465px;
    padding: 60px 20px 60px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

`;
const QRCode = (value) => {
    return (
        <QRCodeSVG value={value} size={256} includeMargin={true}/>
    );
};
const Form = styled.form`
    width: 465px;
    padding: 60px 20px 60px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    color: white;
    background-color: #D81324; /* RED */
    h4 {
        margin-bottom: 0px;
    }
`;
// DATE SELECT
const DatePickerContainer = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 10;
`;
const DatepickerStyled = styled(DatePicker)`
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
`;
// SERVICE SELECT
const ServiceSelectContainer = styled.div.attrs({
    id: 'services'
})`
    width: 100%;
    height: 40px;
    position: relative; 
    z-index: 1;
    border: none;
    background-color: #fff;
`;
const ExButton = styled.button.attrs({
    className: 'button'
})`
    width: ${({ buttonCount, isSelected, index }) =>
        isSelected ? "100%" : `${(100 / (buttonCount + 1))*(index + 1)}%`};
    height: 100%;
    margin-bottom: 10px;
    border: 4px solid #fff;
    padding-right: 15px;
    background-color: ${({ isSelected }) => isSelected ? "#0B2154" : "#fff"};
    color: ${({ isSelected }) => isSelected ? "#fff" : "#000"};
    transition: all 0.3s ease-in-out;
    position: absolute;
    left: 0; 
    text-align: right;
    z-index: ${({ index, buttonCount }) => buttonCount - index}; 

    &:hover {
        cursor: pointer;
        background-color: #28e;
    }
    &:active {
        transform: translateY(1px);
    }
`;
// CONTACT TOGGLE 
const ContactContainer = styled.div.attrs({
    id: 'contact'
  })`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    border: none;
    background-color: rgba(255, 255, 255, 1);
`;
const Input = styled.input`
    flex: 1;
    padding: 10px;
    border: none;
    overflow: hidden;
    outline: none;
    background-color: transparent;
`;
const ToggleButton = styled.button`
    position: absolute;
    top: 50%;
    width: 32%;
    left: ${({ active }) => (active ? '33%' : '0')};
    transform: translateY(-50%);
    background-color: #0B2154; /*old color #363946;*/
    color: white;
    cursor: pointer;
    border: 4px solid #fff;
    padding: 6px 20px;
    transition: left 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    & > svg {
        padding-left: 5px;
        padding-right: 5px;
        font-size: 14px;
    }
    & > svg:hover {
        font-size: 13px;
    }
  `;
const SubmitButton = styled.button`
    flex: 1;
    padding: 5px 15px;
    background-color: #0B2154;  /* BLUE */
    color: white;
    border: 4px solid #fff;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #28e; /* LIGHT BLUE */
    }
`;


function AppointmentBooking() {
    const [date, setDate] = useState(new Date());
    const buttonLabels = ["Oil", "Brakes", "Tires", "Engine", "Other"];
    const [selectedButton, setSelectedButton] = useState(null);
    const [activeInput, setActiveInput] = useState('email');
    const [confirmationCode, setConfirmationCode] = useState(null);
    const formRef = useRef();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        date: '',
        service: '',
        email: '',
        phone: ''
    });
    const handleDateChange = date => {
        setDate(date);
        const formattedDate = date.toGMTString();
        setFormData((prevData) => ({
            ...prevData,
            date: formattedDate,
        }));
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };
    const ServiceSelectButtons = ({ buttons }) => {
        const handleClick = (buttonIndex, buttonLabel) => {
            setSelectedButton(selectedButton === buttonIndex ? null : buttonIndex);
            setFormData((prevData) => ({
                ...prevData,
                service: buttonLabel,
            }));
        };
        return (
            <>
                {buttons.map((buttonLabel, index) => (
                    <ExButton
                        key={index}
                        index={index}
                        buttonCount={buttons.length}
                        isSelected={selectedButton === index}
                        onClick={(e) => {
                                e.preventDefault();
                                handleClick(index, buttonLabel);
                            }}
                    >
                        {buttonLabel}
                    </ExButton>
                ))}
            </>
        );
    };
    const handleToggle = () => {
        setActiveInput(activeInput === 'email' ? 'phone' : 'email');
    };
    const generateConfirmationCode = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const codeLength = 4;
        let confirmationCode = '';
      
        for (let i = 0; i < codeLength; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          confirmationCode += characters.charAt(randomIndex);
        }
      
        return confirmationCode;
    };
    const handleFormSubmit = useCallback(async(e) => {
        e.preventDefault();
        try {
            const mockResponse = { status: 'success', message: 'Form data submitted successfully' };
            const mockApiResponse = new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ ok: true, json: () => Promise.resolve(mockResponse) });
                }, 500);
            });
            const response = await mockApiResponse;

            if (response.ok) {
                const code = generateConfirmationCode();
                setConfirmationCode(code);
                setFormSubmitted(true);
                //console.log("ok: ", formData)
            } else {
                setConfirmationCode("ERROR");
                setFormSubmitted(true);
            }
        } catch (error) {
            console.error('An error occurred while submitting the form:', error);
        }
    }, [formData]);

    return (
        <Wrapper>
            <LeftContainer>
            {formSubmitted ? (
                <ConfirmationContainer>
                    <p>Confirmation Code:</p>
                    <QRCode value={confirmationCode}/>
                </ConfirmationContainer>
            ) : (
                <Form ref={formRef} onSubmit={handleFormSubmit}>

                    <h2>Book For A Service</h2>
                    <h4>Select a Date:</h4>
                    <DatePickerContainer>
                        <DatepickerStyled
                            selected={date}
                            onChange={handleDateChange}
                            showTimeSelect
                            dateFormat="dd-MM-yyyy p"
                            placeholderText="Click to select a date"
                        />                   
                    </DatePickerContainer>

                    <h4>Select a Service:</h4>
                    <ServiceSelectContainer>
                        <ServiceSelectButtons buttons={buttonLabels} />
                    </ServiceSelectContainer>

                    <h4>Your Name or Email:</h4>
                    <ContactContainer>
                        <Input type="email" 
                            name="email" 
                            placeholder="Email" 
                            value={formData.email} 
                            onChange={handleChange}/>
                        <Input type="phone" 
                            name="phone" 
                            placeholder="Phone number" 
                            value={formData.phone} 
                            onChange={handleChange}/>
                        <ToggleButton type="button" 
                            active={activeInput === 'email'} 
                            onClick={handleToggle}>
                            <ChevronLeftIcon /> <ChevronRightIcon />
                        </ToggleButton>
                        <SubmitButton >Submit</SubmitButton>
                    </ContactContainer>
                    
                </Form>
            )}
            </LeftContainer>
            <RightContainer>
                <h1>We Service All Makes And Models</h1>
                <div className='grid'>
                    <div>
                        <h4><i class='fa fa-car-side fa-2x me-3' style={{ marginRight: '10px' }}></i>Diagnostic Test</h4>
                    </div>
                    <div>
                        <h4><i class='fa fa-car fa-2x me-3' style={{ marginRight: '10px' }}></i>Engine Servicing</h4>
                    </div>
                    <div>
                        <h4><i class='fa fa-cog fa-2x me-3' style={{ marginRight: '10px' }}></i>Tires Replacement</h4>
                    </div>
                    <div>
                        <h4><i class='fa fa-oil-can fa-2x me-3' style={{ marginRight: '10px' }}></i>Oil Changing</h4>
                    </div>
                </div>
            </RightContainer>
        </Wrapper>
    );
}

export default AppointmentBooking;



/*

*/