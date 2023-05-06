import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const BookingContainer = styled.div.attrs({
    id: 'booking'
  })`
    border: 1px solid red;
    height: 50rem;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

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

const CalendarWrapper = styled.div`
    width: 50%;
    margin-top: 50px;
    background-color: #E9EFF4;
    `;
const StyledDays = styled.div`
    height: 1.5rem;
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
        border-radius: 0%;
        border: none;
        padding: 0px 20px;
    }
    button:hover {
        cursor: pointer;
    }
    .selected {
        background-color: #9c9c9c;
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



const RangeInputWrapper = styled.div`
    width: 50%;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
`;
const RangeInputLabel = styled.label`
    opacity: 0;
`;
const RangeInput = styled.input.attrs(props => ({
    type: 'range',
    min: '9',
    max: '16.5',
    step: '0.5',
    value: props.value
  }))`
  -webkit-appearance: none;
  width: 100%;
  height: 16px;
  background-color: #E9EFF4;
  border-radius: 0px;
  outline: none;
  margin-bottom: 16px;

  &::-moz-range-thumb {
    width: 48px;
    height: 16px;
    background-color: #fafafa;
    border-radius: 0%;
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

function AppointmentBooking() {
    const inputRef = useRef(null);
    const [inputWidth, setInputWidth] = useState(0);
    const [isRangeInputActive, setIsRangeInputActive] = useState(false);
    const [value, setValue] = useState(9);
    const [today, setToday] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState();
    const [service, setService] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        console.log("Selected date has changed:", selectedDate);
      }, [selectedDate]);

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
              onClick={() => {setSelectedDate(label); console.dir(label)}}
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


    return (
        <BookingContainer>
            <Form onSubmit={handleSubmit}>
                
                <Label>
                    Select a Service:
                    <Select value={service} onChange={(e) => setService(e.target.value)}>
                        <option value="">-- Please select --</option>
                        <option value="Oil Change">Oil Change</option>
                        <option value="Tire Rotation">Tire Rotation</option>
                        <option value="Brake Repair">Brake Repair</option>
                    </Select>
                </Label>

                

                <CalendarWrapper>
                    <StyledDays>{renderDays()}</StyledDays>
                </CalendarWrapper>

                <RangeInputWrapper>
                    <RangeInputLabel htmlFor="hour-select"> - {value} - </RangeInputLabel>
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

            </Form>
        </BookingContainer>
    );
}

export default AppointmentBooking;



/*


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