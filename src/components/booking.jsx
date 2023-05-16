import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const BookingContainer = styled.div.attrs({
    id: 'booking'
  })`
    display: flex;
    align-items: center;
    background-color: #363946;
    height: 40rem;
`
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

    // service select
const ServiceSelectContainer = styled.div.attrs({
    id: 'services'
  })`
    width: 80%;
    height: 40px;
    margin-top: 50px;
    position: relative; 
    border: 3px solid #363946;
    border-radius: 20px;
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
    border-radius: 20px;
    padding-right: 15px;
    background-color: ${({ isSelected }) => isSelected ? "#363946" : "#fff"};
    color: ${({ isSelected }) => isSelected ? "#fff" : "#000"};
    transition: width 0.3s ease-in-out;
    position: absolute;
    left: 0; 
    text-align: right;
    z-index: ${({ index, buttonCount }) => buttonCount - index}; 
    &:hover {
        cursor: pointer;
    }
    &:active {
        transform: translateY(1px);
    }
  `;
  const ExpandableButtonGroup = ({ buttons }) => {
    const [selectedButton, setSelectedButton] = useState(null);
    const buttonCount = buttons.length;

    const handleClick = (buttonIndex) => {
      setSelectedButton(selectedButton === buttonIndex ? null : buttonIndex);
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
                            handleClick(index);
                            console.log(buttonLabel, index)
                        }}
                >
                    {buttonLabel}
                </ExButton>
            ))}
        </>
    );
  };  


    // day select
const CalendarWrapper = styled.div`
    width: 80%;
    height: 40px;
    margin-top: 30px;
    position: relative;
    border: 3px solid #363946;
    border-radius: 20px;
    background-color: #fff;
    `;
const StyledDays = styled.div`
    height: 100%;
    outline: none;
    display: flex;
    justify-content: space-between;
    overflow-x: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
    button {
        background-color: transparent;
        border-radius: 20px;
        border: 4px solid #fff;
        padding: 0px 20px;
    }
    button:hover {
        cursor: pointer;
    }
    .selected {
        background-color: #363946;
        color: white;
    }
  
    /* Make the component draggable in webkit-based browsers */
    &::-webkit-scrollbar-thumb {
      background-color: #c9c9c9;
      border-radius: 50px;
    }
  
    &:active::-webkit-scrollbar-thumb {
      background-color: #9c9c9c;
    }
  
    /* Make the component draggable in Firefox */
    scroll-behavior: smooth;
    scrollbar-color: #c9c9c9 transparent;
    scrollbar-width: thin;
  
    /* Style the draggable thumb in Firefox */
    &::-moz-scrollbar-thumb {
      background-color: #c9c9c9;
      border-radius: 50px;
    }
  
    &:active::-moz-scrollbar-thumb {
      background-color: #9c9c9c;
    }
  `;


    // hour select
const RangeInputWrapper = styled.div`
    width: 80%;
    height: 20px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    position: relative;
    border: 3px solid #363946;
    border-radius: 20px;
`;

const RangeInput = styled.input.attrs(props => ({
    type: 'range',
    min: '9',
    max: '16.5',
    step: '0.5',
    value: props.value
  }))`
  -webkit-appearance: none;
  position: relative;
  bottom: 26px;
  background-color: #f3f3f3;
  border-radius: 5px;
  outline: none;

  &::-moz-range-thumb {
    width: 48px;
    background-color: #363946;
    border: 3px solid #fff;
    border-radius: 20px;
    cursor: grab;
  }
  &::-moz-range-thumb:active {
    cursor: grabbing;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 48px;
    background-color: #fafafa;
    border-radius: 0%;
    cursor: grab;
  }
  &::-webkit-slider-thumb:active {
    cursor: grabbing;
  }
`;
const RangeInputValue = styled.span`
    display: inline-block;
    position: relative;
    top: -29px;
    width: 80px;
    height: 20px;
    border: 1px solid #ccc;
    border-radius: 0px;
    text-align: center;
    line-height: 25px;
    font-size: 14px;
    font-weight: bold;
    background-color: #fff;
    color: #000;
    margin-left: 5px;
    margin-bottom: 3px;
    opacity: 0;

    &.active {
        opacity: 1;
    }

    &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #ccc transparent transparent transparent;
  }
`;

    // contact 
const ContactContainer = styled.div.attrs({
    id: 'contact'
  })`
  width: 80%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  border-radius: 20px;
  background-color: #fff;
`;

const Input = styled.input`
  width: 50%;
  padding: 10px;
  border: none;
  overflow: hidden;
  outline: none;
  background-color: transparent;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 50%;
  width: 50%;
  left: ${({ active }) => (active ? '50%' : '0')};
  transform: translateY(-50%);
  background-color: #363946;
  color: white;
  cursor: pointer;
  border-radius: 20px;
  border: 4px solid #fff;
  padding: 5px 20px;
  transition: left 0.3s ease;
  & > svg {
    font-size: 14px;
  }
  `;


