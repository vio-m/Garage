import styled from "styled-components";
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';


const SocialmediaWrapper = styled.section.attrs({
        id: 'socialmedia'
    })`
        position: relative;
        display: flex;
        align-items: center;
        justify-content: start;
        background-color: rgba(0, 0, 0, 0);
        svg {
            color: white;
            font-size: 20px;
        }
        .socialmedia-content {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba (0.0.0.0);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.3s ease-in-out;
            z-index: 1;
        }
        .socialmedia-content:hover {
            transform: scaleX(1);
        }
        .share {
            cursor: pointer;
        }
        .share:hover > svg {
            color: #28e;
        }
        .share:hover + .socialmedia-content {
            transform: scaleX(1);
        }
        a {
            width: 60px;
            height: 50px;
            font-size: 12px;
            text-decoration: none;
            position: relative;
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }
        a::before {
            content: attr(data-text);
            position: absolute;
            top: 70%;
            left: 50%;
            white-space: nowrap;
            transform: translate(-100%) scaleX(0);
            transition: transform 0.3s ease-in-out;
        }
        a:hover::before {
            transform: translate(-50%) scaleX(1);
        }

    `;

function Socialmedia() {
    return (
        <SocialmediaWrapper>

            <div className="share"><ShareIcon /></div>

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
#363946
*/