import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Faq from './components/faq'
import Services from './components/services'
import Socialmedia from './components/socialmedia'
import Parallax from './components/parallax'
import ParallaxEffect from './components/parallaxeffect'
import AppointmentBooking from './components/booking'
import Chat from './components/chat'
import { ChatProvider } from './components/ChatContext';


function App() {

    return (
        <ChatProvider>
            <div className="App">
                <Navbar />
                
                <ParallaxEffect />
                
                <Socialmedia />

                <Chat />

                
                
                <Footer />
                
            </div>
        </ChatProvider>
    )
}

export default App

//   <Services />

//   <Parallax />

//   <Faq />

//   <AppointmentBooking />