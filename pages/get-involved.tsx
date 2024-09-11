// pages/get-involved.tsx
import React, { useEffect, useState } from 'react';
import Layout from '../pages/components/Layout';
import { FaHandsHelping, FaDonate, FaVolleyballBall, FaRegSmileBeam } from 'react-icons/fa';
import Head from 'next/head';

const GetInvolved = () => {
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
        <title>Get Involved | SACRED Foundation</title>
      </Head>
    </><Layout>
        {/* Hero Section */}
        <section className="relative bg-green-600 text-white min-h-[70vh] flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-opacity-50 bg-gradient-to-b from-green-500 to-blue-700"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-4xl sm:text-6xl font-bold animate__animated animate__fadeInDown">
              Get Involved
            </h1>
            <p className="mt-4 text-lg sm:text-2xl animate__animated animate__fadeInUp animate__delay-1s">
              Make a Difference with Us
            </p>
          </div>
        </section>

        {/* Ways to Get Involved Section */}
        <section className="py-16 bg-white text-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Ways to Get Involved</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className={`p-6 bg-gray-50 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 transform ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <FaHandsHelping className="text-4xl mb-4 text-green-500" />
                <h3 className="text-xl font-semibold mb-2">Volunteer</h3>
                <p>
                  Join our team of dedicated volunteers to support our environmental and social initiatives.
                </p>
              </div>
              <div className={`p-6 bg-gray-50 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 transform ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <FaDonate className="text-4xl mb-4 text-blue-500" />
                <h3 className="text-xl font-semibold mb-2">Donate</h3>
                <p>
                  Contribute financially to help fund our projects and expand our reach in the community.
                </p>
              </div>
              <div className={`p-6 bg-gray-50 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 transform ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <FaVolleyballBall className="text-4xl mb-4 text-teal-500" />
                <h3 className="text-xl font-semibold mb-2">Participate in Events</h3>
                <p>
                  Attend our events and workshops to learn more and engage with like-minded individuals.
                </p>
              </div>
              <div className={`p-6 bg-gray-50 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 transform ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <FaRegSmileBeam className="text-4xl mb-4 text-purple-500" />
                <h3 className="text-xl font-semibold mb-2">Spread the Word</h3>
                <p>
                  Help us raise awareness by sharing our mission and updates on your social media platforms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer Form Section */}
        <section className="py-16 bg-gray-100 text-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Become a Volunteer</h2>
            <form className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Your Name"
                  required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Your Email"
                  required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Why do you want to volunteer?"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 bg-green-600 text-white text-center">
          <div className="container mx-auto">
            <h3 className="text-2xl font-bold">Contact Us</h3>
            <p className="mt-4 mb-8">For more information on how to get involved, please reach out to us.</p>
            <p className="text-lg">Email: <a href="info@sacred.foundation" className="underline">info@sacred.foundation</a></p>
            <p className="text-lg">Phone: <a href="tel:+91-9439173220" className="underline">+91-9439173220</a></p>
          </div>
        </section>
      </Layout></>
  );
};

export default GetInvolved;
