import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
