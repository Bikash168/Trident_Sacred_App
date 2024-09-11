// pages/contact.tsx
import React, { useState, useEffect } from 'react';
import Layout from '../pages/components/Layout';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Head from 'next/head';

const Contact = () => {
  // State for triggering animations on scroll
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 150) {
        setShowContent(true);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <><>
      <Head>
        <title>Contact Us | SACRED Foundation</title>
      </Head>
    </><Layout>
        {/* Hero Section */}
        <section className="relative bg-green-700 text-white min-h-[60vh] flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-opacity-60 bg-gradient-to-b from-green-600 to-black"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-4xl sm:text-6xl font-bold animate__animated animate__fadeInDown">
              Contact Us
            </h1>
            <p className="mt-4 text-lg sm:text-2xl animate__animated animate__fadeInUp animate__delay-1s">
              We are here to help you take action!
            </p>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 bg-white text-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className={`p-6 bg-gray-50 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 transform ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <FaPhone className="text-4xl mb-4 text-green-600" />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p>+91-9439173220</p>
              </div>
              <div className={`p-6 bg-gray-50 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 transform ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <FaEnvelope className="text-4xl mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p>info@sacred.foundation</p>
              </div>
              <div className={`p-6 bg-gray-50 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 transform ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <FaMapMarkerAlt className="text-4xl mb-4 text-red-600" />
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p>Plot No. – F2, Chandaka Industrial Estate, Chandrasekharpur, Bhubaneswar – 24, Odisha, India - 751024</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-gray-100 text-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Send Us a Message</h2>
            <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-green-400 focus:outline-none"
                      placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-green-400 focus:outline-none"
                      placeholder="Your Email" />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-green-400 focus:outline-none"
                    placeholder="Subject" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-green-400 focus:outline-none"
                    rows={5}
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-500 transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-green-700 text-white text-center">
          <div className="container mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join Us in Making a Difference</h3>
            <p className="mb-8">Become part of our journey towards a climate-resilient future.</p>
            <a
              href="/get-involved"
              className="inline-block px-6 py-3 bg-white text-green-700 rounded-full hover:bg-gray-100 transition duration-300"
            >
              Get Involved
            </a>
          </div>
        </section>
      </Layout></>
  );
};

export default Contact;
