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
    margin-top: 50px;
    padding: 0rem;
    border-radius: 0.5rem;
    background-color: #f9fafb;
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    `;

const CalendarButton = styled.button`
    width: 4rem;
    height: 1.5rem;
    border-radius: 0%;
    font-weight: bold;
    font-size: 0.875rem;
    outline: none;
    `;

const RangeInputWrapper = styled.div`
    width: 50%;
    margin-top: 50px;
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
    cursor: pointer;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 48px;
    background-color: #fafafa;
    border-radius: 0%;
    cursor: pointer;
  }
`;
const RangeInputValue = styled.span`
    display: inline-block;
    position: relative;
    width: 40px;
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
    const [value, setValue] = useState(9);
    const [service, setService] = useState('');
    const [date, setDate] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        if (inputRef.current) {
          setInputWidth(inputRef.current.offsetWidth);
        }
    }, []);

    const handleRangeChange = (event) => {
        setValue(parseFloat(event.target.value));
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
                    <CalendarButton active>Today</CalendarButton>
                    <CalendarButton>27</CalendarButton>
                    <CalendarButton active>28</CalendarButton>
                    <CalendarButton active>29</CalendarButton>
                    <CalendarButton active>30</CalendarButton>
                    <CalendarButton active>31</CalendarButton>
                </CalendarWrapper>

                <RangeInputWrapper>
                    <RangeInputLabel htmlFor="hour-select"> - {value} - </RangeInputLabel>
                    <RangeInputValue
                        style={{ left: `calc(${(value-9) * 12}%)` }}
                        >
                        {value}~{inputWidth}
                    </RangeInputValue>
                    <RangeInput 
                        ref={inputRef}
                        id="hour-select" 
                        name="hour-select" 
                        value={value}
                        onChange={handleRangeChange}
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