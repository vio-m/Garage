import styled from "styled-components";

const Container = styled.section.attrs({
    id: 'brands'
})`
    height: 150px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #0B2154;
    background-color: #fff;
    padding-left: 50px;
    padding-right: 50px;
    
    div {
        font-size: 32px;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: transform 0.3s;
    }
    div:hover {
        transform: scale(0.9);
        /*cursor: pointer;*/
    }
    & p {
        font-size: 16px;
        margin-bottom: 0px;
    }
    @media screen and (max-width: 600px) {
        padding-left: 20px;
        padding-right: 20px;
        div, p {
            font-size: 12px;
        }
    }
`

function Brands() {

    return (

        <Container>
            <div>
                <img width="100" height="100" src="https://img.icons8.com/carbon-copy/100/jeep.png" alt="jeep"/>

            </div>
            <div>
                <img width="100" height="100" src="https://img.icons8.com/carbon-copy/100/infiniti-logo.png" alt="infiniti-logo"/>

            </div>
            <div>
                <img width="100" height="100" src="https://img.icons8.com/carbon-copy/100/tesla-logo.png" alt="tesla-logo"/>

            </div>
            <div>
                <img width="100" height="100" src="https://img.icons8.com/ios/100/chrysler.png" alt="chrysler"/>

            </div>
            <div>
                <img width="100" height="100" src="https://img.icons8.com/ios/100/subaru.png" alt="subaru"/>

            </div>



        </ Container>
    )
} 


export default Brands;