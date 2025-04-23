import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';
import Resume from './Pages/Resume';
import Breadcrumbs from './Components/Breadcrumbs';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <BrowserRouter basename="/sam_portfolio">
      <Breadcrumbs />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Project />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
