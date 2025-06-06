import './App.css';
import Hero from './Hero';
import Navbar from './Navbar';
import Showcase from './Showcase';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <section id="home" className="min-h-screen bg-base-200 p-8">
        <Hero/>
      </section>
      <section id="about" className="min-h-screen bg-base-300 p-8">About Section</section>
      <section id="services" className="min-h-screen bg-base-100 p-8">Services Section</section>
      <section id="contact" className="min-h-screen bg-base-200 p-8">Contact Section</section>
     
     <Showcase/>
    </div>
  );
}

export default App;
