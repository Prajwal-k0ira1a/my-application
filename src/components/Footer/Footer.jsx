import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-base-200 to-base-100 text-base-content pt-10 mt-10 border-t border-base-300">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 pb-8">
        {/* Logo & About */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <img src={require('../Assets/image.png')} alt="Logo" className="w-60 h-20 object-contain shadow-lg border-4 border-primary" />
          <h2 className="text-2xl font-bold text-primary">Bhawana Kirana</h2>
          <p className="text-gray-500 text-center md:text-left">Since 1990<br />Your trusted shop for daily essentials & stationery.</p>
        </div>
        {/* Services */}
        <div>
          <h6 className="footer-title text-lg font-semibold mb-2 text-primary">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Located in </h6>
          <div className="flex justify-center md:justify-start">
            <img
              src={require('../Assets/map.png')}
              alt="Shop Location Map"
              className="w-52 h-32 rounded-xl shadow-lg border-2 border-primary transition-all duration-300 hover:shadow-[0_0_30px_10px_rgba(59,130,246,0.5)] hover:scale-105 hover:border-blue-400"
              style={{ boxShadow: '0 0 0 0 rgba(59,130,246,0.5)' }}
            />
          </div>
        </div>
        {/* Company */}
        <div>
          <h6 className="footer-title text-lg font-semibold mb-2 text-primary">Company</h6>
          <ul className="space-y-1">
            <li><a href="#about" className="link link-hover">About us</a></li>
            <li><a href="#contact" className="link link-hover">Contact</a></li>
            <li><a href="#home" className="link link-hover">Home</a></li>
            <li><a href="#shop" className="link link-hover">Shop</a></li>
          </ul>
        </div>
        {/* Legal & Social */}
        <div>
          <h6 className="footer-title text-lg font-semibold mb-2 text-primary">Legal</h6>
          <ul className="space-y-1 mb-4">
            <li><a href="/terms" className="link link-hover">Terms of use</a></li>
            <li><a href="/privacy" className="link link-hover">Privacy policy</a></li>
            <li><a href="/cookies" className="link link-hover">Cookie policy</a></li>
          </ul>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 py-4 border-t border-base-300 text-sm">
        &copy; {new Date().getFullYear()} Bhawana Kirana. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer;