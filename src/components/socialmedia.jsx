import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';


const SocialmediaWrapper = styled.section.attrs({
        id: 'socialmedia'
    })`
        height: 10vh;
        background-color: #efefef;
        padding: 20px;
        .icon-container {
            display: flex;
            justify-content: space-around;
        }
    `;

function Socialmedia() {
    return (
        <SocialmediaWrapper>
            <h2>FOLLOW US:</h2>
            {/**/}
            <div className='icon-container'>
                <div className='socialmedia-icon'>
                    <a href='https://www.facebook.com/facebook' target="_blank"><FacebookIcon  size='large'/></a>
                </div>
                <div className='socialmedia-icon'>
                    <a href='https://www.instagram.com/instagram/' target="_blank"><InstagramIcon /></a>
                </div>
                <div className='socialmedia-icon'>
                    <a href='https://twitter.com/twitter/' target="_blank"><TwitterIcon /></a>
                </div>
                <div className='socialmedia-icon'>
                    <a href='https://www.pinterest.com/pinterest/' target="_blank">< PinterestIcon/></a>
                </div>
            </div>
            
        </SocialmediaWrapper>
    )
}

export default Socialmedia