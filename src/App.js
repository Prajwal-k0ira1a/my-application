import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Shop from './components/Shop/Shop';
import About from './components/AboutUs/About';
import Team from './components/Meet/Team';
import React, { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  return (

  <div className="App">
      <Navbar cart={cart} setCart={setCart} />

      <section id="home" className="min-h-screen bg-base-200 p-8">
        <Hero/>
      </section>
      <section id="about" className="min-h-screen bg-base-200 p-8">
        <About/>
      </section>
      <section id="services" className="min-h-screen bg-base-100 p-8">
        <Shop cart={cart} setCart={setCart} />
      </section>
      <section id="team"className="min-h-screen bg-base-100 p-8">
        <Team/>
      </section>
      <section id="contact" className="min-h-screen bg-base-200 p-8">
        <Contact/>
      </section>
     <Footer/>
  
  </div>
  );
};

export default App;
