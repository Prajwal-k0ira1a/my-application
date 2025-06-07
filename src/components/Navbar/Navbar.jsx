import React from 'react'
import ThemeToggle from '../ThemeToggler/ThemeToggle';

const NavLinks = () => {
  return (
    <ul className="menu menu-horizontal px-1 gap-4">
      <li><a href="#home" className="hover:text-primary">Home</a></li>
      <li><a href="#about" className="hover:text-primary">About</a></li>
      <li><a href="#services" className="hover:text-primary">Services</a></li>
      <li><a href="#contact" className="hover:text-primary">Contact</a></li>
    </ul>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <NavLinks />
        </div>
        <div className="navbar-end flex items-center gap-2">
          <ThemeToggle />
          <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6M7 13l-3-6M17 13l1.2 6M17 13l3-6M5 21a1 1 0 100-2 1 1 0 000 2zm12 0a1 1 0 100-2 1 1 0 000 2z" 
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          {/* Hamburger menu for mobile */}
          <div className="lg:hidden">
            <button className="btn btn-ghost btn-circle" onClick={() => setMenuOpen(!menuOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-base-100 shadow-md px-4 py-2 flex justify-center">
          <NavLinks />
        </div>
      )}
    </div>
  )
};

export default Navbar;