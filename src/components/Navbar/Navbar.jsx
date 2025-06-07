import React from 'react'
import ThemeToggle from '../ThemeToggler/ThemeToggle';
import { addToCart, removeFromCart, checkoutCart } from '../AddCart/Cart';

const NavLinks = () => {
  return (
    <ul className="menu menu-horizontal px-1 gap-4">
      <li><a href="#home" className="hover:text-primary">Home</a></li>
      <li><a href="#about" className="hover:text-primary">About</a></li>
      <li><a href="#services" className="hover:text-primary">Services</a></li>
      <li><a href="#team" className="hover:text-primary">Team</a></li>
      <li><a href="#contact" className="hover:text-primary">Contact</a></li>
    </ul>
  );
};

const Navbar = ({ cart, setCart }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [showCart, setShowCart] = React.useState(false);
  const cartCount = cart.length;

  // Remove item from cart by index
  const handleRemove = (idx) => {
    removeFromCart(cart, setCart, idx);
  };

  // Print bill for checkout
  const handleCheckout = () => {
    checkoutCart(cart);
    setCart([]); 
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl"><img src={require('../Assets/image.png')} alt="Logo" className="w-30 h-16 object-contain shadow-lg border-4 border-primary" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <NavLinks />
        </div>
        <div className="navbar-end flex items-center gap-2">
          <ThemeToggle />
          <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
          </button>
          <div className="relative">
            <button className="btn btn-ghost btn-circle" onClick={() => setShowCart((prev) => !prev)}>
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6M7 13l-3-6M17 13l1.2 6M17 13l3-6M5 21a1 1 0 100-2 1 1 0 000 2zm12 0a1 1 0 100-2 1 1 0 000 2z" 
                  />
                </svg>
                {cartCount > 0 && (
                  <span className="badge badge-sm badge-primary indicator-item">{cartCount}</span>
                )}
              </div>
            </button>
            {/* Cart Dropdown */}
            {showCart && (
              <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-900 shadow-lg rounded-lg z-50 p-4 max-h-96 overflow-y-auto">
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-100">Cart</h3>
                {cart.length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-300">Your cart is empty.</p>
                ) : (
                  <>
                  <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {cart.map((item, idx) => (
                      <li key={idx} className="py-2 flex items-center gap-3">
                        <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 dark:text-gray-100">{item.name}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-300">Rs {item.price}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-300">Qty: {item.quantity || 1}</div>
                        </div>
                        <button className="btn btn-xs btn-error" onClick={() => handleRemove(idx)}>Remove</button>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-col gap-2">
                    <button className="btn btn-success w-full" onClick={handleCheckout}>Checkout & Print Bill</button>
                  </div>
                  </>
                )}
              </div>
            )}
          </div>
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