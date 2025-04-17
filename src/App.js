import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';
import Navbar from './Components/Navbar';
import Breadcrumbs from './Components/Breadcrumbs';
import Footer from './Components/Footer';
import Resume from './Pages/Resume';
import Header from './Components/Header';

function App() {
  return (
    <Router>
      <Breadcrumbs />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
