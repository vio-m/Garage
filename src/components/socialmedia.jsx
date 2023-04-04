import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';


const SocialmediaWrapper = styled.section.attrs({
        id: 'socialmedia'
    })`
        position: relative;
        height: 5vh;
        background-color: #363946;
        padding: 10px 20px;
        
        > div {
            display: flex;
            justify-content: space-around;
        }
        svg {
            color: white;
            font-size: 32px;
        }
        h3 {
            color: white;
        }
        a {
            width: 100px;
            height: 100px;
            text-decoration: none;
            position: relative;
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow: hidden;
        }
        a::before {
            content: attr(data-text);
            position: absolute;
            top: 40%;
            left: 50%;
            white-space: nowrap;
            transform: translate(-100%) scaleX(0);
            transition: transform 0.3s ease-in-out;
        }
        a:hover::before {
            transform: translate(-50%) scaleX(1);
        }
        .socialmedia-content {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: #363946;
            padding: 20px;
            transform: scaleY(0);
            transform-origin: top;
            transition: transform 0.3s ease-in-out;
            z-index: 1;
        }
        :hover .socialmedia-content {
            transform: scaleY(1);
        }

    `;

function Socialmedia() {
    return (
        <SocialmediaWrapper>
            <h3>FOLLOW US:</h3>
           
            <div className="socialmedia-content">
                
                    <a href='https://www.facebook.com/facebook' target="_blank" data-text="Facebook"><FacebookIcon  size='large'/></a>
                
                    <a href='https://www.instagram.com/instagram/' target="_blank" data-text="Instagram"><InstagramIcon /></a>
                
                    <a href='https://twitter.com/twitter/' target="_blank" data-text="Twitter"><TwitterIcon /></a>
                
                    <a href='https://www.pinterest.com/pinterest/' target="_blank" data-text="Pinterest">< PinterestIcon/></a>
                
            </div>

            
        </SocialmediaWrapper>
    )
}

export default Socialmedia

/*

*/