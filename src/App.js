import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom';
import './App.css';

//pages
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Services from './Pages/Services';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <h1>The Hair Salon</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="services">Services</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
    </header>
  <main>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="services" element={<Services/>} />
      <Route path="contact" element={<Contact/>} />
    </Routes>
  </main>
  <Footer />
    </BrowserRouter>
  );
}

export default App;
