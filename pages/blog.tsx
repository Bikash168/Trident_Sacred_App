// pages/blog.tsx
import React, { useEffect, useState } from 'react';
import Layout from '../pages/components/Layout';
import { FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';
import Head from 'next/head';

const Blog = () => {
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

  // Dummy blog posts data
  const blogPosts = [
    {
      title: 'The Future of Climate Resilience',
      date: 'September 5, 2024',
      author: 'Jane Doe',
      tags: ['Climate', 'Resilience'],
      excerpt: 'Exploring innovative strategies to enhance climate resilience in urban areas.',
      link: '/blog/the-future-of-climate-resilience',
    },
    {
      title: 'Sustainable Development Goals: Progress and Challenges',
      date: 'August 20, 2024',
      author: 'John Smith',
      tags: ['Sustainability', 'Development'],
      excerpt: 'An in-depth look at the progress made towards the Sustainable Development Goals and the challenges that remain.',
      link: '/blog/sustainable-development-goals-progress-and-challenges',
    },
    {
      title: 'Community Engagement in Environmental Initiatives',
      date: 'July 10, 2024',
      author: 'Emily Johnson',
      tags: ['Community', 'Environment'],
      excerpt: 'How engaging local communities can drive successful environmental initiatives and create lasting impact.',
      link: '/blog/community-engagement-in-environmental-initiatives',
    },
    {
      title: 'Innovative Green Technologies Transforming Cities',
      date: 'June 15, 2024',
      author: 'Michael Brown',
      tags: ['Technology', 'Green'],
      excerpt: 'A look at groundbreaking green technologies that are making cities more sustainable.',
      link: '/blog/innovative-green-technologies-transforming-cities',
    },
  ];

  return (
    <><>
      <Head>
        <title>Blog | SACRED Foundation</title>
      </Head>
    </><Layout>
        {/* Hero Section */}
        <section className="relative bg-gray-800 text-white min-h-[70vh] flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-opacity-50 bg-gradient-to-b from-gray-700 to-black"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-4xl sm:text-6xl font-bold animate__animated animate__fadeInDown">
              Blog
            </h1>
            <p className="mt-4 text-lg sm:text-2xl animate__animated animate__fadeInUp animate__delay-1s">
              Insights and Updates on Our Work
            </p>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-16 bg-white text-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Latest Blog Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className={`p-6 bg-gray-50 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 transform ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                  <h3 className="text-2xl font-semibold mb-4">{post.title}</h3>
                  <div className="flex items-center mb-4 text-gray-600">
                    <FaCalendarAlt className="mr-2" />
                    <span>{post.date}</span>
                    <span className="mx-2">|</span>
                    <FaUser className="mr-2" />
                    <span>{post.author}</span>
                    <span className="mx-2">|</span>
                    <FaTag className="mr-2" />
                    <span>{post.tags.join(', ')}</span>
                  </div>
                  <p className="mb-4">{post.excerpt}</p>
                  <a
                    href={post.link}
                    className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transition duration-300"
                  >
                    Read More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gray-800 text-white text-center">
          <div className="container mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="mb-8">Subscribe to our newsletter to receive the latest updates and blog posts directly in your inbox.</p>
            <a
              href="/subscribe"
              className="inline-block px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-500 transition duration-300"
            >
              Subscribe Now
            </a>
          </div>
        </section>
      </Layout></>
  );
};

export default Blog;
