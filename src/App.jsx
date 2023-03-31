import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Faq from './components/faq'
import Services from './components/services'
import Socialmedia from './components/socialmedia'


function App() {

    return (
        <div className="App">
            <Navbar />

            <Services />
            
            <Faq />
            <Socialmedia />
            <Footer />
        </div>
    )
}

export default App

//
