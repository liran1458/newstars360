import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Trust from './components/Trust/Trust';
import VideoSection from './components/VideoSection/VideoSection';
import Experience from './components/Experience/Experience';
import LielStory from './components/LielStory/LielStory';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ThankYou from './components/ThankYou/ThankYou';
import Accessibility from './components/Accessibility/Accessibility';

import './App.css';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="app">
            <a className="skip-link" href="#main-content">דלגו לתוכן המרכזי</a>
            <Header />

            <main id="main-content">
              <Hero />
              <VideoSection />
              <About />
              <Trust />
              <Experience />
              <LielStory />
              <Contact />
            </main>

            <Footer />
            <Accessibility />
          </div>
        }
      />

      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
}

export default App;