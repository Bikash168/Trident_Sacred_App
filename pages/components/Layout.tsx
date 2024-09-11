// components/Layout.tsx
import React, { useState } from 'react';
// components/Layout.tsx
import Link from 'next/link';
// Import necessary icons from react-icons
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa'; 

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with Logo and Hamburger Menu */}
      <header className="bg-white p-4 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center justify-between">
  <img
    src="../logo.svg"
    alt="Logo"
    className="w-45 h-48"
  />
  <div className="ml-4">
    <h1 className="text-2xl font-bold text-blue-900">
      Sustainable Action for Climate Resilient Enviro-social Development Foundation
    </h1>
    <p className="text-lg text-blue-900">
      Building a Sustainable Future, Together
    </p>
  </div>
</div>


        {/* Hamburger Menu Button (shown on small screens) */}
        <button 
          className="block md:hidden focus:outline-none" 
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Responsive Navbar */}
      <nav className={`bg-orange-800 text-white md:block ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col md:flex-row md:space-x-6 p-4">
          <li><Link href="/" className="text-white block hover:text-blue-400">Home</Link></li>
          <li><Link href="/about" className="text-white block hover:text-blue-400">About Us</Link></li>
          <li><Link href="/our-work" className="text-white block hover:text-blue-400">Our Work</Link></li>
          <li><Link href="/get-involved" className="text-white block hover:text-blue-400">Get Involved</Link></li>
          <li><Link href="/resources" className="text-white block hover:text-blue-400">Resources</Link></li>
          <li><Link href="/blog" className="text-white block hover:text-blue-400">Blog</Link></li>
          <li><Link href="/contact" className="text-white block hover:text-blue-400">Contact</Link></li>
         </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-4 sm:p-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-orange-800 text-white p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p>An organization focused on sustainable actions for climate-resilient socio-environmental development implements strategies that promote environmental sustainability, foster social progress, and enhance resilience to the impacts of climate change.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              <li><Link href="/" className="text-white">Home</Link></li>
              <li> <Link href="/about" className="text-white">About Us</Link></li>
              <li> <Link href="/our-work" className="text-white">Our Work</Link></li>
              <li> <Link href="/get-involved" className="text-white">Get Involved</Link></li>
              <li><Link href="/contact" className="text-white block hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>

            {/* Quick Links for Trident Group Websites  */}
            <div>
            <h3 className="text-lg font-bold mb-4">Trident Group Websites</h3>
            <ul>
              <li><Link href="/" className="text-white">TAT</Link></li>
              <li> <Link href="/" className="text-white">TACT</Link></li>
              <li><a href="#" className="hover:text-blue-400">Trident Group</a></li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p>Plot No. – F2, Chandaka Industrial Estate</p>
            <p>Chandrasekharpur, Bhubaneswar – 24, Odisha, India - 751024</p>
            <p>Email: info@sacred.foundation</p>
            <p>Phone: +91-9439173220</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-blue-400">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" className="hover:text-blue-400">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" className="hover:text-blue-400">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" className="hover:text-blue-400">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.youtube.com/@sacredfoundation" className="hover:text-blue-400">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center">
          <p>&copy; 2024 Sacred Foundation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;