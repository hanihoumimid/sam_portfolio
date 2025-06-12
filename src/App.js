import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Project';
import Resume from './Pages/Resume';
import Breadcrumbs from './Components/Breadcrumbs';
import Footer from './Components/Footer';
import Header from './Components/Header';

// Composant pour gérer le scroll
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter basename="/sam_portfolio">
      <ScrollToTop />
      <Breadcrumbs />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
