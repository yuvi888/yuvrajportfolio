
import './App.css';
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Resume from './components/resume';
import ScrollToTop from "./components/scrolltotop";
import './style.css';
import Gallery from './components/gallery';
import Contact from './components/contact';

function App() {
  return (

    <BrowserRouter basename="/yuvrajportfolio">
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
