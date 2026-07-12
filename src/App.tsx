import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Trust from './components/Trust/Trust';
import VideoSection from './components/VideoSection/VideoSection';
import Experience from './components/Experience/Experience';
import LielStory from './components/LielStory/LielStory';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <VideoSection />
        <Trust />
        <Experience />
        <LielStory />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
