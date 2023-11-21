import { useState } from 'react';
import styled from "styled-components";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Typewriter from 'typewriter-effect';


const FaqWrapper = styled.section.attrs({
    id: 'faq'
})`
    height: 100vh;
    background-color: rgba(0,0,0,0);
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3 {
        padding-bottom: 50px;
        color: white;
    }
`;
const QACard = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`;
const Q = styled.div`
    position: relative;
    width: 100%;
    background-color: rgba(0,0,0,0);
    color: white;
    padding: 20px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    border-bottom: 3px solid #f2f2f2;
    :hover {
        border-bottom: 3px solid #d3d3d3;
    }
    svg {
        position: absolute; 
        right: 5%; 
        top: 50%; 
        transform: translateY(-50%); 
    }
`;
const ADiv = styled.div`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    font-size: 16px;
    line-height: 1.5;
`
const A = styled(Typewriter)`
`;



const Faq = () => {
    const [selectedQaIndex, setSelectedQaIndex] = useState(-1);
    const [qas, setQas] = useState([
        {
            question: 'How often should I get my car serviced?',
            answer: `It's recommended to get your car serviced every 6 months or 10,000 miles, whichever comes first. 
            However, this can vary depending on the make and model of your car, as well as how often you drive it.`,
            showAnswer: false,
        },
        {
            question: 'Can you give me an estimate before you start working on my car?',
            answer: `Yes, we can provide you with an estimate for any repairs or services before we start working on your car. 
            We'll inspect your car and provide you with a detailed quote for the work that needs to be done.`,
            showAnswer: false,
        },
        {
            question: 'Do you offer any warranties on your repairs?',
            answer: `Yes, we offer warranties on all of our repairs. The length of the warranty will depend on the type of 
            repair and the parts that we use. We stand behind our work and want to ensure that you're completely satisfied 
            with the repairs we make.`,
            showAnswer: false,
        },
        {
            question: 'What payment methods do you accept?',
            answer: `We accept cash, credit cards, and debit cards. We also offer financing options for larger repairs 
            or services.`,
            showAnswer: false,
        },
        {
            question: 'Do you offer any discounts or promotions?',
            answer: `Yes, we offer discounts and promotions throughout the year. Be sure to check our website or social media 
            pages for the latest offers. We also offer a loyalty program for our regular customers that provides discounts on 
            future services.`,
            showAnswer: false,
        },
    ]);
    const toggleAnswer = (index) => {
        setSelectedQaIndex(index === selectedQaIndex ? -1 : index);
    };

    return (
        <>
            <FaqWrapper>
                <h3> Q and A </h3>
                {qas.map((qa, index) => (
                    <QACard key={qa.question}>
                        <Q onClick={() => toggleAnswer(index)}>{qa.question}<KeyboardArrowDownIcon /></Q>
                        
                        {selectedQaIndex === index ? (<ADiv>
                            <A options={{
                                strings: qas[index].answer,
                                autoStart: true,
                                delay: 50,
                                deleteSpeed: 10,
                            }}>
                            </A>
                        </ADiv>):(
                            <></>
                        )}
                        
                    </QACard>
                ))}
            </FaqWrapper>
        </>
    );
};

export default Faq;

/*
 
*/