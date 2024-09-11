// pages/about.tsx
import React, { useEffect, useState } from 'react';
import Layout from '../pages/components/Layout';
import Head from 'next/head';

const About = () => {
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
        <title>About | SACRED Foundation</title>
      </Head>
    </><Layout>
        {/* Hero Section */}
        <section className="relative bg-blue-600 text-white min-h-[70vh] flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-opacity-50 bg-gradient-to-b from-blue-500 to-green-800"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-4xl sm:text-6xl font-bold animate__animated animate__fadeInDown">
              About Us
            </h1>
            <p className="mt-4 text-lg sm:text-2xl animate__animated animate__fadeInUp animate__delay-1s">
              Our Commitment to Climate Resilience
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white text-gray-800">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center">
              <img
                src="/mission.svg"
                alt="Our Mission"
                className={`transform transition duration-1000 ease-out ${showContent ? 'opacity-100' : 'opacity-0'}`} />
            </div>
            <div className="flex flex-col justify-center items-start">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className={`transition-opacity duration-700 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                We strive to drive sustainable environmental and social development through climate resilience projects
                across communities worldwide. Our goal is to empower local actions for a global impact.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 bg-gray-100 text-gray-800">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center items-start">
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className={`transition-transform duration-700 ease-in-out ${showContent ? 'translate-x-0' : 'translate-x-20 opacity-0'}`}>
                To foster a world where ecosystems and societies thrive in harmony, resilient to the impacts of climate
                change. We envision sustainable growth that benefits future generations, ensuring ecological integrity
                and community well-being.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/vision.svg"
                alt="Our Vision"
                className={`transform transition duration-1000 ease-out ${showContent ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`} />
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 bg-white text-gray-800 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
                <p className="text-gray-600">
                  We believe in promoting sustainability through innovative solutions, ensuring that our actions today
                  contribute to a resilient future.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold mb-4">Community Empowerment</h3>
                <p className="text-gray-600">
                  Empowering communities to take control of their future and environment is central to our approach.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We push the boundaries of environmental and social development through cutting-edge technology and
                  fresh ideas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-100 text-gray-800">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <img src="/team-member1.jpg" alt="Team Member" className="w-24 h-24 rounded-full mb-4" />
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/team-member2.jpg" alt="Team Member" className="w-24 h-24 rounded-full mb-4" />
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <p className="text-gray-600">Director of Sustainability</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/team-member3.jpg" alt="Team Member" className="w-24 h-24 rounded-full mb-4" />
                <h3 className="text-xl font-semibold">Emily Johnson</h3>
                <p className="text-gray-600">Community Outreach Lead</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/team-member4.jpg" alt="Team Member" className="w-24 h-24 rounded-full mb-4" />
                <h3 className="text-xl font-semibold">Michael Lee</h3>
                <p className="text-gray-600">Innovation Specialist</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-green-600 text-white text-center">
          <div className="container mx-auto">
            <h3 className="text-2xl font-bold">Join Our Cause</h3>
            <p className="mt-4 mb-8">Be a part of the solution and contribute to a sustainable future.</p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 text-lg bg-white text-green-600 rounded-full hover:bg-green-400 hover:text-white transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </section>
      </Layout></>
  );
};

export default About;
