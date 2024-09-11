// pages/index.tsx
import React, { useEffect, useState } from 'react';
import Layout from '../pages/components/Layout';
import 'animate.css';
import Head from 'next/head';


const Home = () => {
  // Animations on scroll
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 200) {
        setShowContent(true);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <><>
      <Head>
        <title>Home | SACRED Foundation</title>
      </Head>
    </>
    <Layout>
        {/* Hero Section */}
        <section className="relative bg-green-600 text-white min-h-screen flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-opacity-50 bg-gradient-to-b from-green-500 to-blue-800"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-4xl sm:text-6xl font-bold animate__animated animate__fadeIn">
              Sustainable Action for Climate Resilience
            </h1>
            <p className="mt-4 text-lg sm:text-2xl animate__animated animate__fadeIn animate__delay-1s">
              Taking Action Today for a Better Tomorrow
            </p>
            <a
              href="#about"
              className="mt-8 inline-block px-6 py-3 text-lg bg-white text-green-600 rounded-full hover:bg-green-400 hover:text-white transition duration-300 animate__animated animate__fadeInUp animate__delay-2s"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-100 text-gray-800">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <div className={`transition-opacity duration-700 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
              <p className="max-w-3xl mx-auto">
                The Sustainable Action for Climate Resilient Enviro-social Development Foundation is dedicated to
                creating long-term, impactful solutions to climate change. We believe in empowering communities and
                building resilient ecosystems through innovative approaches.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission Section with Animations */}
        <section className="py-16 bg-white text-gray-800">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-center max-w-md">
                To address climate change by promoting sustainability and resilience in social and environmental
                ecosystems.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/mission.svg"
                alt="Mission"
                className={`transform transition duration-1000 ${showContent ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`} />
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-green-600 text-white text-center">
          <div className="container mx-auto">
            <h3 className="text-2xl font-bold">Join Our Movement</h3>
            <p className="mt-4 mb-8">Be part of the solution. Together, we can make a difference.</p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 text-lg bg-white text-green-600 rounded-full hover:bg-green-400 hover:text-white transition duration-300"
            >
              Get Involved
            </a>
          </div>
        </section>


      </Layout></>
  );
};

export default Home;
