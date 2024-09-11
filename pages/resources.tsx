// pages/resources.tsx
import React, { useEffect, useState } from 'react';
import Layout from '../pages/components/Layout';
import { FaBook, FaFilePdf, FaVideo, FaTools } from 'react-icons/fa';
import Head from 'next/head';

const Resources = () => {
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
        <title>Resources | SACRED Foundation</title>
      </Head>
    </><Layout>
        {/* Hero Section */}
        <section className="relative bg-blue-600 text-white min-h-[70vh] flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-opacity-50 bg-gradient-to-b from-blue-500 to-gray-700"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-4xl sm:text-6xl font-bold animate__animated animate__fadeInDown">
              Resources
            </h1>
            <p className="mt-4 text-lg sm:text-2xl animate__animated animate__fadeInUp animate__delay-1s">
              Valuable Information and Tools for a Sustainable Future
            </p>
          </div>
        </section>

        {/* Resource Categories Section */}
        <section className="py-16 bg-white text-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Explore Our Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className={`p-6 bg-gray-50 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 transform ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <FaBook className="text-4xl mb-4 text-red-500" />
                <h3 className="text-xl font-semibold mb-2">Research Papers</h3>
                <p>
                  Access a collection of research papers on climate resilience and environmental sustainability.
                </p>
              </div>
              <div className={`p-6 bg-gray-50 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 transform ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <FaFilePdf className="text-4xl mb-4 text-blue-500" />
                <h3 className="text-xl font-semibold mb-2">Guides & Manuals</h3>
                <p>
                  Download practical guides and manuals for implementing sustainable practices.
                </p>
              </div>
              <div className={`p-6 bg-gray-50 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 transform ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <FaVideo className="text-4xl mb-4 text-green-500" />
                <h3 className="text-xl font-semibold mb-2">Educational Videos</h3>
                <p>
                  Watch videos that provide insights into climate action and sustainable development.
                </p>
              </div>
              <div className={`p-6 bg-gray-50 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 transform ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <FaTools className="text-4xl mb-4 text-purple-500" />
                <h3 className="text-xl font-semibold mb-2">Toolkits</h3>
                <p>
                  Access toolkits designed to help organizations and individuals promote environmental resilience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Resources Section */}
        <section className="py-16 bg-gray-100 text-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Resources</h2>
            <div className="flex flex-col lg:flex-row lg:justify-center gap-8">
              <div className="p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto transition-transform duration-500 hover:scale-105">
                <h3 className="text-2xl font-bold mb-4">Climate Resilience Report 2024</h3>
                <p>
                  A comprehensive report on the state of climate resilience efforts, including data and case studies.
                </p>
                <a
                  href="/resources/climate-resilience-report-2024.pdf"
                  className="inline-block mt-4 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transition duration-300"
                  download
                >
                  Download Report
                </a>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto transition-transform duration-500 hover:scale-105">
                <h3 className="text-2xl font-bold mb-4">Sustainability Toolkit</h3>
                <p>
                  An essential toolkit for implementing sustainable practices in communities and organizations.
                </p>
                <a
                  href="/resources/sustainability-toolkit.pdf"
                  className="inline-block mt-4 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transition duration-300"
                  download
                >
                  Download Toolkit
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-blue-600 text-white text-center">
          <div className="container mx-auto">
            <h3 className="text-2xl font-bold mb-4">Get Involved with Our Resources</h3>
            <p className="mb-8">Use our resources to enhance your efforts in creating a more sustainable world.</p>
            <a
              href="/get-involved"
              className="inline-block px-6 py-3 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition duration-300"
            >
              Explore Opportunities
            </a>
          </div>
        </section>
      </Layout></>
  );
};

export default Resources;
