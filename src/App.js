
import './App.css';
import Home from './components/Pages/Home/Home';
import NavBot from './components/Pages/NavBot/NavBoot';
import Project from './components/Pages/Project/Project';
import About from './components/Pages/About/About';
import MyTimeline from './components/Pages/Timeline/MyTimeline';
import Footer from './components/Pages/Footer/Footer';



function App() {
  return (
    <>
      <NavBot />
      <Home />
      <About />
      <MyTimeline/>
      <Project />
      <Footer/>
    </>
  );
}

export default App;
