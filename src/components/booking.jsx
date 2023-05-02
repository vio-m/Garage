import { useState } from 'react';
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
    padding: 0.75rem;
    border-radius: 0.5rem;
    background-color: #f9fafb;
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    `;

const CalendarButton = styled.button`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    font-weight: bold;
    font-size: 0.875rem;
    outline: none;
    `;

const SliderWrapper = styled.div`
    margin-top: 50px;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  
const TimeBar = styled.div.attrs({
    id: 'time-bar'
})`
    width: 80%;
    height: 10px;
    margin: 0 10px;
    background-color: #ccc;
    position: relative;
  `;
  
const SliderButton = styled.button`
    width: 80px;
    height: 30px;
    background-color: #fff;
    border: 2px solid #ccc;
    position: relative;
    transform: translate(0%, -35%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    cursor: grab;
    outline: none;
    &:active {
      cursor: grabbing;
    }
  `;
  
const TimeInput = styled.input`
    opacity: 1;
    width: 120px;
    font-size: 14px;
    text-align: center;
  `;    



function AppointmentBooking() {
    const [sliderPosition, setSliderPosition] = useState(0);
    //
    const [service, setService] = useState('');
    const [date, setDate] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

function handleSubmit(event) {
        event.preventDefault();
        console.log("appointment confirmed")    
    }


const handleSliderMove = (e) => {
        const timeBar = document.getElementById("time-bar");
        const timeBarWidth = timeBar.clientWidth;
        const sliderWidth = e.target.clientWidth;
        const newPosition = e.clientX - timeBar.getBoundingClientRect().left - sliderWidth / 2;
        const maxPosition = timeBarWidth - sliderWidth;
        const snapValue = Math.round(newPosition / (maxPosition / 8));
        setSliderPosition(Math.min(maxPosition, Math.max(0, snapValue * (maxPosition / 8))));
        
        console.log("maxPosition: ", maxPosition)
        console.log("snapValue: ", snapValue)
        console.log("newPosition: ", newPosition)
        console.log("sliderposition: ", sliderPosition)
    };
  
const getTimeFromPosition = (position) => {
      const hour = Math.floor((position / 480) * 8) + 9;
      const minute = position % 60 === 0 ? "00" : "30";
      const time = `${hour}:${minute}`;
      console.log(">>>", position)
      return time;
    };
  
const handleTimeChange = (e) => {
      const newTime = e.target.value;
      console.log("newtime", newTime)
      const hour = parseInt(newTime.split(":")[0]);
      const minute = parseInt(newTime.split(":")[1]);
      const newPosition = ((hour - 9) * 60 + minute) * 6;
      setSliderPosition(newPosition);
    };


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
                    {/* Add additional options for other services provided */}
                </Select>
            </Label>
            
            <CalendarWrapper>
                <CalendarButton active>26</CalendarButton>
                <CalendarButton>27</CalendarButton>
                <CalendarButton active>28</CalendarButton>
                <CalendarButton active>29</CalendarButton>
                <CalendarButton active>30</CalendarButton>
                <CalendarButton active>31</CalendarButton>
            </CalendarWrapper>

            <SliderWrapper>
                <TimeInput type="time" defaultValue="09:00" onChange={handleTimeChange} />
                <TimeBar id="time-bar">
                    <SliderButton style={{left: sliderPosition}} 
                        onMouseDown={handleSliderMove} 
                        onMouseUp={() => document.removeEventListener("mousemove", handleSliderMove)}>
                        {getTimeFromPosition(sliderPosition)}
                    </SliderButton>
                </TimeBar>
                <TimeInput type="time" defaultValue="17:00" disabled />
            </SliderWrapper>




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