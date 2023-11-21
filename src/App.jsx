// App.jsx
import './App.css'
import styled from "styled-components";
import Navbar from './components/navbar'
import ParallaxEffect from './components/parallaxeffect'
//import Footer from './components/footer'
import { ChatProvider } from './components/ChatContext';
import Chat from './components/chat';


const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;



function App() {
    return (
        <ChatProvider>
            <PageContainer>
                <Chat />
                <Navbar/>    
                <ParallaxEffect />

            </PageContainer>
        </ChatProvider>
    )
}

export default App;


/*
               
                <Chat />

*/