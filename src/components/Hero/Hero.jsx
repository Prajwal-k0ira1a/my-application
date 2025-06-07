import React from 'react'
import NavLinks from '../Navbar/Navbar';
const Hero = () => {
  return (
   <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://i.pinimg.com/736x/48/08/89/480889539651e903ac414cc4b5c3c4fc.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome to Our World of Innovation</h1>
      <p className="mb-5">
       Discover creative solutions crafted with passion and precision.
      From concept to execution, we bring ideas to life and help your brand stand out in a digital-first world.
      </p>
      <button className="btn btn-primary"> <a href="#services" className="btn btn-primary">Get Started</a></button>
    </div>
  </div>
</div>
  )
}

export default Hero;