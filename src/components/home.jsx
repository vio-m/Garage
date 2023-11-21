import styled from 'styled-components';


const Header = styled.section.attrs({
    id: 'home'
})`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    min-height: 80vh;
    width: 100%;
    transform-style: inherit;
    z-index: -1;

    &::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        display: block;
        //background: url('src/assets/v8.avif') top center;
        //background-size: cover;
        transform: translateZ(-1px) scale(2.1);
        min-height: 100%;
        z-index: -2;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;
const Square = styled.div`
    position: relative;
    width: 250px;
    height: 250px;
    transform: rotate(45deg);
    border-radius: 0;
    opacity: 0.6;
    box-sizing: border-box;
    overflow: hidden;

    ::before,
    ::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 10px;
        background-color: white;
        z-index: 2;
        transition: 0.35s;
    }

    ::before {
        top: 0;
        right: 0;
    }

    ::after {
        bottom: 0;
        left: 0;
    }

    :hover::before,
    :hover::after {
        width: 0%;
        transition: 0.2s 0.2s ease-out;
    }

    @media screen and (max-width: 1024px) {
        width: 200px;
        height: 200px;
    }
`;
const Inner = styled.div`
    position: relative;
    width: 250px;
    height: 250px;
    transform: rotate(90deg);

    ::before,
    ::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 10px;
      background-color: white;
      z-index: 2;
      transition: 0.35s;
    }

    ::before {
        top: 0;
        right: 0;
    }

    ::after {
        bottom: 0;
        left: 0;
    }

    :hover::before,
    :hover::after {
        width: 0%;
        transition: 0.2s 0.2s ease-out;
    }

    @media screen and (max-width: 1024px) {
        width: 200px;
        height: 200px;
    }
`
const Text = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-135deg);
    width: 100%;
    text-align: center;
    color: white;
    font-size: 32px;
    text-transform: uppercase;

    @media screen and (max-width: 1024px) {
        font-size: 26px;
    }

`;


const Home = () => {

    return (
        <Header style={{ transform: 'translateZ(-1px)' }}>
            <Square>
                <Inner><Text>FAIR AND TRANSPARENT PRICING</Text></Inner>
            </Square>
            <Square>
                <Inner><Text><>HAPPINESS GUARANTEED</></Text></Inner>
            </Square>
            <Square>
                <Inner><Text><>WE MAKE IT EASY</></Text></Inner>
            </Square>
        </Header>
    );
};

export default Home;