function AppointmentBooking() {
    const buttonLabels = ["Oil", "Brakes", "Tires", "Engine"];
    const [isSelected, setIsSelected] = useState(false);
    const [width, setWidth] = useState(200);
    const inputRef = useRef(null);
    const [inputWidth, setInputWidth] = useState(0);
    const [isRangeInputActive, setIsRangeInputActive] = useState(false);
    const [value, setValue] = useState(9);
    const [today, setToday] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState();
    const [activeInput, setActiveInput] = useState('email');
    const [service, setService] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const toggleSelected = () => {
        setIsSelected(!isSelected);
        setWidth(isSelected ? 200 : 300);
    };

    const renderDays = () => {
        const days = [];

        for (let i = 0; i < 7; i++) {
          const day = new Date(today);
          day.setDate(today.getDate() + i);
          days.push(day);
        }
        
        return days.map((day) => {
          const isWeekend = day.getDay() === 0 || day.getDay() === 6;
          const label = day.toDateString() === new Date().toDateString() ? "TODAY" : day.getDate();

          
          return (
            <button
              key={day}
              onClick={(e) => {e.preventDefault(); setSelectedDate(label)}}
              className={selectedDate === label ? "selected" : ""}
              disabled={isWeekend}
            >
              {label}
            </button>
          );
        });
    };

    useEffect(() => {
        if (inputRef.current) {
            setInputWidth(inputRef.current.offsetWidth);
        }
        const handleResize = () => {
            if (inputRef.current) {
                setInputWidth(inputRef.current.offsetWidth);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    const handleRangeChange = (event) => {
        setValue(parseFloat(event.target.value));
    }
    const handleRangeInputMouseDown = () => {
        setIsRangeInputActive(true);
      };
    const handleRangeInputMouseUp = () => {
        setIsRangeInputActive(false);
    };
    function formatTime(value) {
        const date = new Date();
        const hours = Math.floor(value);
        const minutes = Math.round((value - hours) * 60);
        date.setHours(hours);
        date.setMinutes(minutes);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    function handleSubmit(event) {
            event.preventDefault();
            console.log("appointment confirmed")    
    }
    const handleToggle = () => {
        setActiveInput(activeInput === 'email' ? 'phone' : 'email');
    };

    return (
        <BookingContainer>
            <Form onSubmit={handleSubmit}>
                
                <ServiceSelectContainer>
                    <ExpandableButtonGroup buttons={buttonLabels}/>
                </ServiceSelectContainer>

                <CalendarWrapper>
                    <StyledDays>{renderDays()}</StyledDays>
                </CalendarWrapper>

                <RangeInputWrapper>
                    <RangeInputValue
                        className={isRangeInputActive ? 'active' : ''}
                        style={{ left: `calc(${(value-9) * 12}%)` }}
                        >
                        {formatTime(value)}
                    </RangeInputValue>
                    <RangeInput 
                        ref={inputRef}
                        id="hour-select" 
                        name="hour-select" 
                        value={value}
                        onChange={handleRangeChange}
                        onMouseDown={handleRangeInputMouseDown}
                        onMouseUp={handleRangeInputMouseUp}
                    />
                </RangeInputWrapper>

                <ContactContainer>

                        <Input type="email" placeholder="Email" />
                        <Input type="tel" placeholder="Phone number" />
                        <ToggleButton active={activeInput === 'phone'} onClick={handleToggle}>
                            <ChevronLeftIcon />
                            <ChevronRightIcon />
                        </ToggleButton>

                </ContactContainer>
                

            </Form>
        </BookingContainer>
    );
}

export default AppointmentBooking;



/*
const RangeInputLabel = styled.label`
    opacity: 0;
`;
<RangeInputLabel htmlFor="hour-select"> - {value} - </RangeInputLabel>
                    

    <Label>
        Select a Service:
        <Select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">-- Please select --</option>
            <option value="Oil Change">Oil Change</option>
            <option value="Tire Rotation">Tire Rotation</option>
            <option value="Brake Repair">Brake Repair</option>
        </Select>
    </Label>

const Label = styled.label`
    margin: 10px 0;
    `;

const Input = styled.input`
    margin: 5px 0;
    padding: 5px;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    `;

const Select = styled.select`
    margin: 5px 0;
    padding: 5px;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    `;

const Button = styled.button`
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #007bff;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    &:hover {
        background-color: #0069d9;
    }
    `;


useEffect(() => {
    console.log("Selected date has changed:", selectedDate);
}, [selectedDate]);


<Label>
Select a Date:
<Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
</Label>
<Label>
Select a Time:
<Input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
</Label>
<Label>
Name:
<Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
</Label>
<Label>
Email:
<Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
</Label>
<Label>
Phone Number:
<Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
</Label>
<Button type="submit">Book Appointment</Button>


*/