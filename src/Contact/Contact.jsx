import React from 'react'

const Contact = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
          <input type="text" id="name" className="w-full p-2 border rounded" placeholder="Your Name" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
          <input type="email" id="email" className="w-full p-2 border rounded" placeholder="Your Email" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
          <textarea id="message" className="w-full p-2 border rounded" rows="4" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-full">Send Message</button>
      </form>
    </div>
  )
}

export default Contact
