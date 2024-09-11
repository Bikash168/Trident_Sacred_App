// pages/our-work.tsx
import React, { useEffect, useState } from 'react';
import Layout from '../pages/components/Layout';
import { FaLeaf, FaRecycle, FaWater, FaWind } from 'react-icons/fa';
import Head from 'next/head';

const OurWork = () => {
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
        <title>Our Work | SACRED Foundation</title>
      </Head>
    </><Layout>
        <section className="relative bg-green-600 text-white min-h-[70vh] flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-opacity-50 bg-gradient-to-b from-green-500 to-blue-700"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-4xl sm:text-6xl font-bold animate__animated animate__fadeInDown">
              Our Work
            </h1>
            <p className="mt-4 text-lg sm:text-2xl animate__animated animate__fadeInUp animate__delay-1s">
              Transforming Communities through Sustainable Initiatives
            </p>
          </div>
        </section>
        <section className="py-16 bg-white text-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className={`p-6 bg-gray-50 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 transform ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <FaLeaf className="text-4xl mb-4 text-green-500" />
                <h3 className="text-xl font-semibold mb-2">Reforestation</h3>
                <p>
                  We engage in large-scale reforestation projects to restore and enhance forest ecosystems.
                </p>
              </div>
              <div className={`p-6 bg-gray-50 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 transform ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <FaRecycle className="text-4xl mb-4 text-blue-500" />
                <h3 className="text-xl font-semibold mb-2">Waste Management</h3>
                <p>
                  Our waste management programs aim to reduce, recycle, and reuse materials to minimize landfill waste.
                </p>
              </div>
              <div className={`p-6 bg-gray-50 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 transform ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <FaWater className="text-4xl mb-4 text-teal-500" />
                <h3 className="text-xl font-semibold mb-2">Water Conservation</h3>
                <p>
                  We implement water-saving initiatives and technologies to conserve water resources in communities.
                </p>
              </div>
              <div className={`p-6 bg-gray-50 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 transform ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <FaWind className="text-4xl mb-4 text-purple-500" />
                <h3 className="text-xl font-semibold mb-2">Renewable Energy</h3>
                <p>
                  Our renewable energy projects focus on harnessing wind and solar power to provide sustainable energy solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-gray-100 text-gray-800">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="p-6 bg-white rounded-lg shadow-lg transition-transform duration-500 hover:scale-105">
                <h3 className="text-2xl font-bold mb-4">10,000 Trees Planted</h3>
                <p>
                  Our reforestation efforts have led to the planting of over 10,000 trees, improving local biodiversity.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg transition-transform duration-500 hover:scale-105">
                <h3 className="text-2xl font-bold mb-4">500 Tons of Waste Recycled</h3>
                <p>
                  We have successfully recycled 500 tons of waste, reducing landfill contributions significantly.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg transition-transform duration-500 hover:scale-105">
                <h3 className="text-2xl font-bold mb-4">2 Million Liters of Water Saved</h3>
                <p>
                  Through our conservation programs, we have saved 2 million liters of water, benefiting local communities.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg transition-transform duration-500 hover:scale-105">
                <h3 className="text-2xl font-bold mb-4">5 Renewable Energy Projects</h3>
                <p>
                  We have implemented 5 renewable energy projects, significantly reducing carbon emissions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-green-600 text-white text-center">
          <div className="container mx-auto">
            <h3 className="text-2xl font-bold">Get Involved</h3>
            <p className="mt-4 mb-8">Support our initiatives and help us create a sustainable future.</p>
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

export default OurWork;
